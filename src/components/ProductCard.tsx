interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  originalPrice?: number;
}

const ProductCard = ({
  name,
  price,
  image,
  originalPrice,
}: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square bg-gray-100 overflow-hidden mb-4 relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      </div>

      <div className="space-y-2">
        <h3 className="text-gray-900 font-medium">{name}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-black font-semibold">
            {price.toLocaleString()} ₽
          </span>
          {originalPrice && (
            <span className="text-gray-500 line-through text-sm">
              {originalPrice.toLocaleString()} ₽
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
