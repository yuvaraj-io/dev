import { useRef } from "react";
import { Editor } from "@monaco-editor/react";

function CodeEditor({ value, onUpdate, remove, index }) {
    const editorRef = useRef(null);
    const latestValueRef = useRef(value); // Store the latest value reference

    // Update the ref whenever value changes
    latestValueRef.current = value;

    // Handle editor changes
    const handleEditorChange = (newValue) => {
        latestValueRef.current.code = newValue;
        onUpdate({ ...latestValueRef.current });
    };

    // Handle blur (update parent state)
    const handleEditorDidMount = (editor) => {
        editorRef.current = editor;
        editor.onDidBlurEditorText(() => {
            latestValueRef.current.code = editor.getValue();
            onUpdate({ ...latestValueRef.current }); // Use the latest reference
        });
    };

    // Handle language switch on button click
    const handleLanguageChange = (newLang) => {
        latestValueRef.current.codeType = newLang;
        onUpdate({ ...latestValueRef.current });
    };

    // Handle input changes
    const handleInputChange = (e, field) => {
        latestValueRef.current[field] = e.target.value;
        onUpdate({ ...latestValueRef.current });
    };

    return (
        <div className="border border-slate-200 p-4 mt-3">
          <button className="border border-red-400 p-2 rounded" onClick={() => remove(index)}>
                Remove
            </button>
            {index}

            {/* Buttons to switch language */}
            <div className="flex gap-3 cursor-pointer mb-3">
                {["html", "css", "javascript"].map((lang) => (
                    <button
                        key={lang}
                        className={`border px-4 py-2 ${
                            value.codeType === lang ? "bg-purple-400 text-white" : "border-purple-400"
                        }`}
                        onClick={() => handleLanguageChange(lang)}
                    >
                        {lang.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Input fields for link & button text */}
            <div className="flex gap-3 mb-3">
                <label className="flex items-center gap-2">
                    Link:
                    <input
                        type="text"
                        className="text-black border p-1"
                        value={value.link}
                        onChange={(e) => handleInputChange(e, "link")}
                    />
                </label>
                <label className="flex items-center gap-2">
                    BTN:
                    <input
                        type="text"
                        className="text-black border p-1"
                        value={value.btn}
                        onChange={(e) => handleInputChange(e, "btn")}
                    />
                </label>
            </div>

            {/* Code Editor */}
            <Editor
                height="300px"
                theme="vs-dark"
                language={value.codeType}
                value={value.code}
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
            />
        </div>
    );
}

export default CodeEditor;