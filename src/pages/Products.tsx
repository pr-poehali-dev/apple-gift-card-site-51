import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Apple Gift Cards
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Идеальный подарок для любого случая. Используйте в App Store, iTunes
            Store, Apple Music и других сервисах Apple.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <ProductCard amount={1000} />
          <ProductCard amount={2500} isPopular={true} />
          <ProductCard amount={5000} />
        </div>
      </main>
    </div>
  );
};

export default Products;
