import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">SELENA</h3>
            <p className="text-gray-400 mb-4">
              Элегантная одежда для современных женщин. Качество и стиль в
              каждой детали.
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Instagram"
                size={20}
                className="cursor-pointer hover:text-gray-300"
              />
              <Icon
                name="Twitter"
                size={20}
                className="cursor-pointer hover:text-gray-300"
              />
              <Icon
                name="Facebook"
                size={20}
                className="cursor-pointer hover:text-gray-300"
              />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">МАГАЗИН</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Новинки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Платья
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Верх
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Низ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">ПОМОЩЬ</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Возврат
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Размеры
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">КОНТАКТЫ</h4>
            <div className="space-y-2 text-gray-400">
              <p>+7 (495) 123-45-67</p>
              <p>info@selena-store.ru</p>
              <p>Москва, ул. Тверская, 15</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SELENA. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
