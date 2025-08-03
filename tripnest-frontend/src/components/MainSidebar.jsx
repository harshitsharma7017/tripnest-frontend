import { useState } from "react";
import { 
  Home,
  Plane,
  Hotel,
  Train,
  Bus,
  Calendar,
  Heart,
  User,
  CreditCard,
  Gift,
  Settings,
  HelpCircle,
  Star,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Bell,
  ShoppingBag,
  Filter,
} from "lucide-react";

const MainSidebar = ({ collapsed, onToggle }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { title: "Dashboard", icon: Home },
    { title: "Attractions", icon: MapPin },
    { title: "My Trips", icon: Calendar },
    { title: "Wishlist", icon: Heart },
  ];

  const accountItems = [
    { title: "Profile", icon: User },
    { title: "Payment Methods", icon: CreditCard },
    { title: "Rewards", icon: Gift },
    { title: "Settings", icon: Settings },
    { title: "Help", icon: HelpCircle },
  ];

  const handleItemClick = (title) => {
    setActiveItem(title);
  };

  return (
    <div 
      className={`${
        collapsed ? "w-16" : "w-64"
      } bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col h-screen`}
    >
      {/* Header with Toggle Button */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">JS</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">John Smith</p>
              <p className="text-xs text-gray-500">john.smith@email.com</p>
            </div>
          </div>
        )}
        {collapsed && (
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
              {menuItems.map(({ title, icon: Icon }) => (
                <button
                  key={title}
                  onClick={() => handleItemClick(title)}
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
              {accountItems.map(({ title, icon: Icon }) => (
                <button
                  key={title}
                  onClick={() => handleItemClick(title)}
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
  )}
      {/* Main Content Area (for demonstration) */}
      <div className="flex-1 p-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Welcome to MakeMyTrip Dashboard
          </h1>
          <p className="text-gray-600 mb-8">
            Your travel companion for booking flights, hotels, trains, and more.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Plane className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold">Book Flights</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Find and book domestic and international flights at the best prices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Hotel className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold">Book Hotels</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Discover and book hotels, resorts, and accommodations worldwide.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Train className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold">Book Trains</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Book train tickets with real-time availability and seat selection.
              </p>
            </div>
          </div>
        </div>
      </div>

export default MainSidebar;