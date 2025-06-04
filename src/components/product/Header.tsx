"use client";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import ProductForm from "@/components/modals/Product";

export default function ProductHeader() {
  const [isProductModalOpen, setIsProductModalOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-gray-200 px-6 py-4 mb-6 flex justify-between items-center">
      <ProductForm
        isOpen={isProductModalOpen}
        product={null}
        onClose={() => setIsProductModalOpen(false)}
        onSave={() => console.log("Saved")}
      />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600 mt-1">
            Manage your product <span className="hidden md:inline">inventory and details</span>.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-3 mt-4 sm:mt-0">
        
        <button
          onClick={() => setIsProductModalOpen(true)}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add <span className="hidden md:inline ">Product</span></span>
        </button>
      </div>
    </div>
  );
}
