import React from "react";
import { ImageUploadSection } from "@/components/ImageUploadSection";
import { PricingInventorySection } from "@/components/PricingInventorySection";
import { BasicInformationSection } from "@/components/BasicInformationSection";
import { Category, FormErrors, ProductFormData, ProductImage } from "@/types/type";

interface ProductFormSectionsProps {
  formData: ProductFormData;
  errors: FormErrors;
  categories: Category[];
  selectedCategoryId?: number;
  dragActive: boolean;
  handleInputChange: (
    field:  keyof ProductFormData,
    value: string | ProductImage[]
  ) => void;
  handleImageUpload: (files: FileList) => void;
  handleDrag: (e: React.DragEvent) => void;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  removeImage: (index: number) => void;
}

export const ProductFormSections: React.FC<ProductFormSectionsProps> = ({
  formData,
  errors,
  categories,
  selectedCategoryId,
  dragActive,
  handleInputChange,
  handleImageUpload,
  handleDrag,
  handleDrop,
  removeImage,
}) => {
  return (
    <>
      <BasicInformationSection
        formData={formData}
        errors={errors}
        categories={categories || []}
        selectedCategoryId={selectedCategoryId}
        onInputChange={handleInputChange}
      />

      <PricingInventorySection
        formData={formData}
        errors={errors}
        onInputChange={handleInputChange}
      />

      <ImageUploadSection
        images={formData.images}
        dragActive={dragActive}
        onImageUpload={handleImageUpload}
        onDrag={handleDrag}
        onDrop={handleDrop}
        onRemoveImage={removeImage}
      />
    </>
  );
};
