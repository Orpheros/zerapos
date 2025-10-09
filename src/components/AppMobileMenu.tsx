import {
  LayoutDashboard,
  Settings,
  ClipboardList,
  NotepadText,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Orders", icon: ClipboardList, path: "/orders" },
  { label: "Report", icon: NotepadText, path: "/report" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

const AppMobileMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 h-16 flex justify-around items-center shadow-md lg:hidden">
      {menuItems.map(({ label, icon: Icon, path }) => {
        const isActive = location.pathname === path;
        return (
          <button
            key={label}
            onClick={() => navigate(path)}
            className={`flex flex-col items-center justify-center transition-colors ${
              isActive
                ? "text-orange-600"
                : "text-gray-600 hover:text-orange-600"
            }`}
          >
            <Icon className="w-5 h-5 mb-1" />
            <span className="text-xs">{label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default AppMobileMenu;
