import { useState } from "react";
import { Pencil } from "lucide-react";
import { CardComponent } from "@/components/Card/Card";
import { SelectedCard } from "@/components/Card/SelectedCard";
import type { SelectedItemsData } from "@/components/Card/card.interface";
import { Button, Dropdown, Input, Space, type GetProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import SelectedItemsList from "@/components/CartItems";

const { Search } = Input;

const items = [
  {
    id: 1,
    name: "Spicy Burger Deluxe",
    photo:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    category: "Packet",
    price: 25000,
  },
  {
    id: 2,
    name: "Traditional Curry",
    photo:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop",
    category: "Packet",
    price: 32000,
  },
  {
    id: 3,
    name: "Margherita Pizza",
    photo: "/menu/pizza.jpg",
    category: "Main",
    price: 45000,
  },
  {
    id: 4,
    name: "Fresh Garden Salad",
    photo:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    category: "Healthy",
    price: 18000,
  },
  {
    id: 5,
    name: "Chicken Dumplings",
    photo:
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop",
    category: "Appetizer",
    price: 22000,
  },
  {
    id: 6,
    name: "Iced Coffee",
    photo:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
    category: "Drink",
    price: 15000,
  },
];

const OrderPage = () => {
  // const { data: menuData, isLoading, error } = useMenu();
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [showCartMobile, setShowCartMobile] = useState<boolean>(false);
  const [customerName, setCustomerName] = useState<string>("Customer 1");
  const [selectedItems, setSelectedItems] = useState<SelectedItemsData[]>([
    // {
    //   id: 1,
    //   name: "Spicy Burger Deluxe",
    //   photo:
    //     "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    //   price: 25000,
    //   quantity: 2,
    // },
    // {
    //   id: 2,
    //   name: "Traditional Curry",
    //   photo:
    //     "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop",
    //   price: 32000,
    //   quantity: 1,
    // },
  ]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchValue, setSearchValue] = useState<string>("");
  type SearchProps = GetProps<typeof Input.Search>;
  // console.log("data", menuData);
  // console.log("data", isLoading);
  // console.log("data", error);

  const categories = ["All", "Packet", "Main", "Healthy", "Appetizer", "Drink"];
  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  const displayedItems =
    searchValue.trim().length > 0
      ? filteredItems.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : filteredItems;

  const totalPrice = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = selectedItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const addToCart = (item: any) => {
    setSelectedItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, newQuantity: any) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setSelectedItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const updateNote = (id: number, note: string) => {
    setSelectedItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, note: note } : item))
    );
  };

  const removeItem = (id: any) => {
    setSelectedItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSaveCustomer = () => {
    setShowEdit(false);
  };

  const handleViewCartMobile = () => {
    setShowCartMobile(true);
  };

  const onSearch: SearchProps["onSearch"] = (value, _e) => {
    console.log(value);
    setSearchValue(value);
  };

  const handleCheckout = () => {
    console.log("selectedItems", selectedItems);
  };

  // const menuProps = {
  //   items,
  //   onClick: handleMenuClick,
  // };

  return (
    <div className="max-h-screen bg-gray-50">
      {/* <div className="flex h-screen"> */}
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar - Cart */}
        <div className="w-100 bg-white border-r border-gray-200 hidden lg:flex flex-col">
          {/* Cart Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                {customerName}
              </h2>
              <button
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setShowEdit(true)}
              >
                <Pencil className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="bg-orange-50 rounded-lg p-4">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                <span>{totalItems} items</span>
                <span>Total</span>
              </div>
              <div className="text-2xl font-bold text-orange-600">
                Rp {totalPrice.toLocaleString("id-ID")}
              </div>
            </div>
          </div>

          {/* Cart Items */}
          <SelectedItemsList
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            updateNote={updateNote}
            SelectedCard={SelectedCard}
            data={selectedItems}
          ></SelectedItemsList>

          {/* Place Order Button */}
          {selectedItems.length > 0 && (
            <div
              className="p-6 border-t border-gray-100"
              onClick={handleCheckout}
            >
              <button className="w-full button-gradient hover:from-orange-600 hover:to-red-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-lg">
                Place Order
              </button>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Category Filter */}
          <div className="bg-white border-b border-gray-200 p-4 px-6">
            {/* Mobile Dropdown (hidden on sm and above) */}
            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <Dropdown
                  menu={{
                    items: categories.map((category) => ({
                      key: category,
                      label: (
                        <span
                          className={`${
                            activeCategory === category
                              ? "text-orange-500"
                              : "hover:bg-gray-100 text-gray-800"
                          }`}
                        >
                          {category}
                        </span>
                      ),
                    })),
                    onClick: ({ key }) => setActiveCategory(key as string),
                  }}
                  trigger={["click"]}
                >
                  <Button className="flex items-center px-4 py-2 rounded-xl border border-gray-300 text-gray-800 bg-white">
                    <Space>
                      {activeCategory}
                      <DownOutlined />
                    </Space>
                  </Button>
                </Dropdown>
              </div>
              <div className="block md:hidden">
                <Search
                  placeholder="Search..."
                  allowClear
                  onSearch={onSearch}
                  className="w-full"
                />
              </div>
            </div>

            {/* Horizontal Buttons (hidden on mobile) */}
            <div className="hidden md:flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Grid */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex pb-4 justify-end hidden lg:flex">
              <Search
                placeholder="Search..."
                allowClear
                onSearch={onSearch}
                style={{ width: "30%" }}
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:pb-0">
              {displayedItems.map((item) => (
                <CardComponent key={item.id} {...item} onAdd={addToCart} />
              ))}
            </div>
            {selectedItems.length > 0 && <div className="pb-20"></div>}
          </div>
        </div>
      </div>

      {/* Mobile Cart Button */}
      {selectedItems.length > 0 && (
        <button
          onClick={handleViewCartMobile}
          className="lg:hidden fixed bottom-20 left-4 right-4 button-gradient text-white py-4 px-6 rounded-2xl font-semibold shadow-xl flex items-center justify-between transition-all duration-200 active:scale-95"
        >
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-sm font-bold">{totalItems}</span>
            </div>
            <span>View Cart</span>
          </div>
          <span className="text-lg font-bold">
            Rp {totalPrice.toLocaleString("id-ID")}
          </span>
        </button>
      )}

      {/* Edit Customer Modal */}
      {showEdit && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-6 text-gray-800">
              Edit Customer
            </h3>
            <input
              type="text"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 mb-6 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              placeholder="Customer Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <div className="flex gap-3">
              <button
                className="flex-1 px-4 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors"
                onClick={() => setShowEdit(false)}
              >
                Cancel
              </button>
              <button
                className="flex-1 px-4 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors"
                onClick={handleSaveCustomer}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {showCartMobile && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md z-50">
            <h3 className="text-xl font-bold mb-6 text-gray-800">Cart</h3>
            <SelectedItemsList
              updateQuantity={updateQuantity}
              removeItem={removeItem}
              updateNote={updateNote}
              SelectedCard={SelectedCard}
              data={selectedItems}
              mobilePadding={true}
            ></SelectedItemsList>
            <div className="flex gap-3">
              <button
                className="flex-1 px-4 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors"
                onClick={() => setShowCartMobile(false)}
              >
                Cancel
              </button>
              <button
                className="flex-1 px-4 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
