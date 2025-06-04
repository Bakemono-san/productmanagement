import React from "react";
import { ProductFormProps } from "@/types/type";
import { useProductForm } from "../logic/ProductForm";
import { useImageUpload } from "../logic/ImageUpload";

interface ProductFormContentProps {
  product: ProductFormProps['product'];
  onClose: () => void;
  onSave: () => void;
}

export function useProductFormContent({
  product,
  onClose,
  onSave,
}:ProductFormContentProps){
  const {
    formData,
    errors,
    categories,
    isEditMode,
    isLoading,
    handleInputChange,
    submitForm,
  } = useProductForm(product);

  const {
    dragActive,
    handleImageUpload,
    handleDrag,
    handleDrop,
    removeImage,
  } = useImageUpload(formData.images, (images) =>
    handleInputChange("images", images)
  );

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await submitForm(onClose, onSave);
  };

  return {
    formData,
    errors,
    categories,
    dragActive,
    isEditMode,
    isLoading,
    handleInputChange,
    handleImageUpload,
    handleDrag,
    handleDrop,
    removeImage,
    handleSubmit,
  };
};