import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Account = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
              А
            </div>
            <div>
              <h1 className="text-2xl font-bold">Анна Петрова</h1>
              <p className="text-gray-600">anna.petrova@example.com</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Мои заказы</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Заказ #12345</p>
                      <p className="text-sm text-gray-600">15 мая 2024</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                      Доставлен
                    </span>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Заказ #12344</p>
                      <p className="text-sm text-gray-600">10 мая 2024</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      В пути
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Настройки</h2>
              <div className="space-y-4">
                <button className="w-full text-left p-4 border rounded-lg hover:bg-gray-50 flex items-center">
                  <Icon name="User" size={20} className="mr-3" />
                  Редактировать профиль
                </button>
                <button className="w-full text-left p-4 border rounded-lg hover:bg-gray-50 flex items-center">
                  <Icon name="MapPin" size={20} className="mr-3" />
                  Адреса доставки
                </button>
                <button className="w-full text-left p-4 border rounded-lg hover:bg-gray-50 flex items-center">
                  <Icon name="CreditCard" size={20} className="mr-3" />
                  Способы оплаты
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Account;
