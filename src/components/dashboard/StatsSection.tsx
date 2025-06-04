"use client";
import StatCard from "../StatCard";
import { AlertTriangle, Grid3X3, PiggyBank, ShoppingBag } from "lucide-react";
import useDashboardData from "../logic/Dashboard";

export default function StatsSection() {

    const {products,categories,lowStockProducts,sales} = useDashboardData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        title="Total Products"
        value={products?.length.toString() || "0"}
        icon={ShoppingBag}
      />
      <StatCard
        title="Categories"
        value={categories?.length.toString() || "0"}
        icon={Grid3X3}
        bg="red-50"
      />
      <StatCard
        title="Low stock Products"
        value={lowStockProducts?.toString() || "0"}
        icon={AlertTriangle}
        bg="blue-50"
      />
      <StatCard
        title="Total sales"
        value={
          sales
            ? sales.reduce((acc, sale) => acc + sale.Total, 0).toString()
            : "0"
        }
        icon={PiggyBank}
        bg="green-50"
      />
    </div>
  );
}
