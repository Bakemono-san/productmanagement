"use client";
import { Product } from "@/types/type";
import {
  Grid3X3,
  List,
  Package,
  Search,
  SortAsc,
  SortDesc,
} from "lucide-react";
import ProductRow from "@/components/product/Row";
import ProductCard from "@/components/product/card";
import ProductForm from "@/components/modals/Product";
import usePageContainer from "@/components/logic/PageContainer";

type SortField = "Name" | "Price" | "Stock";

export default function Pagecontainer() {
  const {
    viewMode,
    setViewMode,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    selectedProducts,
    filteredProducts,
    categories,
    handleSelectProduct,
    handleSelectAll,
    deleteAllSelected,
    isProductModalOpen,
    handleModalOpen,
    selectedProduct,
    productsData,
    setIsProductModalOpen,
  } = usePageContainer();

  return (
    <div>
      <ProductForm
        isOpen={isProductModalOpen}
        product={selectedProduct}
        onClose={() => setIsProductModalOpen(false)}
        onSave={() => console.log("Saved")}
      />

      <div className="p-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchTerm(e.target.value)
                  }
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setSelectedCategory(e.target.value)
                }
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all" key="all">
                  All Categories
                </option>
                {categories &&
                  categories.map((category) => (
                    <option key={category.ID} value={category.ID}>
                      {category.Name === "all"
                        ? "All Categories"
                        : category.Name}
                    </option>
                  ))}
              </select>

              <div className="flex items-center space-x-2">
                <select
                  value={sortBy}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setSortBy(e.target.value as SortField)
                  }
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="stock">Stock</option>
                  <option value="category">Category</option>
                </select>
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

            <div className="flex items-center space-x-3">
              {selectedProducts.length > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">
                    {selectedProducts.length} selected
                  </span>
                  <button
                    onClick={deleteAllSelected}
                    className="px-3 py-1 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors duration-200 text-sm"
                  >
                    Delete Selected
                  </button>
                </div>
              )}

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
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${
                    viewMode === "list"
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-400 hover:text-gray-600"
                  } transition-colors duration-200`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 bg-white rounded-xl border border-gray-200 h-[600px] overflow-y-scroll p-6">
            {filteredProducts.map((product: Product) => (
              <ProductCard
                key={product.ID}
                product={product}
                selectedProducts={selectedProducts}
                handleSelectProduct={handleSelectProduct}
                setIsProductModalOpen={(status: boolean) =>
                  handleModalOpen(status, product)
                }
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3">
                    <input
                      type="checkbox"
                      checked={
                        selectedProducts.length === filteredProducts.length &&
                        filteredProducts.length > 0
                      }
                      onChange={handleSelectAll}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Updated
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProducts.map((product: Product) => (
                  <ProductRow
                    key={product.ID}
                    product={product}
                    selectedProducts={selectedProducts}
                    handleSelectProduct={handleSelectProduct}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or filter criteria.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Add Your First Product
            </button>
          </div>
        )}

        {filteredProducts.length > 0 && (
          <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
            <span>
              Showing {filteredProducts.length} of {productsData!.length}{" "}
              products
            </span>
            <div className="flex items-center space-x-4">
              <span>
                Active:{" "}
                {
                  productsData!.filter((p: Product) => p.status === "active")
                    .length
                }
              </span>
              <span>
                Low Stock:{" "}
                {
                  productsData!.filter((p: Product) => p.status === "low-stock")
                    .length
                }
              </span>
              <span>
                Out of Stock:{" "}
                {
                  productsData!.filter(
                    (p: Product) => p.status === "out-of-stock"
                  ).length
                }
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
