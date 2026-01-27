import React, { Suspense } from 'react';
import HeroSlider from '../Components/HeroSlider';
import FeaturedProducts from '../Components/FeaturedProducts';
import WhyChose from '../Components/WhyChose';
import PropertyCategories from '../Components/PropertyCategories';
import HowItWorks from '../Components/HowItWorks';
import Loading from '../Components/Loading';

const featurePromise = fetch("http://localhost:3000/feature-properties").then(
  (res) => res.json(),
);

const Home = () => {
  return (
    <div className="mt-10 bg-base-50">
      <div className="max-w-7xl mx-auto overflow-x-hidden">
        <HeroSlider></HeroSlider>
      </div>

      <div className="max-w-7xl mx-auto lg:p-4 mt-16 shadow-md">
        <Suspense fallback ={<Loading></Loading>}>
          <FeaturedProducts featurePromise={featurePromise}></FeaturedProducts>
        </Suspense>
      </div>

      <div className="max-w-7xl mx-auto md:py-10 mt-16 shadow-md">
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