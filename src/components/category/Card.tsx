"use client";
import React from "react";
import { Edit, Trash2 } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteCategory } from "@/Service/Api/api";
import Image from "next/image";

interface CardProps {
  name: string;
  description: string;
  image: string;
  id: number;
  onEdit: () => void;
}

export default function Card({
  name,
  description,
  image,
  id,
  onEdit,
}: CardProps) {
  const queryClient = useQueryClient();

  const mutationDeleteCategory = useMutation({
    mutationKey: ["deleteCategory", id],
    mutationFn: async (id: number) => DeleteCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error) => {
      console.error("Error deleting category:", error);
    },
  });

  return (
    <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-300 hover:-translate-y-1 min-w-fit">
      <div className="relative overflow-hidden">
        <div className="aspect-[2/1] bg-gradient-to-br from-gray-100 to-gray-200">
          <Image
          width={400}
          height={200}
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-200">
          {name}
        </h3>

        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {description}
        </p>

        <div className="flex gap-3">
          <button
            onClick={onEdit}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Edit className="w-4 h-4" />
            <span className="hidden sm:block">Edit</span>
          </button>

          <button
            className="flex-1 border-2 border-gray-200 hover:border-red-300 text-gray-700 hover:text-red-600 font-medium py-2.5 px-4 rounded-xl transition-all duration-200 hover:bg-red-50 flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => mutationDeleteCategory.mutate(id)}
          >
            <Trash2 className="w-4 h-4" />
            <span className="hidden sm:block">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}
