import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Apple Gift Cards
          </h1>
          <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Дарите возможность выбора. Подарочные карты Apple для App Store,
            iTunes, Apple Music и многого другого.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg font-medium rounded-xl"
            >
              <Link to="/products">Купить Gift Card</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-medium rounded-xl"
            >
              <Link to="/instructions">Как это работает</Link>
            </Button>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=400&fit=crop"
              alt="Apple Gift Cards"
              className="w-full h-80 object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Выберите номинал
            </h2>
            <p className="text-xl text-gray-600">
              Доступны карты разных номиналов для любого бюджета
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ProductCard amount={1000} />
            <ProductCard amount={2500} isPopular={true} />
            <ProductCard amount={5000} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
