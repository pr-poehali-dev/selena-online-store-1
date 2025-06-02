import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Delivery = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-black mb-8">Доставка</h1>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">
              Способы доставки
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-black pl-4">
                <h3 className="font-semibold">Курьерская доставка по Москве</h3>
                <p>Доставка в течение 1-2 рабочих дней</p>
                <p className="font-medium">Стоимость: 300 рублей</p>
              </div>

              <div className="border-l-4 border-gray-300 pl-4">
                <h3 className="font-semibold">Доставка по России</h3>
                <p>Почта России - 5-10 рабочих дней</p>
                <p className="font-medium">Стоимость: от 400 рублей</p>
              </div>

              <div className="border-l-4 border-gray-300 pl-4">
                <h3 className="font-semibold">Экспресс доставка</h3>
                <p>Доставка в день заказа (при заказе до 12:00)</p>
                <p className="font-medium">Стоимость: 800 рублей</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">
              Условия доставки
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Бесплатная доставка при заказе от 5000 рублей</li>
              <li>Возможность примерки при получении</li>
              <li>Оплата при получении или онлайн</li>
              <li>Уведомление о доставке за час до прибытия курьера</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">
              Время работы
            </h2>
            <p>Доставка осуществляется ежедневно с 9:00 до 22:00</p>
            <p>Прием заказов круглосуточно на сайте</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Delivery;
