"use client";
import { X } from "lucide-react";

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
  disabled?: boolean;
}

export function ModalHeader({ title, onClose, disabled = false }: ModalHeaderProps) {
  return (
    <div className="flex items-center justify-between p-6 border-b border-gray-200 z-20">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <button
        onClick={onClose}
        disabled={disabled}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 disabled:opacity-50"
      >
        <X className="w-5 h-5 text-gray-500" />
      </button>
    </div>
  );
}