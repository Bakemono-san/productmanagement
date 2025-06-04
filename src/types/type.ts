export interface Category {
  ID?: number;
  CreatedAt?: string | null | Date;
  UpdatedAt?: string | null | Date;
  DeletedAt?: string | null | Date;
  Name: string;
  Description: string;
  ProductID?: number;
  Image?: string;
}

export interface Product {
  ID?: number;
  CreatedAt: string | null | Date;
  UpdatedAt: string | null | Date;
  DeletedAt: string | null | Date;
  Name: string;
  Description: string;
  status?: string;
  Price: number;
  Stock: number;
  UserID: number;
  Category: Category;
  CategoryID: number;
}

export interface ProductResponse {
  data: Product[];
  message: string;
  status: number;
}

export interface ProductSales{
  ID?: number;
  CreatedAt?: string | null | Date;
  UpdatedAt?: string | null | Date;
  DeletedAt?: string | null | Date;
  product_id: number;
  price: number;
  quantity: number;
}

export interface Sales{
  ID?: number;
  CreatedAt: string | null | Date;
  UpdatedAt: string | null | Date;
  DeletedAt: string | null | Date;
  Products: ProductSales[];
  Total: number;
}

export interface User {
  ID: number;
  Username: string;
  Password: string;
  Email: string;
  Role: string;
  CreatedAt?: string;
  UpdatedAt?: string;
  DeletedAt?: string | null;
}

export interface ProductImage {
  id: number;
  file?: File;
  url: string;
  name: string;
}

export interface ProductFormData {
  name: string;
  description: string;
  price: string;
  stock: string;
  categoryId: string;
  userId: string;
  images: ProductImage[];
}

export interface FormErrors {
  name?: string;
  description?: string;
  price?: string;
  stock?: string;
  categoryId?: string;
  userId?: string;
}

export interface ProductFormProps {
  product?: Product | null;
  isOpen?: boolean;
  onClose?: () => void;
  onSave?: (product: Product) => void;
}
