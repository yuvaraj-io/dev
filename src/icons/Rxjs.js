import React from "react";

const RxJSIcon = () => {
  return (
    <div className="relative flex items-center justify-center w-16 h-16">
      <img 
        src="https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png"
        alt="RxJS Logo"
        className="w-full h-full object-contain"
      />
      {/* Color Overlay */}
      <div className="absolute inset-0 mix-blend-multiply opacity-50" />
    </div>
  );
};

export default RxJSIcon;
