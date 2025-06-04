import React from "react";
import { FileText, Package, Tag } from "lucide-react";
import { InputField } from "@/components/inputs/InputField";
import { SelectField } from "@/components/inputs/SelectField";
import { TextAreaField } from "@/components/inputs/TextAreaField";
import { Category, FormErrors, ProductFormData } from "@/types/type";

interface BasicInformationSectionProps {
  formData: ProductFormData;
  errors: FormErrors;
  categories: Category[];
  selectedCategoryId?: number;
  onInputChange: (field: keyof ProductFormData, value: string) => void;
}

export const BasicInformationSection: React.FC<BasicInformationSectionProps> = ({
  formData,
  errors,
  categories,
  selectedCategoryId,
  onInputChange,
}) => (
  <div className="bg-gray-50 rounded-lg p-6 space-y-6">
    <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
      <FileText className="w-5 h-5" />
      <span>Basic Information</span>
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputField
        label="Product Name"
        value={formData.name}
        onChange={(value) => onInputChange("name", value)}
        placeholder="Enter product name"
        icon={Package}
        required
        error={errors.name}
      />

      <SelectField
        label="Category"
        value={formData.categoryId}
        onChange={(value) => onInputChange("categoryId", value)}
        options={categories}
        placeholder="Select a category"
        icon={Tag}
        required
        error={errors.categoryId}
        selectedId={selectedCategoryId}
      />
    </div>

    <TextAreaField
      label="Description"
      value={formData.description}
      onChange={(value) => onInputChange("description", value)}
      placeholder="Enter detailed product description"
      required
      error={errors.description}
      rows={4}
    />
  </div>
);