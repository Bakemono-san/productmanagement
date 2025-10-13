"use client";
import { useQuery } from "@tanstack/react-query";
import { Category, Product, ProductSales, Sales } from "@/types/type";
/**
 * Fetches all products from the API.
 * 
 * @returns {Promise<Product[]>} A promise that resolves to an array of products
 * @throws {Error} When the API request fails or returns a non-OK status
 * 
 * @example
 * const products = await fetchProducts();
 */
const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("http://localhost:2002/products", {
    credentials: "include",
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  const json = await res.json();
  return json.data;
};
/**
 * Fetches all categories from the API.
 * 
 * @returns {Promise<Category[]>} A promise that resolves to an array of categories
 * @throws {Error} When the API request fails or returns a non-OK status
 * 
 * @example
 * const categories = await fetchCategories();
 */
const fetchCategories = async (): Promise<Category[]> => {
  const res = await fetch("http://localhost:2002/categories", {
    credentials: "include",
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  const json = await res.json();
  return json.data;
};
/**
 * Creates a new product in the database.
 * 
 * @param {Product} product - The product object to create
 * @returns {Promise<Product>} A promise that resolves to the created product
 * @throws {Error} When the API request fails or returns a non-OK status
 * 
 * @example
 * const newProduct = await CreateProduct({
 *   name: "Product Name",
 *   price: 99.99,
 *   categoryId: 1
 * });
 */
export const CreateProduct = async (product: Product) => {
  const res = await fetch("http://localhost:2002/create-product", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("Failed to fetch products");

  const json = await res.json();
  return json.data;
};
/**
 * Creates a new category in the database.
 * 
 * @param {Category} category - The category object to create
 * @returns {Promise<Category>} A promise that resolves to the created category
 * @throws {Error} When the API request fails or returns a non-OK status
 * 
 * @example
 * const newCategory = await CreateCategory({
 *   name: "Electronics",
 *   description: "Electronic devices and accessories"
 * });
 */
export const CreateCategory = async (category: Category) => {
  const res = await fetch("http://localhost:2002/create-category", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
  if (!res.ok) throw new Error("Failed to fetch products");

  const json = await res.json();
  return json.data;
};
/**
 * Updates an existing category in the database.
 * 
 * @param {number} id - The ID of the category to update
 * @param {Partial<Category>} category - The partial category object containing fields to update
 * @returns {Promise<Category>} A promise that resolves to the updated category
 * @throws {Error} When the API request fails or returns a non-OK status
 * 
 * @example
 * const updatedCategory = await EditCategory(1, {
 *   name: "Updated Category Name"
 * });
 */

export const EditCategory = async (id: number, category: Partial<Category>) => {
  const res = await fetch(`http://localhost:2002/update-category?id=${id}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
  if (!res.ok) throw new Error("Failed to fetch products");

  const json = await res.json();
  return json.data;
};
/**
 * Deletes a category from the database.
 * 
 * @param {number} id - The ID of the category to delete
 * @returns {Promise<any>} A promise that resolves to the deletion response data
 * @throws {Error} When the API request fails or deletion is unsuccessful
 * 
 * @example
 * await DeleteCategory(1);
 */
export const DeleteCategory = async (id: number) => {
  const res = await fetch(`http://localhost:2002/delete-category?id=${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error("Deletion failed");
  }
  const json = await res.json();
  console.log("Deletion successful:", json);
  return json.data;
};

export const EditProduct = async (id: number, product: Partial<Product>) => {
  const res = await fetch(`http://localhost:2002/update-product?id=${id}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("Failed to fetch products");

  const json = await res.json();
  return json.data;
};

export const DeleteProduct = async (id: number) => {
  const res = await fetch(`http://localhost:2002/delete-product?id=${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error("Deletion failed");
  }
  const json = await res.json();
  console.log("Deletion successful:", json);
  return json;
};

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
}

const getSales = async (): Promise<Sales[]> => {
  const res = await fetch("http://localhost:2002/sales", {
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to fetch sales");
  const json = await res.json();
  return json.data;
};

export function useSales() {
  return useQuery<Sales[]>({
    queryKey: ["sales"],
    queryFn: getSales,
  });
}

export const CreateSale = async (sale: { products: ProductSales[] }) => {
  const res = await fetch("http://localhost:2002/create-sale", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sale),
  });
  if (!res.ok) throw new Error("Failed to fetch products");

  const json = await res.json();
  return json.data;
};

export function useCategories() {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
}

export async function Logout() {
  return fetch("http://localhost:2002/logout", {
    method: "POST",
    credentials: "include",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Logout failed");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Logout successful:", data);
    })
    .catch((error) => {
      console.error("Logout error:", error);
    });
}
