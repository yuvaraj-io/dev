import React from "react";


const StackBlitzIcon = () => {
  return (
    <div className="relative flex items-center justify-center w-16 h-16">
     <img 
        src="https://c.staticblitz.com/assets/favicon_sb-861fe1b85c0dc928750c62de15fed96fc75e57ee366bd937bad17a3938917b3f.svg"
        alt="StackBlitz Logo"
        className="w-9 object-contain"
        />
      {/* Color Overlay */}
      <div className="absolute inset-0 mix-blend-multiply opacity-50" />
    </div>
  );
};

export default StackBlitzIcon;
