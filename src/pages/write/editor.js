import { useEffect, useReducer } from "react";
import ContentEditor from "./ContentEditor";
import CodeEditor from "./CodeEditor";
import ImgEditor from "./imgEditor.js";

const initialState = [];

function reducer(state, action) {
    switch (action.type) {
        case "image":
            return [
                ...state,
                {
                    id: Date.now(),
                    type: "image",
                    image: "",
                    link: "",
                    btn: "",
                },
            ];

        case "updateImage":
            return state.map((item) =>
                item.id === action.id ? { ...item, image: action.payload.image } : item
            );

        case "updateImageFields":
            return state.map((item) =>
                item.id === action.id ? { ...item, ...action.payload } : item
            );

        case "code":
            return [
                ...state,
                {
                    id: Date.now(),
                    type: "code",
                    code: action.payload.code,
                    codeType: action.payload.codeType || "javascript",
                    link: action.payload.link || "",
                    btn: action.payload.btn || "",
                },
            ];

        case "codeEdit":
            return state.map((item) =>
                item.id === action.id ? { ...item, ...action.payload } : item
            );

        case "content":
            return [
                ...state,
                { id: Date.now(), type: "content", content: action.payload.content },
            ];

        case "contentEdit":
            return state.map((item) =>
                item.id === action.id ? { ...item, content: action.payload.content } : item
            );
        case "subheading":
            return [
                ...state,
                { id: Date.now(), type: "subheading", content: action.payload.content },
            ];

        case "subheadingEdit":
            return state.map((item) =>
                item.id === action.id ? { ...item, content: action.payload.content } : item
            );

        case "remove":
            return state.filter((item) => item.id !== action.payload.id);

        case "reset":
            return initialState;

        default:
            throw new Error("Unknown action type");
    }
}

function Editor({ blurChange, intialEditior }) {

    const [allEditor, setEditor] = useReducer(reducer, intialEditior ?? initialState);

    useEffect(() => {
        blurChange(allEditor);
        console.log('all',allEditor);
    }, [allEditor]);

    const removeIndex = (id) => {
        setEditor({ type: "remove", payload: { id } });
    };

    const addContent = () => {
        setEditor({ type: "content", payload: { content: "" } });
    };

    const addSubhead = () => {
        setEditor({ type: "subheading", payload: { content: "" } });
    };

    const addCodeEditor = () => {
        setEditor({
            type: "code",
            payload: { code: "", codeType: "html", link: "", btn: "Try on Stackblitz" },
        });
    };

    const addImgEditor = () => {
        setEditor({ type: "image" });
    };

    return (
        <div>
            {allEditor.map((editor) => {
                if (editor.type === "content" || editor.type === "subheading") {
                    return (
                        <ContentEditor
                            key={editor.id}
                            value={editor}
                            index={editor.id}
                            remove={removeIndex}
                            handleChange={(value) =>
                                setEditor({
                                    type: editor.type === "subheading" ? 'subheadingEdit' : "contentEdit",
                                    id: editor.id,
                                    payload: { content: value },
                                })
                            }
                        />
                    );
                }
                if (editor.type === "code") {
                    return (
                        <CodeEditor
                            key={editor.id}
                            value={editor}
                            index={editor.id}
                            remove={removeIndex}
                            onUpdate={(value) =>{
                                setEditor({
                                    type: "codeEdit",
                                    id: value.id,
                                    payload: value,
                                })
                            }}
                        />
                    );
                }
                if (editor.type === "image") {
                    return (
                        <ImgEditor
                            key={editor.id}
                            value={editor}
                            index={editor.id}
                            remove={removeIndex}
                            onUpdate={(id, data) =>
                                setEditor({
                                    type: "updateImageFields",
                                    id,
                                    payload: data,
                                })
                            }
                        />
                    );
                }
                return null;
            })}

            <div className="mt-4 flex text-slate-200 justify-center gap-8">
                <button className="p-5 border border-purple-300" onClick={addCodeEditor}>
                    Code Editor
                </button>
                <button className="p-5 border border-purple-300" onClick={addContent}>
                    Content
                </button>
                <button className="p-5 border border-purple-300" onClick={addSubhead}>
                    Subheading
                </button>
                <button className="p-5 border border-purple-300" onClick={addImgEditor}>
                    Image
                </button>
            </div>
        </div>
    );
}

export default Editor;
