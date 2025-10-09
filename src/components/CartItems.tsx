import { ShoppingCart } from "lucide-react";
import { useState } from "react";

type SelectedItem = {
  id: string | number;
  [key: string]: any;
};

type SelectedItemsListProps = {
  data?: SelectedItem[];
  updateQuantity: (id: number, quantity: any) => void;
  removeItem: (id: string | number) => void;
  updateNote: (id: number, note: string) => void;
  SelectedCard: React.ComponentType<any>;
  mobilePadding?: boolean;
};

const SelectedItemsList: React.FC<SelectedItemsListProps> = ({
  data = [],
  updateQuantity,
  removeItem,
  updateNote,
  SelectedCard,
  mobilePadding,
}) => {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const handleToggleExpanded = (cardId: string) => {
    setExpandedCardId(expandedCardId === cardId ? null : cardId);
  };
  return (
    <div
      className={`flex-1 overflow-y-auto p-6 space-y-3 ${
        mobilePadding ? "px-0 pt-0" : ""
      }`}
    >
      {data.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <ShoppingCart className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No items selected</p>
        </div>
      ) : (
        data.map((item: any) => (
          <SelectedCard
            key={item.id}
            {...item}
            onUpdateQuantity={updateQuantity}
            onRemove={removeItem}
            onUpdateNote={updateNote}
            isExpanded={expandedCardId === item.id}
            onToggleExpanded={handleToggleExpanded}
          />
        ))
      )}
    </div>
  );
};

export default SelectedItemsList;
