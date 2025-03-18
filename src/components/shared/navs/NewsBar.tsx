// import { useEffect, useState } from "react";
import { useNewFeedQuery } from "../../../redux/features/site/siteApis";

// const NewsBar = () => {
//   const { data: newFeed } = useNewFeedQuery();
//   const interval = 3500;

//   const [index, setIndex] = useState<number>(0);

//   useEffect(() => {
//     if (!newFeed?.data?.length) return;

//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % newFeed?.data?.length);
//     }, interval);

//     return () => clearInterval(timer);
//   }, [newFeed, interval]);

//   if (!newFeed?.data?.length) return null;

//   const currentItem = newFeed?.data[index];

//   return (
//     <div className="bg-primary h-[30px] w-full flex justify-center items-center">
//       <p
//         className="text-white text-sm font-medium transition-transform duration-500 ease-in-out transform"
//         style={{ willChange: "transform" }}
//       >
//         {currentItem?.news}
//       </p>
//     </div>
//   );
// };

// export default NewsBar;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";


const NewsBar = () => {
  const { data: newFeed } = useNewFeedQuery();

  return (
    <div className="bg-primary h-[30px] flex justify-center items-center text-white">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {newFeed?.data?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex justify-center items-center">
              <p className="font-medium">{item.news}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsBar;
