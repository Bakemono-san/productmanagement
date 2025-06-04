import { ProductImage } from "@/types/type";
import { useState } from "react";

export const useImageUpload = (
  images: ProductImage[],
  onImagesChange: (images: ProductImage[]) => void
) => {
  const [dragActive, setDragActive] = useState<boolean>(false);

  const handleImageUpload = (files: FileList): void => {
    const newImages: ProductImage[] = Array.from(files).map((file) => ({
      id: Date.now() + Math.random(),
      file: file,
      url: URL.createObjectURL(file),
      name: file.name,
    }));

    onImagesChange([...images, ...newImages]);
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files);
    }
  };

  const removeImage = (imageId: number): void => {
    onImagesChange(images.filter((img) => img.id !== imageId));
  };

  return {
    dragActive,
    handleImageUpload,
    handleDrag,
    handleDrop,
    removeImage,
  };
};