import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function MainSlider() {
  return (
    <div className="my-4  overflow-hidden">
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="relative my-auto h-[150px] md:h-[250px]"
      >
        <SwiperSlide>
          <img
            src="/slider_img_1.jpg"
            className="w-full h-full object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slider_img_2.jpg"
            className="w-full h-full object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slider_img_3.jpg"
            className="w-full h-full object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slider_img_4.jpg"
            className="w-full h-full object-cover object-center"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
