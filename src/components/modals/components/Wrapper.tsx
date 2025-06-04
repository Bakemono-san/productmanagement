import React from "react";

interface ModalWrapperProps {
  children: React.ReactNode;
}

export const ModalWrapper: React.FC<ModalWrapperProps> = ({ children }) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
      {children}
    </div>
  );
};