import CategoriesClient from "@/components/category/MainContainer";
import CategoryHeader from "@/components/category/Header";
import CustomLayout from "@/components/CustomLayout";

export default async function CategoriesPage() {
  return (
    <CustomLayout>
      <div className="bg-gray-50  md:px-12 px-4 py-1 md:py-4">
        <CategoryHeader />
        <CategoriesClient />
      </div>
    </CustomLayout>
  );
}
