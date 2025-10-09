import { Coffee, Package, Utensils } from "lucide-react";
import type { CardComponentProps } from "./card.interface";

export function CardComponent({
  id,
  name,
  photo,
  price,
  category,
  onAdd,
}: CardComponentProps) {
  const getCategoryIcon = (category: any) => {
    switch (category) {
      case "Drink":
        return <Coffee className="w-4 h-4" />;
      case "Packet":
        return <Package className="w-4 h-4" />;
      default:
        return <Utensils className="w-4 h-4" />;
    }
  };

  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-orange-200 transition-all duration-300 group cursor-pointer"
      onClick={() => onAdd({ id, name, photo, price, category })}
    >
      <div className="relative overflow-hidden">
        <img
          className="w-full h-32 sm:h-36 md:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
          src={photo}
          alt={name}
        />
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          {getCategoryIcon(category)}
          <span className="text-[10px] sm:text-xs font-medium text-gray-700">
            {category}
          </span>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-lg mb-2 line-clamp-1">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm md:text-base font-bold text-orange-600">
            Rp {price.toLocaleString("id-ID")}
          </span>
        </div>
      </div>
    </div>
  );
}
