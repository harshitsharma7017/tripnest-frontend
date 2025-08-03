import React, { useState } from 'react';
import { Tabs } from 'antd';
import { 
  Plane, 
  Building2, 
  Package, 
  Bus, 
  Train 
} from 'lucide-react';
import FlightBooking from './FlightBooking';
import HotelBooking from './HotelBooking'; 
import HolidayPackages from './HolidayPackages';
import BusBooking from './BusBooking';
import TrainBooking from './TrainBooking';

const TravelBooking = () => {
  const [activeTab, setActiveTab] = useState('flights');

  const tabItems = [
    {
      key: 'flights',
      label: (
        <div className="flex items-center gap-2 px-2">
          <Plane className="h-4 w-4" />
          <span>Flights</span>
        </div>
      ),
      children: <FlightBooking />
    },
    {
      key: 'hotels',
      label: (
        <div className="flex items-center gap-2 px-2">
          <Building2 className="h-4 w-4" />
          <span>Hotels</span>
        </div>
      ),
      children: <HotelBooking />
    },
    {
      key: 'packages',
      label: (
        <div className="flex items-center gap-2 px-2">
          <Package className="h-4 w-4" />
          <span>Packages</span>
        </div>
      ),
      children: <HolidayPackages />
    },
    {
      key: 'buses',
      label: (
        <div className="flex items-center gap-2 px-2">
          <Bus className="h-4 w-4" />
          <span>Buses</span>
        </div>
      ),
      children: <BusBooking />
    },
    {
      key: 'trains',
      label: (
        <div className="flex items-center gap-2 px-2">
          <Train className="h-4 w-4" />
          <span>Trains</span>
        </div>
      ),
      children: <TrainBooking />
    }
  ];

  return (
    <div className="w-full">
      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        items={tabItems}
        size="large"
        className="travel-booking-tabs"
        tabBarStyle={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '12px 12px 0 0',
          margin: 0,
          padding: '0 16px',
          backdropFilter: 'blur(10px)'
        }}
      />
      
      <style jsx>{`
        .travel-booking-tabs .ant-tabs-tab {
          padding: 12px 16px !important;
          margin-right: 8px !important;
          border-radius: 8px 8px 0 0 !important;
        }
        
        .travel-booking-tabs .ant-tabs-tab-active {
          background-color: white !important;
          border-bottom: 2px solid #1890ff !important;
        }
        
        .travel-booking-tabs .ant-tabs-content-holder {
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default TravelBooking;