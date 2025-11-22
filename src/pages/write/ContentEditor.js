import React, { useState, useRef, useEffect } from "react";
import "./custom.module.css";

const MediumLikeEditor = ({ handleChange, value, index, remove }) => {
  const [showToolbar, setShowToolbar] = useState(false);
  const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 });
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");

  const editorRef = useRef(null);
  const savedRangeRef = useRef(null); // 🔴 store selection range here

  useEffect(() => {
    if (value !== undefined && editorRef.current) {
      editorRef.current.innerHTML = value.content || "";
    }
  }, [value]);

  const reciveChange = () => {
    if (editorRef.current) {
      handleChange(editorRef.current.innerHTML, index);
    }
  };

  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      setShowToolbar(false);
      return;
    }

    const range = selection.getRangeAt(0);

    // make sure selection is inside our editor
    if (!editorRef.current.contains(range.commonAncestorContainer)) {
      setShowToolbar(false);
      return;
    }

    const selectedText = selection.toString().trim();

    if (selectedText) {
      savedRangeRef.current = range; // ✅ save the range

      const rect = range.getBoundingClientRect();
      setToolbarPosition({
        top: rect.top + window.scrollY - 40,
        left: rect.left + rect.width / 2,
      });
      setShowToolbar(true);
    } else {
      setShowToolbar(false);
    }
  };

  const restoreSelection = () => {
    const selection = window.getSelection();
    selection.removeAllRanges();

    if (savedRangeRef.current) {
      selection.addRange(savedRangeRef.current);
    }
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  const applyFormatting = (command) => {
    if (!savedRangeRef.current) return;

    restoreSelection();                         // ✅ restore selection
    document.execCommand(command, false, null); // bold / italic / underline
    reciveChange();
    setShowToolbar(false);
  };

  const handleAddLink = () => {
    setShowLinkInput(true);
  };

  const insertLink = () => {
    if (!savedRangeRef.current) return;

    restoreSelection(); // ✅ restore selection before creating link
    if (linkUrl.trim()) {
      document.execCommand("createLink", false, linkUrl);
    }

    setShowLinkInput(false);
    setLinkUrl("");
    reciveChange();
    setShowToolbar(false);
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const html = e.clipboardData.getData("text/html");

    if (!html) {
      const text = e.clipboardData.getData("text/plain");
      document.execCommand("insertText", false, text);
      reciveChange();
      return;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // 🔵 Keep tags, remove all attributes except href on <a>
    doc.body.querySelectorAll("*").forEach((el) => {
      if (el.tagName.toLowerCase() === "a") {
        const href = el.getAttribute("href");
        [...el.attributes].forEach((attr) => el.removeAttribute(attr.name));
        if (href) el.setAttribute("href", href);
      } else {
        [...el.attributes].forEach((attr) => el.removeAttribute(attr.name));
      }
    });

    const cleaned = doc.body.innerHTML;
    document.execCommand("insertHTML", false, cleaned);
    reciveChange();
  };

  return (
    <div className="mt-5" style={{ position: "relative" }}>
      <button
        className={`border ${
          value.type === "subheading" ? "border-green-400" : "border-red-400"
        } p-2 rounded`}
        onClick={() => remove(index)}
      >
        Remove
      </button>{" "}
      {index}
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onMouseUp={handleTextSelection}
        onKeyUp={handleTextSelection}
        onInput={reciveChange}          // 🔁 live updates instead of onBlur
        onPaste={handlePaste}           // ✅ sanitized paste
        className="text-3r contentEdit"
        style={{
          border: `${
            value.type === "subheading" ? "1px solid green" : "1px solid #ccc"
          }`,
          padding: "10px",
          borderRadius: "5px",
          minHeight: `${value.type === "subheading" ? "50px" : "100px"}`,
          cursor: "text",
        }}
      ></div>

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
            onMouseDown={(e) => e.preventDefault()} // prevent losing selection
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
            onMouseDown={(e) => e.preventDefault()}
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
            onMouseDown={(e) => e.preventDefault()}
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
            onMouseDown={(e) => e.preventDefault()}
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
