const Hero = () => {
  return (
    <section className="relative bg-black text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
          SELENA
        </h1>
        <p className="text-xl lg:text-2xl mb-8 font-light max-w-2xl mx-auto">
          Элегантная одежда для современных женщин
        </p>
        <button className="bg-white text-black px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors">
          СМОТРЕТЬ КОЛЛЕКЦИЮ
        </button>
      </div>
    </section>
  );
};

export default Hero;
