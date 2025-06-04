"use client";
import { CreateCategory, EditCategory } from "@/Service/Api/api";
import { Category } from "@/types/type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

export default function useCategoryModal(
  isOpen: boolean,
  onClose: () => void,
  category: Category|null|undefined
) {
  const [formData, setFormData] = useState<Category>({
    Name: "",
    Description: "",
    Image: "",
  });
  const [ImagePreview, setImagePreview] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const queryClient = useQueryClient();

  const createCategory = useMutation({
    mutationFn: CreateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      onClose();
    },
  });

  const updateCategory = useMutation({
    mutationFn: ({ id, product }: { id: number; product: Partial<Category> }) =>
      EditCategory(id, product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      onClose();
    },
  });

  const onSave = () => {
    setFormData({
      Name: "",
      Description: "",
      Image: "",
    });
    setImagePreview("");
    setErrors({});
  };

  useEffect(() => {
    if (isOpen) {
      if (category) {
        setFormData({
          ID: category.ID,
          Name: category.Name,
          Description: category.Description,
          Image: category.Image,
        });
        setImagePreview(category.Image!);
      } else {
        setFormData({
          Name: "",
          Description: "",
          Image: "",
        });
        setImagePreview("");
      }
      setErrors({});
    }
  }, [isOpen, category]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      Image: value,
    }));
    setImagePreview(value);
    if (errors.Image) {
      setErrors((prev) => ({
        ...prev,
        Image: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.Name.trim()) {
      newErrors.Name = "Category Name is required";
    } else if (formData.Name.trim().length < 2) {
      newErrors.Name = "Category Name must be at least 2 characters";
    }

    if (!formData.Description.trim()) {
      newErrors.Description = "Description is required";
    } else if (formData.Description.trim().length < 10) {
      newErrors.Description = "Description must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (category) {
        updateCategory.mutate({
          id: category.ID!,
          product: {
            Name: formData.Name,
            Description: formData.Description,
            Image: formData.Image,
            UpdatedAt: new Date().toISOString(),
          },
        });
      } else {
        createCategory.mutate({
          Name: formData.Name,
          Description: formData.Description,
          CreatedAt: new Date().toISOString(),
        });
      }
      onSave();
      onClose();
    } catch (error) {
      console.error("Error saving category:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
    }
  };
  return {
    handleClose,
    handleImageChange,
    handleInputChange,
    handleSubmit,
    onSave,
    ImagePreview,
    formData,
    errors,
    isSubmitting,
    setImagePreview
  };
}
