import { useState, useReducer } from "react";
import SelectTopics from "./write/selectTopics";
import Editor from "./write/editor";
import { usePostCollectionMutation, usePostBlogMutation } from "../store/apis/blog";


const initialState = { topicId: null, collectionTitle: null, blogTitle: null };
function reducer(state, action) {
    switch (action.type) {
      case 'topic':
        return { ...state, topicId: action.payload };
      case 'collection':
        return { ...state, collectionTitle: action.payload };
      case 'blog':
        return { ...state, blogTitle: action.payload };
      case 'reset':
        return initialState;
      default:
        throw new Error('Unknown action type');
    }
}

function WriteBlog(){


    const [ sendCollections, collections ] = usePostCollectionMutation();
    const [ sendBlog, blogs ] = usePostBlogMutation();


    const [inputState, dispatch] = useReducer(reducer, initialState);
    const [divContent, setDivContent] = useState();

    // useEffect(() => {

    // }, [])

    const editorChange = (ref) => {
        setDivContent(ref);
    }

    const handleTopicChange = (topic) => {
        dispatch({ type: 'topic', payload: topic.id });
    };

    const handleNavTitle = (ev) => {
        dispatch({ type: 'collection', payload: ev.target.value });
    };

    const handleBlogTitle = (ev) => {
        dispatch({ type: 'blog', payload: ev.target.value });

    };

    const handleSubmit = () => {
        const data = { ...inputState, blogContent: divContent};
        if(!inputState.topicId || !inputState.blogTitle || !inputState.collectionTitle) {
            alert("Please fill out all required fields");  // Alert user if required fields are not filled out.
            return;
        }

        const sendCollectionAndPublish = async () => {
           const collectionResponse = await sendCollections(data);
           let collectionID = collectionResponse.data.id;
           const blogResponse = await sendBlog({...data, collectionId: collectionID});
            // dispatch({ type:'reset' });  // Reset the form state after publishing the blog.
        }
        sendCollectionAndPublish();

    };

    return (
        <div className="pt-8">
            <div className="flex justify-between pb-4">
                <SelectTopics topicSend={handleTopicChange}/>
                <button className="bg-purple-500 text-white font-bold py-2 px-2 rounded-lg hover:bg-purple-600 text-1.5r" onClick={handleSubmit}>
                    Submit blog
                </button>
            </div>

            <div className="text-1.5r my-2 mt-3">Navigation Title:</div>
            <input className="w-full p-2 border text-black text-1.5r" type="text" value={inputState.collectionTitle || ''} onInput={ handleNavTitle} />
            <div className="text-1.5r my-2 mt-3">Blog title:</div>
            <input className="w-full p-2 border text-black text-1.5r" type="text" value={inputState.blogTitle || ''} onInput={handleBlogTitle} />
            
            <Editor blurChange={editorChange} />

           
            <br/>
            <br/>

        </div>
        

    )
}

export default WriteBlog;