import { useCategories, useProducts } from "@/Service/Api/api";
import { Product } from "@/types/type";
import { useState } from "react";
import useModalProduct from "./ModalProduct";

type ViewMode = "grid" | "list";
type SortField = "Name" | "Price" | "Stock";
type SortOrder = "asc" | "desc";
type ProductStatus = "all" | "active" | "low-stock" | "out-of-stock";

export default function usePageContainer() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<ProductStatus>("all");
  const [sortBy, setSortBy] = useState<SortField>("Name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [isProductModalOpen, setIsProductModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { data: productsData } = useProducts();

  const handleSelectProduct = (productId: number): void => {
    setSelectedProducts((prev: number[]) => {
      if (prev.includes(productId)) {
        return prev.filter((id: number) => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const { data: categories } = useCategories();


  const { mutationDeleteProduct } = useModalProduct();

  const statuses: ProductStatus[] = [
    "all",
    "active",
    "low-stock",
    "out-of-stock",
  ];

  

  const filteredProducts: Product[] = productsData
    ? productsData
        .filter((product: Product) => {
          const matchesSearch = product.Name.toLowerCase().includes(
            searchTerm.toLowerCase()
          );
          
          const matchesCategory =
            selectedCategory === "all" ||
            product.CategoryID == parseInt(selectedCategory);
          const matchesStatus =
            selectedStatus === "all" || product.status === selectedStatus;
          return matchesSearch && matchesCategory && matchesStatus;
        })
        .sort((a: Product, b: Product) => {
          let aValue: string | number = a[sortBy];
          let bValue: string | number = b[sortBy];

          if (sortBy === "Price") {
            aValue = parseFloat(aValue.toString());
            bValue = parseFloat(bValue.toString());
          }

          if (sortOrder === "asc") {
            return aValue > bValue ? 1 : -1;
          } else {
            return aValue < bValue ? 1 : -1;
          }
        })
    : [];

  const handleSelectAll = (): void => {
    if (selectedProducts.length === filteredProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(filteredProducts.map((p: Product) => p.ID!));
    }
  };

  const deleteAllSelected = (): void => {
    if (selectedProducts.length > 0) {
      selectedProducts.forEach((id: number) => {
        if (productsData) {
          const productToDelete = productsData.find(
            (p: Product) => p.ID === id
          );
          if (productToDelete) {
            mutationDeleteProduct.mutate(id);
          }
        }
      });
      setSelectedProducts([]);
    }
  };

  const handleModalOpen = (status: boolean, product: Product): void => {
    setSelectedProduct(product);
    setIsProductModalOpen(status);
  };

  return {
    viewMode,
    setViewMode,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedStatus,
    setSelectedStatus,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    selectedProducts,
    setSelectedProducts,
    isProductModalOpen,
    setIsProductModalOpen,
    selectedProduct,
    setSelectedProduct,
    filteredProducts,
    categories: categories || [],
    statuses,
    handleSelectProduct,
    handleSelectAll,
    deleteAllSelected,
    handleModalOpen,
    productsData
  };
}
