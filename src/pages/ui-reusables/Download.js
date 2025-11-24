import React from "react";


export default function Download() {
    const handleDownload = () => {
        const resumeUrl = "/assets/YUVARAJ_FULLSTACK_DEVELOPER.pdf"; // Path relative to public folder
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "YUVARAJ_FULLSTACK_DEVELOPER.pdf"; // Set custom file name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      return   <button className="p-1r px-5 border border-solid bg-purple-500 text-1.5r" onClick={handleDownload}>Download Resume</button>
       
}