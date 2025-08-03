import { useState } from "react";
import { Card, Avatar, Button, Tag } from "antd";
import {
  MapPin, Calendar, Phone, Mail,
  Star, Gift, CreditCard, Plane,
  Hotel, Heart, Settings, Bell,
  Globe, Shield
} from "lucide-react";

const UserProfile = () => {
  const [activeTab] = useState("overview");
  const userStats = [
    { label: "Trips Completed", value: "24", icon: Plane },
    { label: "Cities Visited", value: "12", icon: MapPin },
    { label: "Hotels Booked", value: "18", icon: Hotel },
    { label: "Favorites", value: "6", icon: Heart }
  ];
  const recentTrips = [/* same data */];
  const achievements = [/* same data */];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Profile Header */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50">
        <div className="p-6 flex space-x-6">
          <div className="relative">
            <Avatar size={96} src="/placeholder.svg">JS</Avatar>
            <Tag
              color="gold"
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs"
            >
              <Star className="h-3 w-3 mr-1 fill-current inline" />
              Gold Member
            </Tag>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">John Smith</h1>
            <p className="text-gray-500 flex items-center mt-1">
              <Mail className="h-4 w-4 mr-2" />john.smith@email.com
            </p>
            <p className="text-gray-500 flex items-center mt-1">
              <Phone className="h-4 w-4 mr-2" />+91 98765 43210
            </p>
            <p className="text-gray-500 flex items-center mt-1">
              <MapPin className="h-4 w-4 mr-2" />Mumbai, India
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <Tag color="cyan" className="text-xs">
                <Gift className="h-3 w-3 mr-1 inline" />
                2,450 Reward Points
              </Tag>
              <Tag color="blue" className="text-xs">
                <Calendar className="h-3 w-3 mr-1 inline" />
                Member since 2020
              </Tag>
              <Tag color="default" className="text-xs">
                <Shield className="h-3 w-3 mr-1 inline" />
                Verified
              </Tag>
            </div>
            <div className="flex space-x-2 mt-4">
              <Button type="default" size="small" icon={<Settings className="h-4 w-4 mr-1" />}>
                Edit Profile
              </Button>
              <Button type="primary" size="small" icon={<Globe className="h-4 w-4 mr-1" />}>
                Plan Trip
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {userStats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card
              key={i}
              className="text-center border-0 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full mb-3">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Trips */}
        <Card className="lg:col-span-2 border-0 shadow-lg">
          <Card title={<span className="flex items-center"><Plane className="h-5 w-5 mr-2 text-blue-600" />Recent Trips</span>}>
            <div className="space-y-4">
              {recentTrips.map(trip => (
                <div key={trip.id} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-200 cursor-pointer">
                  <div className="text-3xl transition-transform duration-200 hover:scale-110">{trip.image}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{trip.destination}</h4>
                    <p className="text-sm text-gray-500">{trip.date}</p>
                    <p className="text-xs text-gray-500">{trip.type}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(trip.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
              ))}
              <Button type="default" block>View All Trips</Button>
            </div>
          </Card>
        </Card>

        {/* Achievements */}
        <Card className="border-0 shadow-lg">
          <Card title={<span className="flex items-center"><Gift className="h-5 w-5 mr-2 text-pink-500" />Achievements</span>}>
            <div className="space-y-3">
              {achievements.map((ach, i) => (
                <div key={i} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-pink-50 transition duration-200 cursor-pointer">
                  <span className="text-2xl">{ach.icon}</span>
                  <div>
                    <h5 className="text-sm font-medium text-gray-900">{ach.title}</h5>
                    <p className="text-xs text-gray-500">{ach.description}</p>
                  </div>
                </div>
              ))}
              <Button type="primary" block size="small" className="mt-4">View All Badges</Button>
            </div>
          </Card>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-0 shadow-lg">
        <Card title="Quick Actions">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button type="default" className="h-20 flex flex-col items-center justify-center space-y-2 hover:scale-105 transition-transform duration-200">
              <CreditCard className="h-6 w-6" />
              <span className="text-xs">Payment Methods</span>
            </Button>
            <Button type="default" className="h-20 flex flex-col items-center justify-center space-y-2 hover:scale-105 transition-transform duration-200">
              <Bell className="h-6 w-6" />
              <span className="text-xs">Notifications</span>
            </Button>
            <Button type="default" className="h-20 flex flex-col items-center justify-center space-y-2 hover:scale-105 transition-transform duration-200">
              <Heart className="h-6 w-6" />
              <span className="text-xs">Wishlist</span>
            </Button>
            <Button type="default" className="h-20 flex flex-col items-center justify-center space-y-2 hover:scale-105 transition-transform duration-200">
              <Gift className="h-6 w-6" />
              <span className="text-xs">Rewards</span>
            </Button>
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default UserProfile;
