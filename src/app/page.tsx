import CustomLayout from "@/components/CustomLayout";
import StatsSection from "@/components/dashboard/StatsSection";
import RecentProductsSection from "@/components/dashboard/RecentProductsSection";
import ChartSection from "@/components/dashboard/ChartSection";

export default function Dashboard() {
  return (
    <CustomLayout>
      <div className="min-h-screen bg-gray-50 px-12 py-4">
        <div className=" border-b border-gray-200 px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">
                Welcome back! Here&apos;s what&apos;s happening with your products.
              </p>
            </div>
            =
          </div>
        </div>

        <div className="p-6">
          <StatsSection />
          <ChartSection />
          <RecentProductsSection />
        </div>
      </div>
    </CustomLayout>
  );
}
