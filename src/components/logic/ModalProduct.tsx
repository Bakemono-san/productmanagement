"use client";

import { CreateSale, DeleteProduct } from "@/Service/Api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AlertTriangle, CheckCircle, Package, XCircle } from "lucide-react";
import { JSX } from "react";

export default function useModalProduct() {
  

  const queryClient = useQueryClient();

  const mutationDeleteProduct = useMutation({
    mutationFn: async (id: number) => DeleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });

    },
    onError: (error) => {
      console.error("Error deleting product:", error);
    },
  });

  const mutationSellProduct = useMutation({
    mutationFn: CreateSale,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["sales"] });

    },
    onError: (error) => {
      console.error("Error deleting product:", error);
    },
  });
  
  const getStatusColor = (status: string): string => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "low-stock":
        return "bg-yellow-100 text-yellow-800";
      case "out-of-stock":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string): JSX.Element => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-4 h-4" />;
      case "low-stock":
        return <AlertTriangle className="w-4 h-4" />;
      case "out-of-stock":
        return <XCircle className="w-4 h-4" />;
      default:
        return <Package className="w-4 h-4" />;
    }
  };
  return {
    getStatusColor,
    getStatusIcon,
    mutationDeleteProduct,
    mutationSellProduct
  };
}
