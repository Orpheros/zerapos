import AppMobileMenu from "@/components/AppMobileMenu";
import { AppNavbar } from "@/components/AppNavbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen">
      <AppNavbar />
      <Outlet />
      <AppMobileMenu />
    </div>
  );
};

export default Layout;
