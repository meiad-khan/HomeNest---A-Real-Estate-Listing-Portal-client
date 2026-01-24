import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import FeaturedProducts from '../Components/FeaturedProducts';

const Home = () => {
  return (
    <div className='mt-10 bg-base-50'>
      <div className='w-7xl mx-auto h-125 overflow-hidden'>
        <HeroSlider></HeroSlider>
      </div>


      <div className='w-7xl mx-auto mt-16 shadow-md'>
        <FeaturedProducts></FeaturedProducts>
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default Home;