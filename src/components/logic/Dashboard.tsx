"use client";
import { useCategories, useProducts, useSales } from "@/Service/Api/api";

export default function useDashboardData() {
    const { data: categories, isLoading, error } = useCategories();
      const {
        data: products,
        isLoading: isLoadingProducts,
        error: errorProducts,
      } = useProducts();
    
      const {
        data: sales,
        isLoading: isLoadingSales,
        error: errorSales,
      } = useSales();
    
      const categoriesDistribution = categories
        ? categories.map((category) => ({
            name: category.Name,
            value:
              products?.filter((product) => product.CategoryID === category.ID)
                .length || 0,
            color: `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`,
          }))
        : [];
    
      const recentProducts = products
        ? products
            .sort(
              (a, b) =>
                new Date(b.CreatedAt!).getTime() - new Date(a.CreatedAt!).getTime()
            )
            .slice(0, 5)
        : [];
    
      const revenueData: { month: string; revenue: number; products: number }[] =
        [];
    
      sales?.forEach((sale) => {
        const month = new Date(sale.CreatedAt!).toLocaleString("default", {
          month: "short",
        });
        const existingMonth = revenueData.find((data) => data.month === month);
        if (existingMonth) {
          existingMonth.revenue += sale.Total;
          existingMonth.products += sale.Products.length;
        } else {
          revenueData.push({
            month,
            revenue: sale.Total,
            products: sale.Products.length,
          });
        }
      });
    
      const lowStockProducts = products
        ? products.filter((product) => product.Stock < 10).length
        : 0;
  return {
    categories,
    isLoading,
    error,
    products,
    isLoadingProducts,
    errorProducts,
    sales,
    isLoadingSales,
    errorSales,
    categoriesDistribution,
    recentProducts,
    revenueData,
    lowStockProducts
  }
}
