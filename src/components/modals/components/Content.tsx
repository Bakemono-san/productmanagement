import React from "react";

interface ModalContentProps {
  children: React.ReactNode;
}

export const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
  return (
    <div className="p-6 overflow-y-auto max-h-[calc(80vh-140px)]">
      <div className="space-y-6">{children}</div>
    </div>
  );
};