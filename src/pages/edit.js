import { useEffect, useState } from "react";
import { useFetchCollectionsQuery, useFetchBlogQuery, usePutBlogMutation } from "../store/apis/blog";
import { useSearchParams } from "react-router-dom";
import Collection from "./learn/collection";
import BlogTemplate from "./learn/blogTemplate";
import Editor from "./write/editor";

export default function Blogs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlBlogID = searchParams.get("blog"); // Blog ID from URL
  const [blogID, setBlogID] = useState(urlBlogID || null); // Local state for blogID
  const [divContent, setDivContent] = useState();

  const [sendBlog, response] = usePutBlogMutation();

  // Fetch Blog only when blogID is available
  const { data: blogData, error: blogError, isLoading: blogLoading } = useFetchBlogQuery(blogID, { skip: !blogID });
  
  const editorChange = (ref) => {
    setDivContent(ref);
  }
  const handleSubmit = () => {
    const data = { blogContent: divContent};
 
    const sendCollectionAndPublish = async () => {
        debugger
        const blogResponse = await sendBlog({...data, blogTitle: blogData && blogData[0]?.heading, collections_id: atob(urlBlogID)});
        // dispatch({ type:'reset' });  // Reset the form state after publishing the blog.
        console.log(blogResponse);
        alert('check console and refresh');
    }
    sendCollectionAndPublish();
  };
  // Blog Content
  let blogContent;
  if (blogLoading) {
    blogContent = <div>Loading blog...</div>;
  } else if (blogError) {
    blogContent = <div>Error loading blog</div>;
  } else if (blogData) {
    const firstBlog = blogData[0];
    blogContent = firstBlog && JSON.parse(firstBlog.content) || [];
    console.log("blogData", blogContent);
    
    blogContent = 
    <>
     <h1 className="text-purple-400 font-bold text-3.5r py-5 pb-10">{firstBlog?.heading}</h1>
     <Editor blurChange={editorChange} intialEditior={blogContent}/>
    </>;
  }

  return (
    <div>
      <div className="flex">
        <div className="w-1/5 mob:w-10">
          <ul>
            {/* {collectionContent} */}
            <button className="bg-purple-500 text-white font-bold py-2 px-2 rounded-lg hover:bg-purple-600 text-1.5r" onClick={handleSubmit}>
                Submit blog
            </button>
          </ul>
        </div>
        <div className="w-3/5 mob:w-full">{blogContent}</div>
      </div>
    </div>
  );
}
