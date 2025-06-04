import useModalProduct from './ModalProduct';
import { useCategories } from '@/Service/Api/api';
import { Product } from '@/types/type';
import { useState } from 'react';

export default function useProductCard(product:Product) {
    const { data: categories } = useCategories();
    const [openSellModal, setOpenSellModal] = useState(false);
    
  const handleSell = (quantity:number) => {
    const productSale = {
      product_id: product.ID!,
      price: product.Price,
      quantity: quantity, // Assuming a quantity of 1 for simplicity
    };
    mutationSellProduct.mutate({products: [productSale]});
  }
  
  const { mutationDeleteProduct,mutationSellProduct, getStatusColor, getStatusIcon } =
  useModalProduct();

  const handleDelete = () => {
    if (product.ID) {
      mutationDeleteProduct.mutate(product.ID);
    }
  };
  return {
    handleSell,
    handleDelete,
    getStatusColor,
    getStatusIcon,
    openSellModal,
    setOpenSellModal,
    categories
  }
}
