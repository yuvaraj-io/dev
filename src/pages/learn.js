import { useEffect, useState } from "react";
import { useFetchCollectionsQuery, useFetchBlogQuery, useFetchSectionsQuery, useFetchSectionCollectionsQuery } from "../store/apis/blog";
import { useSearchParams } from "react-router-dom";
import Collection from "./learn/collection";
import BlogTemplate from "./learn/blogTemplate";
import SectionFormat from "./section-aligns/section-format";
import SectionView from "./learn/sectionView";

export default function Blogs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const learnID = searchParams.get("id");
  const urlBlogID = searchParams.get("blog"); // Blog ID from URL

  const [blogID, setBlogID] = useState(urlBlogID || null); // Local state for blogID

  // Fetch Collections
  // const { data: collections, error, isLoading } = useFetchCollectionsQuery(learnID, { skip: !learnID });
  // const { data: sectionData, isLoading, error } = useFetchSectionsQuery(learnID, { skip: !learnID });
  // Fetch Blog only when blogID is available
  console.log(blogID);
  const { data: blogData, error: blogError, isLoading: blogLoading } = useFetchBlogQuery(blogID, { skip: !blogID });
  const { data: sectionCollectionData, isLoading, error } = useFetchSectionCollectionsQuery(learnID, { skip: !learnID });
  
  // Effect to fetch blog after collections load
  useEffect(() => {
    console.log(sectionCollectionData);
    if(learnID && urlBlogID){
      return
    }
    if (sectionCollectionData && sectionCollectionData.length > 0) {
      const firstBlogID = sectionCollectionData[0] && sectionCollectionData[0].collections[0] && sectionCollectionData[0].collections[0];   
      handleBlogSelect(firstBlogID);
      // setSearchParams({ id: learnID, blog: firstBlogID });
    }
  }, [sectionCollectionData]);

  // Handle click on a collection item
  const handleBlogSelect = (blogs) => {
    const encodedBlogID = btoa(blogs.collectionId);
    setBlogID(encodedBlogID);
    setSearchParams({ id: learnID, blog: encodedBlogID });
  };

  // Collection Content
  let collectionContent;
  if (isLoading) {
    collectionContent = <div>Loading collections...</div>;
  } else if (error) {
    collectionContent = <div>Error loading collections</div>;
  } else if (sectionCollectionData) {
    // collectionContent = <Collection allCollection={collections} blogSelect={handleBlogSelect} />
    collectionContent = <>
       {sectionCollectionData &&
            sectionCollectionData.map(c => (
              <div
                key={c.id}
                className="text-left mt-4 p-1 px-4 text-2.5r mob:text-1.5r rounded-lg text-purple-500"
              >
                {c.id} {c.section_name}

                {c.collections.map(s => (
                  <div
                    key={s.id}
                    className={
                       `text-left mt-4 p-1 px-4 text-2.5r mob:text-1.5r rounded-lg text-white 
                        ${ btoa(s.collectionId) === blogID && "bg-gray-500"}`
                    }
                    onClick={() => handleBlogSelect(s)}
                  >
                   {s.collection_title}
                  </div>
                ))}
              </div>
            ))}
    </>
  }

  // Blog Content
  let blogContent;
  if (blogLoading) {
    blogContent = <div>Loading blog...</div>;
  } else if (blogError) {
    blogContent = <div>Error loading blog</div>;
  } else if (blogData) {
    const firstBlog = blogData[0];
    blogContent = firstBlog && JSON.parse(firstBlog.content) || [];
    
    blogContent = <BlogTemplate heading={firstBlog?.heading} blog={blogContent}/>
    

    // blogContent = (
    //   <div>
    //     <h1>{firstBlog.heading}</h1>
    //     {jsonContent.map((x, index) => (
    //       <div key={index}>{JSON.stringify(x)}</div>
    //     ))}
    //   </div>
    // );
  }

  return (
    <div>
      <div className="flex">
        <div className="w-1/5 mob:w-10">
          <ul>{collectionContent}</ul>
        </div>
        <div className="w-3/5 mob:w-full">{blogContent}</div>
      </div>
    </div>
  );
}
