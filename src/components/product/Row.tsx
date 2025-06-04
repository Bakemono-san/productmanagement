"use client";
import { Product } from "@/types/type";
import {
  AlertTriangle,
  CheckCircle,
  Edit,
  Eye,
  Package,
  Trash2,
  XCircle,
} from "lucide-react";
import { JSX } from "react";

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




const ProductRow: React.FC<{
  product: Product;
  selectedProducts: number[];
  handleSelectProduct: (id: number) => void;
}> = ({ product, selectedProducts, handleSelectProduct }) => (
  <tr className="hover:bg-gray-50 transition-colors duration-200">
    <td className="px-6 py-4">
      <input
        type="checkbox"
        checked={selectedProducts.includes(product.ID!)}
        onChange={() => handleSelectProduct(product.ID!)}
        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
    </td>
    <td className="px-6 py-4">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <Package className="w-6 h-6 text-gray-400" />
        </div>
        <div>
          <div className="font-medium text-gray-900">{product.Name}</div>
          <div className="text-sm text-gray-500">SKU: {product.Name}</div>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 text-gray-600">{product.Category.Name}</td>
    <td className="px-6 py-4 font-medium text-gray-900">{product.Price} Fcfa</td>
    <td className="px-6 py-4 text-gray-600">{product.Stock}</td>
    <td className="px-6 py-4">
      <span
        className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
          product.status!
        )}`}
      >
        {getStatusIcon(product.status!)}
        <span className="ml-1">{product.status ? product.status!.replace("-", " "): ""}</span>
      </span>
    </td>
    <td className="px-6 py-4 text-gray-400 text-sm">{new Date(product.UpdatedAt!).toLocaleDateString()}</td>
    <td className="px-6 py-4">
      <div className="flex items-center space-x-2">
        <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors duration-200">
          <Eye className="w-4 h-4" />
        </button>
        <button className="p-1 text-gray-400 hover:text-green-600 transition-colors duration-200">
          <Edit className="w-4 h-4" />
        </button>
        <button className="p-1 text-gray-400 hover:text-red-600 transition-colors duration-200">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </td>
  </tr>
);

export default ProductRow;
