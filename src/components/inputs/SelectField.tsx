import React from "react";
import { AlertCircle, LucideProps } from "lucide-react";
import { Category, User } from "@/types/type";

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Category[] | User[];
  placeholder: string;
  icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  required?: boolean;
  error?: string;
  selectedId?: number;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  icon: Icon,
  required = false,
  error,
  selectedId,
}) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      )}
      <select
        defaultValue={selectedId?.toString()||value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full ${
          Icon ? "pl-10" : "pl-4"
        } pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
          error ? "border-red-300 bg-red-50" : "border-gray-300"
        }`}
      >
        <option value="">{placeholder}</option>
        {options?.map((option) => (
          <option 
            key={option.ID} 
            value={option.ID}
            // selected={selectedId === option.ID}
          >
            {"Name" in option ? option.Name : option.Username}
            {"Email" in option && ` (${option.Email})`}
          </option>
        ))}
      </select>
    </div>
    {error && (
      <div className="flex items-center space-x-1 text-red-600 text-sm">
        <AlertCircle className="w-4 h-4" />
        <span>{error}</span>
      </div>
    )}
  </div>
);