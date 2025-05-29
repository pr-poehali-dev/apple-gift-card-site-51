import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  amount: number;
  isPopular?: boolean;
}

const ProductCard = ({ amount, isPopular = false }: ProductCardProps) => {
  return (
    <Card
      className={`relative p-8 text-center bg-white border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
        isPopular ? "border-blue-200 ring-2 ring-blue-100" : "border-gray-200"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Популярный
          </span>
        </div>
      )}

      <div className="mb-6">
        <div className="text-6xl mb-4">🎁</div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          Apple Gift Card
        </h3>
        <p className="text-gray-600">Подарочная карта Apple</p>
      </div>

      <div className="mb-8">
        <div className="text-4xl font-bold text-gray-900 mb-2">
          {amount.toLocaleString()} ₽
        </div>
        <p className="text-gray-500 text-sm">Доставка моментально</p>
      </div>

      <Button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-xl transition-colors"
        size="lg"
      >
        Купить сейчас
      </Button>
    </Card>
  );
};

export default ProductCard;
