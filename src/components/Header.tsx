import { Link } from "react-router-dom";

const Header = () => {
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
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
