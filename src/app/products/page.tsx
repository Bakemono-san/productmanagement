import CustomLayout from "@/components/CustomLayout";
import ProductHeader from "@/components/product/Header";
import Pagecontainer from "@/components/product/Pagecontainer";

export default function ProductsPage() {
  return (
    <CustomLayout>
      <div className="bg-gray-50 md:px-12 px-4 py-1 md:py-4">
        <ProductHeader />
        <Pagecontainer />
      </div>
    </CustomLayout>
  );
}
