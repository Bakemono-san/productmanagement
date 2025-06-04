"use client";
import { FormEvent, ChangeEvent } from "react";
import { Image as ImageIcon, Save, Plus } from "lucide-react";
import { Category } from "@/types/type";
import Image from "next/image";



interface CategoryFormErrors {
  name?: string;
  Description?: string;
  Image?: string;
}

interface CategoryFormContentProps {
  formData: Category;
  errors: CategoryFormErrors;
  imagePreview: string;
  isSubmitting: boolean;
  isEditing: boolean;
  onSubmit: (e: FormEvent) => void;
  onInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onImageError: () => void;
  onCancel: () => void;
}

export function CategoryFormContent({
  formData,
  errors,
  imagePreview,
  isSubmitting,
  isEditing,
  onSubmit,
  onInputChange,
  onImageChange,
  onImageError,
  onCancel
}: CategoryFormContentProps) {
  return (
    <form onSubmit={onSubmit} className="p-6 space-y-6">
      <div>
        <label
          htmlFor="Name"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Category Name *
        </label>
        <input
          type="text"
          id="name"
          name="Name"
          value={formData.Name}
          onChange={onInputChange}
          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
            errors.name ? "border-red-300 bg-red-50" : "border-gray-300"
          }`}
          placeholder="Enter category name"
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="Description"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Description *
        </label>
        <textarea
          id="Description"
          name="Description"
          value={formData.Description}
          onChange={onInputChange}
          rows={4}
          className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
            errors.Description
              ? "border-red-300 bg-red-50"
              : "border-gray-300"
          }`}
          placeholder="Enter category Description"
          disabled={isSubmitting}
        />
        {errors.Description && (
          <p className="mt-1 text-sm text-red-600">
            {errors.Description}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="Image"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Image URL 
        </label>
        <div className="space-y-3">
          <input
            type="url"
            id="Image"
            name="Image"
            value={formData.Image}
            onChange={onImageChange}
            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
              errors.Image
                ? "border-red-300 bg-red-50"
                : "border-gray-300"
            }`}
            placeholder="https://example.com/Image.jpg"
            disabled={isSubmitting}
          />
          {errors.Image && (
            <p className="mt-1 text-sm text-red-600">{errors.Image}</p>
          )}

          {imagePreview && (
            <div className="mt-3">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Preview:
              </p>
              <div className="relative w-full h-32 bg-gray-100 rounded-xl overflow-hidden border-2 border-dashed border-gray-300">
                <Image
                width={100}
                height={100}
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                  onError={onImageError}
                />
              </div>
            </div>
          )}

          {!imagePreview && (
            <div className="w-full h-32 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center">
              <div className="text-center">
                <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">
                  Image preview will appear here
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Saving...</span>
            </>
          ) : (
            <>
              {isEditing ? (
                <Save className="w-4 h-4" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
              <span>
                {isEditing ? "Update Category" : "Create Category"}
              </span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}