import React from "react";
import { ImageIcon, Upload, Trash2 } from "lucide-react";
import { ProductImage } from "@/types/type";
import Image from "next/image";

interface ImageUploadSectionProps {
  images: ProductImage[];
  dragActive: boolean;
  onImageUpload: (files: FileList) => void;
  onDrag: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onRemoveImage: (imageId: number) => void;
}

export const ImageUploadSection: React.FC<ImageUploadSectionProps> = ({
  images,
  dragActive,
  onImageUpload,
  onDrag,
  onDrop,
  onRemoveImage,
}) => (
  <div className="bg-gray-50 rounded-lg p-6 space-y-6">
    <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
      <ImageIcon className="w-5 h-5" />
      <span>Product Images</span>
    </h3>

    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-200 ${
        dragActive
          ? "border-blue-400 bg-blue-50"
          : "border-gray-300 hover:border-gray-400"
      }`}
      onDragEnter={onDrag}
      onDragLeave={onDrag}
      onDragOver={onDrag}
      onDrop={onDrop}
    >
      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
      <p className="text-gray-600 mb-2">
        Drag & drop images here, or click to select
      </p>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => e.target.files && onImageUpload(e.target.files)}
        className="hidden"
        id="image-upload"
      />
      <label
        htmlFor="image-upload"
        className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
      >
        Choose Files
      </label>
    </div>

    {images.length > 0 && (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative group">
            <Image
              src={image.url}
              alt={image.name}
              className="w-full h-24 object-cover rounded-lg border border-gray-200"
              width={100}
              height={100}
            />
            <button
              type="button"
              onClick={() => onRemoveImage(image.id)}
              className="absolute -top-2 -right-2 p-1 bg-red-500 hover:bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <Trash2 className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    )}
  </div>
);
