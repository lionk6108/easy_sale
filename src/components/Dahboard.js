import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area } from "recharts";
import { 
  ArrowUpRight, Users, Tags, MapPin, ChevronRight, Check, X, TrendingUp, 
  Activity, Home, Settings, FileText, Bell, HelpCircle, LogOut, Menu,
  Sparkles, ArrowRight, Sun, Moon, Plus
} from "lucide-react";
import { paginationItems } from "./pageProps/shopPage/Pagination";

const Dashboard = () => {
  const [ads, setAds] = useState(paginationItems);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedChart, setSelectedChart] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setAds(prevAds => 
      prevAds.map(ad => 
        ad._id === id ? { ...ad, status: newStatus } : ad
      )
    );
  };

  // Helper functions
  const countAdsPerMonth = () => {
    const adsPerMonth = {};
    ads.forEach((item) => {
      const month = new Date(item.createdAt).toLocaleString("default", { month: "long" });
      if (month === "October") {
        adsPerMonth[month] = (adsPerMonth[month] || 0) + 1;
      }
    });
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ];
    months.forEach((month) => {
      if (!adsPerMonth[month]) {
        adsPerMonth[month] = Math.floor(Math.random() * 50) + 10;
      }
    });
    return Object.entries(adsPerMonth).map(([month, count]) => ({
      month,
      count,
    }));
  };

  const countAdsPerCategory = () => {
    const adsPerCategory = {};
    ads.forEach((item) => {
      const category = item.category;
      adsPerCategory[category] = (adsPerCategory[category] || 0) + 1;
    });
    return Object.entries(adsPerCategory).map(([category, count]) => ({
      category,
      count,
    }));
  };

  const countAdsPerCity = () => {
    const adsPerCity = {};
    ads.forEach((item) => {
      const city = item.city;
      adsPerCity[city] = (adsPerCity[city] || 0) + 1;
    });
    return Object.entries(adsPerCity).map(([city, count]) => ({
      city,
      count,
    }));
  };

  // Data preparation
  const adsPerMonthData = countAdsPerMonth();
  const adsPerCategoryData = countAdsPerCategory();
  const adsPerCityData = countAdsPerCity();
  const displayedAds = ads.slice(0, 10);

  // Enhanced color palette with gradients
  const COLORS = {
    primary: "#4F46E5",
    secondary: "#EC4899",
    success: "#059669",
    warning: "#F59E0B",
    info: "#3B82F6",
    error: "#EF4444",
    gradient: {
      purple: "from-indigo-600 to-violet-600",
      pink: "from-pink-600 to-rose-600",
      blue: "from-blue-600 to-cyan-600",
      green: "from-emerald-600 to-teal-600",
    }
  };

  // Enhanced StatCard with floating effect and particles
  const StatCard = ({ title, value, icon: Icon, gradient }) => (
    <div 
      className="relative group animate-fade-in"
      onMouseEnter={() => setHoveredCard(title)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500`} />
      <div className={`relative p-6 rounded-2xl shadow-xl transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl ${
        isDarkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white'
      }`}>
        <div className="flex justify-between items-start">
          <div>
            <p className={`text-sm flex items-center gap-2 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {title}
              {hoveredCard === title && (
                <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
              )}
            </p>
            <h3 className={`text-3xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r ${
              isDarkMode ? 'from-gray-100 to-gray-400' : 'from-gray-900 to-gray-600'
            }`}>
              {value}
            </h3>
          </div>
          <div className={`p-3 rounded-xl bg-gradient-to-r ${gradient} text-white transform transition-transform group-hover:rotate-12`}>
            <Icon size={24} />
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm text-gray-600">
          <TrendingUp size={16} className="mr-1 text-green-500" />
          <span className="font-medium text-green-500">+12%</span>
          <span className={`ml-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>from last month</span>
        </div>
      </div>
    </div>
  );

  // Enhanced ChartCard with hover effects
  const ChartCard = ({ title, children }) => (
    <div className="transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className={`p-6 rounded-2xl shadow-xl border ${
        isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 backdrop-blur-xl border-white/20'
      }`}>
        <h2 className={`text-xl font-semibold mb-6 flex items-center justify-between ${
          isDarkMode ? 'text-gray-100' : 'text-gray-800'
        }`}>
          {title}
          <Activity className="w-5 h-5 text-indigo-500 animate-pulse" />
        </h2>
        {children}
      </div>
    </div>
  );

  // Enhanced CustomTooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={`bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-lg border ${
          isDarkMode ? 'border-gray-700' : 'border-indigo-100'
        } animate-fade-in`}>
          <p className={`font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>{label}</p>
          <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Count: <span className="font-medium text-indigo-600">{payload[0].value}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  // Enhanced Sidebar with animations
  const Sidebar = () => {
    const navItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'ads', label: 'Ads Management', icon: FileText },
      { id: 'users', label: 'User Management', icon: Users },
      { id: 'notifications', label: 'Notifications', icon: Bell },
      { id: 'settings', label: 'Settings', icon: Settings },
      { id: 'help', label: 'Help & Support', icon: HelpCircle },
    ];

    return (
      <div className={`fixed left-0 top-0 h-full bg-white/30 backdrop-blur-lg shadow-xl transition-all duration-300 ${
        isSidebarOpen ? 'w-64' : 'w-20'
      } z-50 border-r border-white/20`}>
        <div className="p-6">
          <div className="flex items-center justify-between">
            {isSidebarOpen && (
              <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                Admin Panel
              </h2>
            )}
            <button 
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <Menu size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
        
        <nav className="mt-6">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`w-full flex items-center p-4 transition-all duration-200 ${
                activeMenu === item.id
                  ? 'bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isLoading ? 'none' : 'fadeIn 0.5s ease-out forwards'
              }}
            >
              <item.icon size={20} className="min-w-[20px]" />
              {isSidebarOpen && (
                <span className="ml-4 font-medium">{item.label}</span>
              )}
              {activeMenu === item.id && isSidebarOpen && (
                <ArrowRight size={16} className="ml-auto animate-bounce" />
              )}
            </button>
          ))}
        </nav>

        <button className="absolute bottom-0 w-full flex items-center p-4 text-red-600 hover:bg-red-50 transition-all duration-200 group">
          <LogOut size={20} className="min-w-[20px] transform group-hover:rotate-12 transition-transform" />
          {isSidebarOpen && <span className="ml-4 font-medium">Logout</span>}
        </button>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200'
      }`}>
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4 mx-auto" />
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200'
    }`}>
      <Sidebar />
      
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'} p-8`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center">
              Admin Dashboard
              <div className="inline-flex items-center ml-4 px-4 py-1 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm rounded-full shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                Live
              </div>
            </h1>
            <button
              onClick={() => setDarkMode(!isDarkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isDarkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-600" />}
            </button>
          </div>

          {/* Floating Action Button (FAB) */}
          <button
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          >
            <Plus size={24} />
          </button>

          {/* Rest of the content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard 
              title="Total Ads" 
              value={ads.length} 
              icon={Users} 
              gradient={COLORS.gradient.purple}
            />
            <StatCard 
              title="Categories" 
              value={adsPerCategoryData.length} 
              icon={Tags} 
              gradient={COLORS.gradient.pink}
            />
            <StatCard 
              title="Cities" 
              value={adsPerCityData.length} 
              icon={MapPin} 
              gradient={COLORS.gradient.blue}
            />
          </div>

          {/* Charts and tables */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <ChartCard title="Monthly Trends">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={adsPerMonthData}>
                  <defs>
                    <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.8}/>
                      <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Area 
                    type="monotone" 
                    dataKey="count" 
                    stroke={COLORS.primary} 
                    fill="url(#colorCount)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="Category Distribution">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={adsPerCategoryData}
                    dataKey="count"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >
                    {adsPerCategoryData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={Object.values(COLORS)[index % Object.values(COLORS).length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard title="City Analytics">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={adsPerCityData}>
                  <XAxis dataKey="city" />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="count" 
                    fill={COLORS.info}
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          {/* Ads Management Table */}
          <div className={`p-6 rounded-2xl shadow-lg border ${
            isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/90 backdrop-blur-lg border-white/20'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Ads Management
              </h2>
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                  <Sparkles size={16} />
                  Add New Ad
                </button>
                <span className="text-sm text-gray-500">
                  Showing {displayedAds.length} of {ads.length} ads
                </span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="p-4 text-left font-semibold text-gray-600">Product</th>
                    <th className="p-4 text-left font-semibold text-gray-600">ID</th>
                    <th className="p-4 text-left font-semibold text-gray-600">Date</th>
                    <th className="p-4 text-left font-semibold text-gray-600">Status</th>
                    <th className="p-4 text-left font-semibold text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedAds.map((ad, index) => (
                    <tr 
                      key={ad._id} 
                      className="border-b border-gray-100 hover:bg-gray-50/50 transition-all duration-200 group"
                      style={{
                        animation: `fadeIn 0.5s ease-out ${index * 0.1}s`,
                        opacity: 0,
                        animationFillMode: 'forwards'
                      }}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <FileText size={20} className="text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{ad.productName}</p>
                            <p className="text-sm text-gray-500">{ad.category}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                          {ad._id}
                        </span>
                      </td>
                      <td className="p-4 text-gray-600">{ad.createdAt}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          ad.status === 'Approved' ? 'bg-green-100 text-green-700' :
                          ad.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                          'bg-yellow-100 text-yellow-700'
                        } transition-colors duration-300`}>
                          {ad.status || "Pending"}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleStatusChange(ad._id, "Approved")}
                            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                          >
                            <Check size={16} className="transform group-hover:rotate-12 transition-transform" />
                            Accept
                          </button>
                          <button
                            onClick={() => handleStatusChange(ad._id, "Rejected")}
                            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-rose-500 text-white transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                          >
                            <X size={16} className="transform group-hover:rotate-12 transition-transform" />
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Previous
              </button>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                      page === 1
                        ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4); }
          50% { box-shadow: 0 0 20px 0 rgba(99, 102, 241, 0.4); }
        }

        .animate-pulse-glow {
          animation: pulseGlow 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;