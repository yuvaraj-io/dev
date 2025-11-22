import React, { useState, useRef, useEffect } from "react";
import "./custom.module.css";

const MediumLikeEditor = ({ handleChange, value, index, remove }) => {
  const [showToolbar, setShowToolbar] = useState(false);
  const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 });
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");

  const editorRef = useRef(null);
  const savedRangeRef = useRef(null);

  /* ---------------------------------
     1️⃣ FIX CURSOR: Only set innerHTML 
        when value.content ACTUALLY changes
  ----------------------------------- */
  useEffect(() => {
    if (
      editorRef.current &&
      value?.content !== undefined &&
      editorRef.current.innerHTML !== value.content
    ) {
      editorRef.current.innerHTML = value.content || "";
    }
  }, [value?.content]);

  /* ---------------------------------
     2️⃣ Update parent only when needed
  ----------------------------------- */
  const reciveChange = () => {
    if (!editorRef.current) return;

    const html = editorRef.current.innerHTML;

    // Prevent unnecessary re-render → NO CURSOR JUMP
    if (html !== value.content) {
      handleChange(html, index);
    }
  };

  /* ---------------------------------
     3️⃣ Save selection for toolbar actions
  ----------------------------------- */
  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      setShowToolbar(false);
      return;
    }

    const range = selection.getRangeAt(0);

    // Ensure selection is inside editor
    if (!editorRef.current.contains(range.commonAncestorContainer)) {
      setShowToolbar(false);
      return;
    }

    const selectedText = selection.toString().trim();
    if (!selectedText) {
      setShowToolbar(false);
      return;
    }

    savedRangeRef.current = range;

    const rect = range.getBoundingClientRect();
    setToolbarPosition({
      top: rect.top + window.scrollY - 40,
      left: rect.left + rect.width / 2,
    });

    setShowToolbar(true);
  };

  /* ---------------------------------
     4️⃣ Restore selection before execCommand
  ----------------------------------- */
  const restoreSelection = () => {
    const selection = window.getSelection();
    selection.removeAllRanges();

    if (savedRangeRef.current) {
      selection.addRange(savedRangeRef.current);
    }

    editorRef.current?.focus();
  };

  /* ---------------------------------
     5️⃣ Bold / italic / underline
  ----------------------------------- */
  const applyFormatting = (command) => {
    if (!savedRangeRef.current) return;

    restoreSelection();
    document.execCommand(command, false, null);

    reciveChange();
    setShowToolbar(false);
  };

  /* ---------------------------------
     6️⃣ Link Handling
  ----------------------------------- */
  const handleAddLink = () => {
    setShowLinkInput(true);
  };

  const insertLink = () => {
    if (!savedRangeRef.current) return;

    restoreSelection();

    if (linkUrl.trim()) {
      document.execCommand("createLink", false, linkUrl);
    }

    setShowLinkInput(false);
    setLinkUrl("");
    reciveChange();
    setShowToolbar(false);
  };

  /* ---------------------------------
     7️⃣ Paste Sanitizer (Keep tags → remove attributes except href)
  ----------------------------------- */
  const handlePaste = (e) => {
    e.preventDefault();

    const html = e.clipboardData.getData("text/html");

    // plain text fallback
    if (!html) {
      const text = e.clipboardData.getData("text/plain");
      document.execCommand("insertText", false, text);
      reciveChange();
      return;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

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

  /* ---------------------------------
     8️⃣ Render
  ----------------------------------- */
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
        onInput={reciveChange}
        onPaste={handlePaste}
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

      {/* ---------------------------------
          Toolbar
      ----------------------------------- */}
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
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => applyFormatting("bold")}
            style={{ background: "transparent", border: "none", color: "#fff" }}
          >
            <b>B</b>
          </button>
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => applyFormatting("italic")}
            style={{ background: "transparent", border: "none", color: "#fff" }}
          >
            <i>I</i>
          </button>
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => applyFormatting("underline")}
            style={{ background: "transparent", border: "none", color: "#fff" }}
          >
            <u>U</u>
          </button>
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleAddLink}
            style={{ background: "transparent", border: "none", color: "#fff" }}
          >
            🔗
          </button>
        </div>
      )}

      {/* ---------------------------------
          Link Input
      ----------------------------------- */}
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
