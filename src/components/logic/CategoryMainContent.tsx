import { useCategories } from '@/Service/Api/api';
import { Category } from '@/types/type';
import  { useState } from 'react'

type ViewMode = "grid" | "list";
type SortField = "Name" | "Price" | "Stock";
type SortOrder = "asc" | "desc";


export default function useCategoryMainContent() {
    const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortField>("Name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [selectedCategory, setSelectedCategory] = useState<Category|null>(null);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  const {data: categories} = useCategories();

  const filteredCategories = categories ? categories.filter((category) =>
    category.Name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  if (sortOrder === "asc") {
    filteredCategories.sort((a, b) =>
      a.Name.localeCompare(b.Name, undefined, { sensitivity: "base" })
    );
  } else {
    filteredCategories.sort((a, b) =>
      b.Name.localeCompare(a.Name, undefined, { sensitivity: "base" })
    );
  }

  const handleEdit = (category: Category) => {
    setSelectedCategory(category);
    setIsCategoryModalOpen(true);
  };

  return {
    handleEdit,
    viewMode,
    setViewMode,
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    selectedCategory,
    setSelectedCategory,
    isCategoryModalOpen,
    setIsCategoryModalOpen,
    categories,filteredCategories
  }
}
