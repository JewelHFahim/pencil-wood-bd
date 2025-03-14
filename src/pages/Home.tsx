import ProductsContainer from "../components/products/ProductsContainer";
import MainSlider from "../components/slider/MainSlider";

const Home = () => {
  // const { data: siteContent } = useAboutUsQuery();
  // console.log(siteContent);

  
  return (
    <div className="min-h-[70vh]">
      <MainSlider />
      <ProductsContainer />
    </div>
  );
};

export default Home;
