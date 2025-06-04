import React, { DragEvent } from "react";
import { ProductFormProps } from "@/types/type";
import { useProductForm } from "@/components/logic/ProductForm";
import { useImageUpload } from "@/components/logic/ImageUpload";
import { ModalOverlay } from "@/components/modals/components/Overlay";
import { ModalWrapper } from "@/components/modals/components/Wrapper";
import { ModalHeader } from "@/components/modals/components/Header";
import { ProductFormSections } from "@/components/product/FormSection";
import { ModalFooter } from "@/components/modals/components/Footer";
import { ModalContent } from "@/components/modals/components/Content";

const ProductForm: React.FC<ProductFormProps> = ({
  product,
  isOpen = false,
  onClose = () => {},
  onSave = () => {},
}) => {
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

  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalWrapper >
        <ModalHeader
          title={isEditMode ? "Edit Product" : "Add New Product"}
          onClose={onClose}
        />

        <ModalContent>
          <ProductFormSections
            formData={formData}
            errors={errors}
            categories={categories!}
            selectedCategoryId={product?.Category.ID}
            dragActive={dragActive}
            handleInputChange={handleInputChange}
            handleImageUpload={handleImageUpload}
            handleDrag={(e) =>handleDrag(e as DragEvent<HTMLDivElement>)}
            handleDrop={handleDrop}
            removeImage={removeImage}
          />
        </ModalContent>

        <ModalFooter
          onCancel={onClose}
          onSave={handleSubmit}
          isLoading={isLoading}
          isEditMode={isEditMode}
        />
      </ModalWrapper>
     </ModalOverlay>
  );
};

export default ProductForm;