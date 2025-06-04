"use client";
import { Product } from "@/types/type";
import { Edit, Eye, Package, Trash2 } from "lucide-react";
import useProductCard from "@/components/logic/ProductCard";
import SellModal from "@/components/modals/Sell";

export default function ProductCard({
  product,
  selectedProducts,
  handleSelectProduct,
  setIsProductModalOpen,
}: {
  product: Product;
  selectedProducts: number[];
  handleSelectProduct: (id: number) => void;
  setIsProductModalOpen: (status: boolean) => void;
}) {
  const {
    handleDelete,
    getStatusColor,
    getStatusIcon,
    categories,
    openSellModal,
    setOpenSellModal,
  } = useProductCard(product);

  return (
    <div className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-200 overflow-hidden group h-fit">
      <div className="relative">
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
          <Package className="w-16 h-16 text-gray-400" />
        </div>
        <div className="absolute top-3 right-3">
          <input
            type="checkbox"
            checked={selectedProducts.includes(product.ID!)}
            onChange={() => handleSelectProduct(product.ID!)}
            className="w-4 h-4 text-blue-600 border-2 border-white rounded focus:ring-blue-500"
          />
        </div>
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
              product.status!
            )}`}
          >
            {getStatusIcon(product.status!)}
            <span className="ml-1">
              {product.status ? product.status!.replace("-", " ") : "-"}
            </span>
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
            {product.Name}
          </h3>
          <p className="text-xs text-gray-500">SKU: {product.Name}</p>
        </div>

        <div className="flex items-center justify-between mb-3">
          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
            {categories?.find((category) => category.ID === product.CategoryID)
              ?.Name || "Uncategorized"}
          </span>
          <span className="font-bold text-gray-900">{product.Price} Fcfa</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className={`text-sm text-gray-600 ${product.Stock > 10 ? "bg-green-700" : "bg-red-700"} rounded py-0.5 px-1 text-white font-bold `}>Stock: {product.Stock}</span>
          <span className="text-xs text-gray-400">
            {new Date(product.UpdatedAt!).toLocaleDateString()}
          </span>
        </div>

        <SellModal
          isOpen={openSellModal}
          product={product}
          onClose={() => setOpenSellModal(false)}
        />

        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            disabled={product.Stock === 0}
            onClick={() => setOpenSellModal(true)}
            className={`${product.Stock === 0 ? "cursor-not-allowed bg-gray-300 hover:bg-gray-300 text-white" : "cursor-pointer bg-blue-50 hover:bg-blue-100 text-blue-600"}  flex-1 px-3 py-2 text-xs    rounded-lg transition-colors duration-200`}
          >
            <Eye className="w-3 h-3 inline mr-1" />
            Sell
          </button>
          <button
            className="cursor-pointer flex-1 px-3 py-2 text-xs bg-green-50 text-green-600 hover:bg-green-100 rounded-lg transition-colors duration-200"
            onClick={() => setIsProductModalOpen(true)}
          >
            <Edit className="w-3 h-3 inline mr-1" />
            Edit
          </button>
          <button
            className="cursor-pointer px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
            onClick={handleDelete}
          >
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
