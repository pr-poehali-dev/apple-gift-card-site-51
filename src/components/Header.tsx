import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import Icon from "@/components/ui/icon";
import CartModal from "@/components/CartModal";

const Header = () => {
  const { itemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-semibold text-gray-900">
            🍎 Gift
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Главная
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Товары
            </Link>
            <Link
              to="/instructions"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Инструкции
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Icon name="ShoppingCart" size={24} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;
