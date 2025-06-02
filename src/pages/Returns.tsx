import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Returns = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-black mb-8">Возврат и обмен</h1>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">
              Условия возврата
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3 list-disc list-inside">
                <li>Возврат в течение 14 дней с момента получения</li>
                <li>Товар должен быть в первоначальном виде с биркой</li>
                <li>Сохранность упаковки и чека обязательна</li>
                <li>Нижнее белье и купальники возврату не подлежат</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">
              Как оформить возврат
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">1. Онлайн заявка</h3>
                  <p>
                    Заполните форму на сайте или напишите на
                    info@selena-store.ru
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">2. Подтверждение</h3>
                  <p>Мы свяжемся с вами в течение 24 часов</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">3. Передача товара</h3>
                  <p>Курьер заберет товар бесплатно или принесите в магазин</p>
                </div>

                <div className="border border-gray-200 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">4. Возврат средств</h3>
                  <p>Деньги вернутся на карту в течение 3-5 рабочих дней</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mb-4">
              Контакты для возврата
            </h2>
            <div className="bg-black text-white p-6 rounded-lg">
              <p className="mb-2">
                <strong>Телефон:</strong> +7 (495) 123-45-67
              </p>
              <p className="mb-2">
                <strong>Email:</strong> returns@selena-store.ru
              </p>
              <p>
                <strong>Адрес:</strong> Москва, ул. Тверская, 15
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Returns;
