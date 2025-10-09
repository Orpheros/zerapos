import {
  FileText,
  Calendar,
  Package,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Download,
  Eye,
  MoreVertical,
  BarChart3,
  PieChart,
  Target,
} from "lucide-react";

const ReportPage = () => {
  // Mock data for reports
  const reports = [
    {
      id: "RPT-001",
      title: "Daily Sales Report",
      category: "Sales",
      description: "Complete overview of daily sales performance and trends",
      lastGenerated: "2 hours ago",
      frequency: "Daily",
      status: "Ready",
      statusColor: "bg-green-100 text-green-800",
      icon: DollarSign,
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
      size: "2.3 MB",
      downloads: 45,
    },
    {
      id: "RPT-002",
      title: "Monthly Revenue Report",
      category: "Sales",
      description: "Monthly revenue breakdown with comparisons and analytics",
      lastGenerated: "1 day ago",
      frequency: "Monthly",
      status: "Ready",
      statusColor: "bg-green-100 text-green-800",
      icon: TrendingUp,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      size: "5.7 MB",
      downloads: 128,
    },
    {
      id: "RPT-003",
      title: "Stock Inventory Report",
      category: "Inventory",
      description:
        "Current stock levels, low inventory alerts and reorder suggestions",
      lastGenerated: "3 hours ago",
      frequency: "Daily",
      status: "Ready",
      statusColor: "bg-green-100 text-green-800",
      icon: Package,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
      size: "1.8 MB",
      downloads: 67,
    },
    {
      id: "RPT-004",
      title: "Customer Analytics Report",
      category: "Customers",
      description: "Customer behavior, preferences and demographic insights",
      lastGenerated: "6 hours ago",
      frequency: "Weekly",
      status: "Generating",
      statusColor: "bg-yellow-100 text-yellow-800",
      icon: Users,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-100",
      size: "3.2 MB",
      downloads: 92,
    },
    {
      id: "RPT-005",
      title: "Weekly Performance Report",
      category: "Performance",
      description: "Weekly business performance metrics and KPI tracking",
      lastGenerated: "2 days ago",
      frequency: "Weekly",
      status: "Ready",
      statusColor: "bg-green-100 text-green-800",
      icon: BarChart3,
      iconColor: "text-indigo-600",
      iconBg: "bg-indigo-100",
      size: "4.1 MB",
      downloads: 34,
    },
    {
      id: "RPT-006",
      title: "Top Products Report",
      category: "Products",
      description: "Best performing products with sales data and trends",
      lastGenerated: "4 hours ago",
      frequency: "Daily",
      status: "Ready",
      statusColor: "bg-green-100 text-green-800",
      icon: Target,
      iconColor: "text-pink-600",
      iconBg: "bg-pink-100",
      size: "2.9 MB",
      downloads: 156,
    },
    {
      id: "RPT-007",
      title: "Financial Summary Report",
      category: "Finance",
      description: "Comprehensive financial overview including profit and loss",
      lastGenerated: "1 day ago",
      frequency: "Monthly",
      status: "Ready",
      statusColor: "bg-green-100 text-green-800",
      icon: PieChart,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-100",
      size: "6.5 MB",
      downloads: 89,
    },
    {
      id: "RPT-008",
      title: "Order Fulfillment Report",
      category: "Operations",
      description:
        "Order processing times, fulfillment rates and delivery metrics",
      lastGenerated: "5 hours ago",
      frequency: "Daily",
      status: "Processing",
      statusColor: "bg-blue-100 text-blue-800",
      icon: Clock,
      iconColor: "text-cyan-600",
      iconBg: "bg-cyan-100",
      size: "1.6 MB",
      downloads: 78,
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 px-4">
        <div className="flex flex-row lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
            {/* <p className="text-gray-600 mt-1">
              Generate and manage your business reports
            </p> */}
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex items-center px-4 py-2 rounded-xl border border-gray-300 text-gray-800 bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="flex items-center px-4 py-2 rounded-xl border border-gray-300 text-gray-800 bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                {periods.map((period) => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>
            </div>

            <button className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-medium transition-colors">
              Generate New Report
            </button>
          </div> */}
        </div>
      </div>

      <div className="p-4 lg:p-6 space-y-6 pb-22">
        {/* Reports List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">
                Available Reports
              </h2>
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-lg font-medium">
                  {reports.length} reports
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {reports.map((report, index) => {
              const Icon = report.icon;
              return (
                <div
                  key={index}
                  className="p-4 lg:p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                    {/* Icon and Title Row (Mobile) */}
                    <div className="flex items-start gap-4 flex-1">
                      <div
                        className={`${report.iconBg} ${report.iconColor} p-2 lg:p-3 rounded-xl flex-shrink-0`}
                      >
                        <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                      </div>

                      {/* Report Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3 mb-2">
                              <h3 className="font-semibold text-gray-900 text-sm lg:text-base">
                                {report.title}
                              </h3>
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${report.statusColor} self-start`}
                              >
                                {report.status}
                              </span>
                            </div>
                            <p className="text-xs lg:text-sm text-gray-600 mb-3 lg:mb-2 leading-relaxed">
                              {report.description}
                            </p>

                            {/* Mobile: Stack info vertically, Desktop: Horizontal */}
                            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 text-xs text-gray-500 mb-3 lg:mb-0">
                              <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {report.lastGenerated}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {report.frequency}
                                </span>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                  <FileText className="w-3 h-3" />
                                  {report.size}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Download className="w-3 h-3" />
                                  {report.downloads} downloads
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Category and Actions Row */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                          <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg font-medium self-start">
                            {report.category}
                          </span>

                          {/* Action Buttons - Full width on mobile */}
                          <div className="flex items-center gap-2 w-full lg:w-auto">
                            <button
                              className="flex items-center justify-center gap-2 px-3 py-2 text-xs lg:text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors flex-1 lg:flex-initial"
                              disabled={report.status !== "Ready"}
                            >
                              <Eye className="w-4 h-4" />
                              <span className="lg:inline">View</span>
                            </button>
                            <button
                              className="flex items-center justify-center gap-2 px-3 py-2 text-xs lg:text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex-1 lg:flex-initial"
                              disabled={report.status !== "Ready"}
                            >
                              <Download className="w-4 h-4" />
                              <span className="lg:inline">Download</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
