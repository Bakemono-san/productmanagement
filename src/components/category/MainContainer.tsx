"use client";
import Card from "@/components/category/Card";
import {
  Grid3X3,
  Search,
  SortAsc,
  SortDesc,
} from "lucide-react";
import CategoryModal from "@/components/modals/Category";
import useCategoryMainContent from "@/components/logic/CategoryMainContent";

export default function CategoriesClient() {
  const {
    handleEdit,
    viewMode,
    setViewMode,
    searchTerm,
    setSearchTerm,
    sortOrder,
    setSortOrder,
    selectedCategory,
    isCategoryModalOpen,
    setIsCategoryModalOpen,
    filteredCategories,
  } = useCategoryMainContent();

  return (
    <>
      <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        category={selectedCategory}
      />

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 h-[660px] overflow-y-scroll">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Categories..."
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchTerm(e.target.value)
                }
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
              />
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() =>
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                }
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                {sortOrder === "asc" ? (
                  <SortAsc className="w-4 h-4" />
                ) : (
                  <SortDesc className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${
                    viewMode === "grid"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-400 hover:text-gray-600"
                  } transition-colors duration-200`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-6 grid ${
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6"
              : "grid-cols-1 gap-4"
          }`}
        >
          {filteredCategories.length > 0 &&
            filteredCategories.map((category) => (
              <Card
                key={category.ID}
                name={category.Name}
                description={category.Description}
                id={category.ID!}
                image={
                  category.Image ??
                  "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg"
                }
                onEdit={() => handleEdit(category)}
              />
            ))}
        </div>
      </div>
    </>
  );
}
