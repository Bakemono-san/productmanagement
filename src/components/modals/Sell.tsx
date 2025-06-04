"use client";
import React from "react";
import useProductCard from "../logic/ProductCard";
import { Product } from "@/types/type";

export default function SellModal({
  isOpen,
  product,
  onClose,
}: {
  isOpen: boolean;
  product: Product;
  onClose: () => void;
}) {
  const { handleSell } = useProductCard(product);
  const [quantity, setQuantity] = React.useState(1);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if(Number(value) > product.Stock) {
      alert(`Cannot sell more than available stock (${product.Stock})`);
    }else{
        setQuantity(Number(value));
    }
  };

  const SellProduct = (quantity: number) => {
    handleSell(quantity);
    onClose();
  };
  

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50   flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-xl font-semibold mb-4">Sell {product.Name}</h2>
        <input
          type="number"
          max={product.Stock || 0}
          min={1}
          defaultValue={quantity}
          onChange={handleInputChange}
          placeholder="Enter quantity"
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <button onClick={() => SellProduct(quantity)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
          Sell
        </button>
      </div>
    </div>
  );
}
