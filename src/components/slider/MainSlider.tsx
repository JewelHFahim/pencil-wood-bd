import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useSliderListQuery } from "../../redux/features/site/siteApis";

export default function MainSlider() {
  const { data: sliderList, isLoading } = useSliderListQuery();

  if (isLoading) {
    return (
      <div className="my-4 h-[150px] md:h-[250px] bg-gray-300 animate-pulse"></div>
    );
  }

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
        {sliderList?.data?.map((slide) => (
          <SwiperSlide>
            <img
              src={slide?.image}
              className="w-full h-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
