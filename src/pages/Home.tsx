import ProductsContainer from "../components/products/ProductsContainer";
import MainSlider from "../components/slider/MainSlider";

const Home = () => {
  return (
    <div className="min-h-[70vh]">
      <MainSlider />
      <ProductsContainer />
    </div>
  );
};

export default Home;
