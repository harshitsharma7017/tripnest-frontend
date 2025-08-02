import { useState } from "react";
import { Typography, Row, Col } from "antd";
import HeroSection from "../components/HeroSection";
import QuickDeals from "../components/QuickDeals";
import PopularDestinations from "../components/PopularDestinations";
import HolidayPackages from "../components/HolidayPackages";
import CustomerReviews from "../components/CustomerReviews";
import SearchResults from "../components/SearchResults";

const { Title } = Typography;

const LandingPage = () => { 
  const [searchResults, setSearchResults] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);

  const handleSearch = (searchType, searchData) => {
    setSearchQuery({ type: searchType, data: searchData });
    setSearchResults({ type: searchType, data: searchData });
  };

  return (
    <div className="w-full -m-6 -mt-6">
      <HeroSection onSearch={handleSearch} />
      
      {searchResults && (
        <SearchResults 
          searchType={searchResults.type} 
          searchData={searchResults.data}
          onClose={() => setSearchResults(null)}
        />
      )}

      {!searchResults && (
        <div className="px-6 py-8 space-y-12">
          <QuickDeals />
          <PopularDestinations />
          <HolidayPackages />
          <CustomerReviews />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
