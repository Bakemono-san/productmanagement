import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateProduct, EditProduct, useCategories } from "@/Service/Api/api";
import { FormErrors, Product, ProductFormData, ProductImage } from "@/types/type";

export const useProductForm = (product?: Product | null) => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    description: "",
    price: "",
    stock: "",
    categoryId: '-1',
    userId: "",
    images: [],
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const queryClient = useQueryClient();

  const { data: categories, isLoading: categoriesLoading, error: categoriesError } = useCategories();

  const createMutation = useMutation({
    mutationKey: ["create_product"],
    mutationFn: CreateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const editMutation = useMutation({
    mutationKey: ["edit_product"],
    mutationFn: ({ id, product }: { id: number; product: Partial<Product> }) =>
      EditProduct(id, product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const isEditMode = !!product;
  const isLoading = createMutation.isPending || editMutation.isPending;

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.Name || "",
        description: product.Description || "",
        price: product.Price?.toString() || "",
        stock: product.Stock?.toString() || "",
        categoryId: product.Category.ID?.toString() || "-1",
        userId: product.UserID?.toString() || "",
        images: [],
      });
    }
  }, [product]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Product name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Product name must be at least 2 characters";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    }

    if (!formData.price) {
      newErrors.price = "Price is required";
    } else if (parseFloat(formData.price) <= 0) {
      newErrors.price = "Price must be greater than 0";
    }

    if (!formData.stock) {
      newErrors.stock = "Stock quantity is required";
    } else if (parseInt(formData.stock) < 0) {
      newErrors.stock = "Stock cannot be negative";
    }

    if (!formData.categoryId) {
      newErrors.categoryId = "Category is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    field: keyof ProductFormData,
    value: string | ProductImage[]
  ): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      price: "",
      stock: "",
      categoryId: "-1",
      userId: "",
      images: [],
    });
    setErrors({});
  };

  const submitForm = async (onClose: () => void, onSave: (product: Product) => void) => {
    if (!validateForm()) {
      return;
    }

    console.log(formData);
    

    try {
      const productData: Product = {
        Name: formData.name,
        Description: formData.description,
        Price: parseFloat(formData.price),
        Stock: parseInt(formData.stock),
        Category: categories!.find((cat) => cat.ID === parseInt(formData.categoryId))!,
        CreatedAt: !product ? new Date() : null,
        UserID: parseInt(formData.userId),
        UpdatedAt: product ? new Date() : null,
        DeletedAt: null,
        CategoryID: parseInt(formData.categoryId),
      };

      if (product) {
        await editMutation.mutateAsync({ id: product.ID!, product: productData });
      } else {
        await createMutation.mutateAsync(productData);
      }

      onClose();
      onSave(productData);

      if (!isEditMode) {
        resetForm();
      }
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return {
    formData,
    errors,
    categories,
    categoriesLoading,
    categoriesError,
    isEditMode,
    isLoading,
    handleInputChange,
    submitForm,
    resetForm,
  };
};