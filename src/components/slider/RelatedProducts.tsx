import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ProductResponse } from "../../types/products_type";
import RelatedProductCard from "../products/RelatedProductCard";
import { FC } from 'react';

interface RelatedProductsProps {
  related_products?: ProductResponse[];
}

const RelatedProducts:FC<RelatedProductsProps> = ({ related_products = [] }) => {

  // if (isLoading) return <Loader />;
  // if (error) return <p>Error loading products</p>;

  return (
    <div className="my-4 overflow-hidden mt-10">
      <h1 className="text-xl font-bold mb-4 py-2 text-orange-600 uppercase text-center bg-orange-100">
        Similar Products
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        centeredSlides={false}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={false}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        navigation={false}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {related_products?.map((product: ProductResponse) => (
          <SwiperSlide key={product?.id}>
            <RelatedProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedProducts;
