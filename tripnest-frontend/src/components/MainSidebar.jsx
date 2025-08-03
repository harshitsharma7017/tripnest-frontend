
import { useState } from "react";
import { 
  Home,
  MapPin,
  Calendar,
  Heart,
  User,
  CreditCard,
  Gift,
  Settings,
  HelpCircle,
  Star,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const MainSidebar = ({ collapsed, onToggle, onNavigate }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { title: "Dashboard", icon: Home, path: "/" },
    { title: "Attractions", icon: MapPin, path: "/attractions" },
    { title: "My Trips", icon: Calendar, path: "/trips" },
  ];

  const accountItems = [
    { title: "Profile", icon: User, path: "/profile" },
    { title: "Payment Methods", icon: CreditCard, path: "/" },
    { title: "Rewards", icon: Gift, path: "/" },
    { title: "Settings", icon: Settings, path: "/" },
    { title: "Help", icon: HelpCircle, path: "/help" },
  ];

  const handleItemClick = (title, path) => {
    setActiveItem(title);
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <div 
      className={`${
        collapsed ? "w-16" : "w-64"
      } bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col h-screen`}
    >
      {/* Header with Toggle Button */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!collapsed ? (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">JS</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">John Smith</p>
              <p className="text-xs text-gray-500">john.smith@email.com</p>
            </div>
          </div>
        ) : (
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
            <span className="text-white text-sm font-bold">JS</span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4 text-gray-600" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          )}
        </button>
      </div>

      {/* Gold Member Badge */}
      {!collapsed && (
        <div className="px-4 py-2 border-b border-gray-200">
          <div className="flex items-center space-x-2 bg-yellow-50 px-3 py-1 rounded-full">
            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
            <span className="text-xs font-medium text-yellow-700">Gold Member</span>
          </div>
          <button className="text-xs text-blue-600 hover:text-blue-800 mt-1">
            View Profile
          </button>
        </div>
      )}

      {/* Scrollable Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        {/* Travel Section */}
        <div className="px-4 mb-6">
          {!collapsed && (
            <p className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wide">
              Travel
            </p>
          )}
          <div className="space-y-1">
            {menuItems.map(({ title, icon: Icon, path }) => (
              <button
                key={title}
                onClick={() => handleItemClick(title, path)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                  activeItem === title
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                title={collapsed ? title : ""}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                {!collapsed && <span className="text-sm">{title}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Account Section */}
        <div className="px-4">
          {!collapsed && (
            <p className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wide">
              Account
            </p>
          )}
          <div className="space-y-1">
            {accountItems.map(({ title, icon: Icon, path }) => (
              <button
                key={title}
                onClick={() => handleItemClick(title, path)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                  activeItem === title
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                title={collapsed ? title : ""}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                {!collapsed && <span className="text-sm">{title}</span>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSidebar;