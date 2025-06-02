import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Классическое чёрное платье",
      price: 8900,
      originalPrice: 12900,
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      name: "Белая рубашка оверсайз",
      price: 5400,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      name: "Чёрные брюки палаццо",
      price: 6700,
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      name: "Белый блейзер",
      price: 11200,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 5,
      name: "Чёрная юбка миди",
      price: 4800,
      image:
        "https://images.unsplash.com/photo-1583496661160-fb5886a13d44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 6,
      name: "Белый топ с открытыми плечами",
      price: 3200,
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            НОВАЯ КОЛЛЕКЦИЯ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Откройте для себя нашу новую коллекцию элегантной одежды в
            классической чёрно-белой гамме
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-black text-black px-8 py-3 hover:bg-black hover:text-white transition-colors">
            СМОТРЕТЬ ВСЁ
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
