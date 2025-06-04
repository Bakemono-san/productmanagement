"use client";
import { ReactNode } from "react";

interface ModalContainerProps {
  isOpen: boolean;
  children: ReactNode;
}

export function ModalContainer({ isOpen, children }: ModalContainerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm transition-opacity">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all">
          {children}
        </div>
      </div>
    </div>
  );
}