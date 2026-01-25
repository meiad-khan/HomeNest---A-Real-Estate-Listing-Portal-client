import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import FeaturedProducts from '../Components/FeaturedProducts';
import WhyChose from '../Components/WhyChose';
import PropertyCategories from '../Components/PropertyCategories';
import HowItWorks from '../Components/HowItWorks';

const Home = () => {
  return (
    <div className="mt-10 bg-base-50">
      <div className="w-7xl mx-auto h-125 overflow-hidden">
        <HeroSlider></HeroSlider>
      </div>

      <div className="w-7xl mx-auto mt-16 shadow-md">
        <FeaturedProducts></FeaturedProducts>
      </div>

      <div className="w-7xl mx-auto mt-16 shadow-md">
        <WhyChose></WhyChose>
      </div>

      <div className="w-full mt-16 shadow-md bg-base-200">
        <PropertyCategories></PropertyCategories>
      </div>

      <div>
        <HowItWorks></HowItWorks>
      </div>
    </div>
  );
};

export default Home;