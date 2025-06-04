"use client";
import { useQuery } from "@tanstack/react-query";
import { Category, Product, ProductSales, Sales } from "@/types/type";

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("http://localhost:2002/products", {
    credentials: "include",
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  const json = await res.json();
  return json.data;
};

const fetchCategories = async (): Promise<Category[]> => {
  const res = await fetch("http://localhost:2002/categories", {
    credentials: "include",
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  const json = await res.json();
  return json.data;
};

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
