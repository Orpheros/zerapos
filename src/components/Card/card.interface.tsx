export interface SelectedItemsData {
  id: number;
  name: string;
  photo: string;
  price: number;
  quantity: number;
}

export interface SelectedItemProps extends SelectedItemsData {
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
  note?: string;
  onUpdateNote?: (id: number, note: string) => void;
  isExpanded?: boolean;
  onToggleExpanded?: (id: number) => void;
}

export interface CardComponentProps {
  id: string | number;
  name: string;
  photo: string;
  price: number;
  category: string;
  onAdd: (item: {
    id: string | number;
    name: string;
    photo: string;
    price: number;
    category: string;
  }) => void;
}
