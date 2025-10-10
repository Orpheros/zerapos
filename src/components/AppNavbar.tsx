import { Utensils } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Orders", path: "/orders" },
  { label: "Settings", path: "/settings" },
];

export function AppNavbar() {
  const [storeName] = useState<string>("Sambal Gledek Bang Jo!");
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b border-gray-200 h-16 flex justify-between items-center px-6 sticky top-0 z-40 shadow-sm hidden lg:flex">
      <section className="flex justify-center items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
          <Utensils className="w-6 h-6 text-white" />
        </div>
        <span className="ml-3 text-xl font-bold text-gray-800">
          {storeName}
        </span>
      </section>
      <section className="hidden md:flex items-center gap-6">
        {menuItems.map(({ label, path }) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={label}
              onClick={() => navigate(path)}
              className={`text-gray-600 hover:text-orange-600 font-medium transition-colors ${
                isActive
                  ? "text-orange-600"
                  : "text-gray-600 hover:text-orange-600"
              }`}
            >
              {label}
            </button>
          );
        })}
      </section>
    </nav>
  );
}
