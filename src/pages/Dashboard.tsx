import { useState } from "react";
import {
  TrendingUp,
  ShoppingCart,
  Users,
  DollarSign,
  Clock,
  Star,
  MoreVertical,
  Download,
  Eye,
  Edit,
} from "lucide-react";
import { Button, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const DashboardPage = () => {
  // const [selectedPeriod, setSelectedPeriod] = useState("Today");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedPeriod, setSelectedPeriod] = useState("Today");

  // Mock data
  const stats = [
    {
      title: "Total Sales",
      value: "Rp 2,450,000",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-100",
      isPositive: true,
    },
    {
      title: "Orders",
      value: "156",
      change: "+8.2%",
      icon: ShoppingCart,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      isPositive: true,
    },
    {
      title: "Customers",
      value: "89",
      change: "+15.3%",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      isPositive: true,
    },
    {
      title: "Avg. Order",
      value: "Rp 15,700",
      change: "-2.1%",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      isPositive: false,
    },
  ];

  const recentOrders = [
    {
      id: "#ORD-001",
      customer: "Customer 1",
      items: 3,
      total: "Rp 85,000",
      status: "Completed",
      time: "2 mins ago",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "#ORD-002",
      customer: "Customer 2",
      items: 2,
      total: "Rp 57,000",
      status: "Preparing",
      time: "5 mins ago",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: "#ORD-003",
      customer: "Customer 3",
      items: 4,
      total: "Rp 120,000",
      status: "Completed",
      time: "8 mins ago",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "#ORD-004",
      customer: "Customer 4",
      items: 1,
      total: "Rp 25,000",
      status: "Pending",
      time: "12 mins ago",
      statusColor: "bg-gray-100 text-gray-800",
    },
  ];

  const topItems = [
    {
      name: "Spicy Burger Deluxe",
      category: "Packet",
      sold: 34,
      revenue: "Rp 850,000",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=60&h=60&fit=crop",
    },
    {
      name: "Traditional Curry",
      category: "Packet",
      sold: 28,
      revenue: "Rp 896,000",
      image:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=60&h=60&fit=crop",
    },
    {
      name: "Margherita Pizza",
      category: "Main",
      sold: 22,
      revenue: "Rp 990,000",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=60&h=60&fit=crop",
    },
    {
      name: "Fresh Garden Salad",
      category: "Healthy",
      sold: 19,
      revenue: "Rp 342,000",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=60&h=60&fit=crop",
    },
  ];

  const periods = [
    { label: "Today", value: "Today" },
    { label: "This Week", value: "This Week" },
    { label: "This Month", value: "This Month" },
    { label: "This Year", value: "This Year" },
  ];
  // const periods = ["Today", "This Week", "This Month", "This Year"];
  const filters = ["All", "Completed", "Preparing", "Pending"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 px-4">
        <div className="flex flex-row lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Period Selector */}
            <div className="relative">
              <Dropdown
                menu={{
                  items: periods.map((period) => ({
                    key: period.value,
                    label: period.label,
                  })),
                  onClick: ({ key }) => setSelectedPeriod(key as string),
                }}
                trigger={["click"]}
              >
                <Button className="flex items-center px-4 py-2 rounded-xl border border-gray-300 text-gray-800 bg-white">
                  <Space>
                    {selectedPeriod}
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 lg:p-6 space-y-6 pb-22">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-3 lg:p-6 shadow-sm border border-gray-100"
              >
                <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1 order-2 lg:order-1">
                    <p className="text-xs lg:text-sm text-gray-600 mb-1">
                      {stat.title}
                    </p>
                    <p className="text-lg lg:text-2xl font-bold text-gray-900 mb-1 lg:mb-2 leading-tight">
                      {stat.value}
                    </p>
                    <div
                      className={`flex items-center text-xs lg:text-sm ${
                        stat.isPositive ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      <TrendingUp
                        className={`w-3 h-3 lg:w-4 lg:h-4 mr-1 ${
                          stat.isPositive ? "" : "rotate-180"
                        }`}
                      />
                      {stat.change}
                    </div>
                  </div>
                  <div
                    className={`${stat.bgColor} ${stat.color} p-2 lg:p-3 rounded-lg lg:rounded-xl self-end lg:self-start order-1 lg:order-2 flex-shrink-0`}
                  >
                    <Icon className="w-4 h-4 lg:w-6 lg:h-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">
                  Recent Orders
                </h2>
                <div className="flex items-center gap-2">
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    {filters.map((filter) => (
                      <option key={filter} value={filter}>
                        {filter}
                      </option>
                    ))}
                  </select>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {recentOrders.map((order, index) => (
                <div
                  key={index}
                  className="p-4 lg:p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-semibold text-gray-900">
                          {order.id}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${order.statusColor}`}
                        >
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        {order.customer} • {order.items} items
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {order.time}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 mb-2">
                        {order.total}
                      </p>
                      <div className="flex items-center gap-1">
                        <button className="p-1 hover:bg-gray-200 rounded text-gray-500 hover:text-gray-700">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1 hover:bg-gray-200 rounded text-gray-500 hover:text-gray-700">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 lg:p-6 border-t border-gray-100">
              <button className="w-full text-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
                View All Orders
              </button>
            </div>
          </div>

          {/* Top Selling Items */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">
                Top Selling Items
              </h2>
            </div>

            <div className="p-6 space-y-4">
              {topItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 truncate">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-600">{item.category}</p>
                    <p className="text-xs text-gray-500">{item.sold} sold</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{item.revenue}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-gray-100">
              <button className="w-full text-center text-orange-600 font-medium hover:text-orange-700 transition-colors">
                View All Items
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-dashed border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all group">
              <div className="bg-orange-100 group-hover:bg-orange-200 p-3 rounded-xl transition-colors">
                <ShoppingCart className="w-6 h-6 text-orange-600" />
              </div>
              <span className="font-medium text-gray-700 group-hover:text-orange-700">
                New Order
              </span>
            </button>

            <button className="flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-dashed border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group">
              <div className="bg-blue-100 group-hover:bg-blue-200 p-3 rounded-xl transition-colors">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <span className="font-medium text-gray-700 group-hover:text-blue-700">
                Add Customer
              </span>
            </button>

            <button className="flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-dashed border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all group">
              <div className="bg-purple-100 group-hover:bg-purple-200 p-3 rounded-xl transition-colors">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <span className="font-medium text-gray-700 group-hover:text-purple-700">
                Add Item
              </span>
            </button>

            <button className="flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-dashed border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all group">
              <div className="bg-green-100 group-hover:bg-green-200 p-3 rounded-xl transition-colors">
                <Download className="w-6 h-6 text-green-600" />
              </div>
              <span className="font-medium text-gray-700 group-hover:text-green-700">
                Export Data
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
