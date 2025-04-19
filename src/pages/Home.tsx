import React, { Suspense } from "react";
const ProductsContainer = React.lazy(() => import("../components/products/ProductsContainer"));
const MainSlider = React.lazy(() => import("../components/slider/MainSlider"));
const Loader = React.lazy(() => import("./../utils/loader/Loader"));

const Home = () => {
  return (
    <div className="min-h-[70vh]">
      <Suspense fallback={<div className="w-full"><Loader /></div>}>
        <MainSlider />
      </Suspense>

      <ProductsContainer />
    </div>
  );
};

export default Home;

// import image from './banner.jpg?w=600;800&format=webp&as=srcset'; //image optimizing
