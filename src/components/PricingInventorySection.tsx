import React from "react";
import { DollarSign, Package } from "lucide-react";
import { FormErrors, ProductFormData } from "@/types/type";
import { InputField } from "@/components/inputs/InputField";

interface PricingInventorySectionProps {
  formData: ProductFormData;
  errors: FormErrors;
  onInputChange: (field: keyof ProductFormData, value: string) => void;
}

export const PricingInventorySection: React.FC<PricingInventorySectionProps> = ({
  formData,
  errors,
  onInputChange,
}) => (
  <div className="bg-gray-50 rounded-lg p-6 space-y-6">
    <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
      <DollarSign className="w-5 h-5" />
      <span>Pricing & Inventory</span>
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputField
        label="Price"
        value={formData.price}
        onChange={(value) => onInputChange("price", value)}
        type="number"
        placeholder="0.00"
        icon={DollarSign}
        required
        error={errors.price}
      />

      <InputField
        label="Stock Quantity"
        value={formData.stock}
        onChange={(value) => onInputChange("stock", value)}
        type="number"
        placeholder="0"
        icon={Package}
        required
        error={errors.stock}
      />
    </div>
  </div>
);