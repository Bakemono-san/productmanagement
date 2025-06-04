"use client";
import {  Plus } from "lucide-react";
import React, { useState } from "react";
import CategoryModal from "@/components/modals/Category";

export default function CategoryHeader() {
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 px-6 py-4 mb-6 flex justify-between items-center">
      <CategoryModal
        isOpen={isCategoryModalOpen}
        category={null}
        onClose={() => setIsCategoryModalOpen(false)}
      />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
          <p className="text-gray-600 mt-1">
            Manage your categories <span className="hidden md:inline">inventory and details</span>.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-3 mb-6">
        <button
          onClick={() => setIsCategoryModalOpen(true)}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>
            Add <span className="hidden md:inline ">Category</span>
          </span>
        </button>
      </div>
    </div>
  );
}
