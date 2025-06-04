"use client";
import { Category } from "@/types/type";
import useCategoryModal from "@/components/logic/CategoryModal";
import { ModalContainer } from "@/components/modals/components/Container";
import { ModalHeader } from "@/components/modals/components/Header";
import { CategoryFormContent } from "@/components/forms/CategoryFormContent";

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  category?: Category | null;
}

export default function CategoryModal({
  isOpen,
  onClose,
  category,
}: CategoryModalProps) {
  const {
    handleClose,
    handleImageChange,
    handleInputChange,
    handleSubmit,
    ImagePreview,
    formData,
    errors,
    isSubmitting,
    setImagePreview,
  } = useCategoryModal(isOpen, onClose, category);

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalHeader
        title={category ? "Edit Category" : "Create New Category"}
        onClose={handleClose}
        disabled={isSubmitting}
      />

      <CategoryFormContent
        formData={formData}
        errors={errors}
        imagePreview={ImagePreview}
        isSubmitting={isSubmitting}
        isEditing={!!category}
        onSubmit={handleSubmit}
        onInputChange={handleInputChange}
        onImageChange={handleImageChange}
        onImageError={() => setImagePreview("")}
        onCancel={handleClose}
      />
    </ModalContainer>
  );
}
