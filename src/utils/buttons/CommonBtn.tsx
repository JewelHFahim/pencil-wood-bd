import React from "react";

interface CommonBtnProps {
  children: string;
}

const CommonBtn: React.FC<CommonBtnProps> = ({ children }) => {
  return (
    <button className="w-full uppercase font-semibold border border-primary h-[40px] text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:border-primary">
      {children}
    </button>
  );
};

export default CommonBtn;
