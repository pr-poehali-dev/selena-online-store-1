import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-black tracking-wider">
            SELENA
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Главная
            </Link>
            <Link
              to="/catalog"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Каталог
            </Link>
            <Link
              to="/gallery"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Фото
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-black transition-colors"
            >
              О нас
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              to="/account"
              className="text-gray-700 hover:text-black transition-colors"
            >
              <Icon name="User" size={20} />
            </Link>
            <Link
              to="/cart"
              className="text-gray-700 hover:text-black transition-colors relative"
            >
              <Icon name="ShoppingBag" size={20} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
