import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/global.css";
import Layout from "./layouts/layout.tsx";
import OrderPage from "./pages/Order.tsx";
import SettingPage from "./pages/Setting.tsx";
import DashboardPage from "./pages/Dashboard.tsx";
import ReportPage from "./pages/Report.tsx";
import { Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/orders" replace /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "orders", element: <OrderPage /> },
      { path: "report", element: <ReportPage /> },
      { path: "settings", element: <SettingPage /> },
    ],
  },
  {
    path: "*",
    element: <Layout />,
    children: [{ index: true, element: <OrderPage /> }],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </StrictMode>
);
