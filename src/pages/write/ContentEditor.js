

import React, { useState, useRef, useEffect } from "react";
import "./custom.module.css";

const MediumLikeEditor = ({handleChange, value, index, remove}) => {
  
  const [showToolbar, setShowToolbar] = useState(false);
  const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 });
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const editorRef = useRef();

  useEffect(() => {
    if (value !== undefined) {
      editorRef.current.innerHTML = value.content;
    }
  }, [value]); 


  const reciveChange = () => {
    if (editorRef.current) {
      handleChange(editorRef.current.innerHTML, index); // Pass innerHTML to parent
    }
  };
 
  const handleTextSelection = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    const range = selection.rangeCount ? selection.getRangeAt(0) : null;

    if (selectedText && range) {
      const rect = range.getBoundingClientRect();
      setToolbarPosition({
        top: rect.top + window.scrollY - 40, // Position toolbar above selection
        left: rect.left + rect.width / 2, // Center the toolbar horizontally
      });
      setShowToolbar(true);
    } else {
      setShowToolbar(false); // Hide toolbar if no text is selected
    }
  };

  const applyFormatting = (command) => {
    document.execCommand(command, false, null);
    setShowToolbar(false); // Hide toolbar after applying formatting
  };

  const handleAddLink = () => {
    setShowLinkInput(true);
  };

  const insertLink = () => {
    if (linkUrl.trim()) {
      document.execCommand("createLink", false, linkUrl);
    }
    setShowLinkInput(false);
    setLinkUrl("");
    setShowToolbar(false); // Hide toolbar after inserting link
  };

  return (
    <div className="mt-5">
      <button className={`border ${value.type === "subheading" ? 'border-green-400' :'border-red-400'} p-2 rounded`} onClick={() => remove(index)}>Remove</button> {index}
      <div
        ref={editorRef}
        contentEditable
        onBlur={reciveChange}
        suppressContentEditableWarning
        onMouseUp={handleTextSelection}
        className="text-3r contentEdit"
        onPaste={(e) => {
            e.preventDefault();
            const text = e.clipboardData.getData("text/plain");
            document.execCommand("insertText", false, text);
        }}
        style={{
          border: `${value.type === "subheading" ? '1px solid green' :'1px solid #ccc'}`,
          padding: "10px",
          borderRadius: "5px",
          minHeight: `${value.type === "subheading" ? '50px' : '100px'}`,
          cursor: "text",
        }}
      >
        
      </div>

      {showToolbar && (
        <div
          className="text-2.5r flex gap-2r"
          style={{
            position: "absolute",
            top: toolbarPosition.top,
            left: toolbarPosition.left,
            backgroundColor: "#333",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "5px",
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
          <button
            onClick={() => applyFormatting("bold")}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <b>B</b>
          </button>
          <button
            onClick={() => applyFormatting("italic")}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <i>I</i>
          </button>
          <button
            onClick={() => applyFormatting("underline")}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <u>U</u>
          </button>
          <button
            onClick={handleAddLink}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            🔗
          </button>
        </div>
      )}

      {showLinkInput && (
        <div
          style={{
            position: "absolute",
            top: toolbarPosition.top + 50,
            left: toolbarPosition.left,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            padding: "5px",
            borderRadius: "5px",
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
          <input
            type="text"
            placeholder="Enter URL"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            className="text-black"
            style={{
              padding: "5px",
              marginRight: "5px",
              border: "1px solid #ccc",
              borderRadius: "3px",
            }}
          />
          <button
            onClick={insertLink}
            style={{
              padding: "5px 10px",
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default MediumLikeEditor;
