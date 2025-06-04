import React from "react";

interface ModalOverlayProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const ModalOverlay: React.FC<ModalOverlayProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity flex items-center justify-center p-4 z-50">
      {children}
    </div>
  );
};