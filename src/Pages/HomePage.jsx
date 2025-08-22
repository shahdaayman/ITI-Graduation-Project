import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Hero from "../Components/Hero/Hero";
import FlashSalesSection from "../Components/FlashSalesSection/FlashSalesSection";
import HomeProducts from "../Components/HomeProducts/HomeProducts";
import ViewAllProductsBtn from "../Components/ViewAllProductsBtn/ViewAllProductsBtn";
import BrowseByCategory from "../Components/BrowseByCategory/BrowseByCategory";
import CategorySection from "../Components/CategorySection/CategorySection";
import ThisMonthHeader from "../Components/ThisMonthHeader/ThisMonthHeader";
import Banner from "../Components/Banner/Banner";
import OurProductsHeader from "../Components/OurProductsHeader/OurProductsHeader";
import NewArrivalHeader from "../Components/NewArrivalHeader/NewArrivalHeader";
import NewArrivalSection from "../Components/NewArrivalSection/NewArrivalSection";
import FeaturesSection from "../Components/FeaturesSection/FeaturesSection";
import HomeProducts2 from "../Components/HomeProducts2/HomeProducts2";
import HomeProducts3 from "../Components/HomeProducts3/HomeProducts3";
import HomeProducts4 from "../Components/HomeProducts4/HomeProducts4";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="body-container-home">
      <div className="top-row">
        <Sidebar />
        <Hero />
      </div>

      <div className="flash-row">
        <FlashSalesSection />
      </div>
      <HomeProducts />
      <ViewAllProductsBtn />
      <BrowseByCategory />
      <CategorySection />
      <ThisMonthHeader/>
      <HomeProducts2 />
      <Banner/>
      <OurProductsHeader/>
      <HomeProducts3 />
      <HomeProducts4 />
      <ViewAllProductsBtn />
      <NewArrivalHeader/>
      <NewArrivalSection/>
      <FeaturesSection/>
    </div>
  );
};

export default HomePage;
