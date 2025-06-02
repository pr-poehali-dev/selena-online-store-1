import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Классическое чёрное платье",
      price: 8900,
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quantity: 1,
      size: "M",
    },
    {
      id: 2,
      name: "Белая рубашка оверсайз",
      price: 5400,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quantity: 1,
      size: "L",
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Корзина</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-6 border-b last:border-b-0 flex items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600 text-sm">Размер: {item.size}</p>
                    <p className="font-semibold mt-1">
                      {item.price.toLocaleString()} ₽
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-1">
                      <Icon name="Minus" size={16} />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button className="p-1">
                      <Icon name="Plus" size={16} />
                    </button>
                  </div>
                  <button className="ml-4 text-gray-400 hover:text-red-500">
                    <Icon name="Trash2" size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Итого</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Товары:</span>
                  <span>{total.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Доставка:</span>
                  <span>Бесплатно</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-semibold">
                  <span>К оплате:</span>
                  <span>{total.toLocaleString()} ₽</span>
                </div>
              </div>
              <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors">
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
