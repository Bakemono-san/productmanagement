import { ShoppingBag, Grid3X3, AlertTriangle, PiggyBank } from "lucide-react";
import StatCard from "@/components/StatCard";

interface StatsGridProps {
  totalProducts: number;
  totalCategories: number;
  lowStockProducts: number;
  totalSales: number;
}

export const StatsGrid: React.FC<StatsGridProps> = ({
  totalProducts,
  totalCategories,
  lowStockProducts,
  totalSales,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        title="Total Products"
        value={totalProducts.toString()}
        icon={ShoppingBag}
      />
      <StatCard
        title="Categories"
        value={totalCategories.toString()}
        icon={Grid3X3}
        bg="red-50"
      />
      <StatCard
        title="Low stock Products"
        value={lowStockProducts.toString()}
        icon={AlertTriangle}
        bg="blue-50"
      />
      <StatCard
        title="Total sales"
        value={totalSales.toString()}
        icon={PiggyBank}
        bg="green-50"
      />
    </div>
  );
};