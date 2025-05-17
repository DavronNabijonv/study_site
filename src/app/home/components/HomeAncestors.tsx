// Import Swiper styles
import { AncestorsData } from "@/data";
import "swiper/css";
import "swiper/css/pagination";
import "./HomeSwiper.css";

// import required modules
import { Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Swiper as SwiperCore } from "swiper";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HomeAcademy } from "@/assets";

function HomeAncestors() {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <section className="pt-20 pb-10 max-md:pt-[60px] max-sm:pt-10">
      <div className="main-container">
        {/* Intro */}
        <h2 className="font-semibold capitalize text-[#151515] text-[40px] leading-[130%] mb-10 max-md:text-3xl max-md:mb-8 max-sm:text-[28px] max-sm:mb-4">
          Our <span className="text-primary">Ancestors</span>
        </h2>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            parallax={true}
            grabCursor={true}
            modules={[Pagination, Parallax]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="home-swiper"
          >
            {AncestorsData.map((ancestor) => (
              <SwiperSlide
                className="relative group !h-[380px] max-sm:!h-[460px] rounded-[12px] px-8 overflow-hidden"
                key={ancestor.id}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[1] max-sm:bg-top"
                  style={{
                    backgroundImage: `url(${ancestor.img})`,
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-black/50 mix-blend-multiply z-[2] transition-colors duration-300" />

                {/* Content */}
                <div className="relative z-[3] flex flex-col justify-end h-full py-4 items-center">
                  <div className="flex items-center pb-4 border-b-[2.5px] border-b-white w-full justify-between flex-wrap gap-x-2">
                    <p className="text-white text-xl max-sm:text-[18px]">
                      {ancestor.name}
                    </p>
                    <p className="text-white text-xl max-sm:text-[18px]">
                      {ancestor.year}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute top-1/2 -translate-y-[100%] z-20 w-[120%] max-[1400px]:w-[112%] max-[1300px]:w-[105%] -translate-x-1/2 left-1/2 flex justify-between max-sm:hidden">
            <div
              className="w-12 h-12 bg-[#F2F0F0] hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center rounded-full cursor-pointer"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft className="text-primary" />
            </div>
            <div
              className="w-12 h-12 bg-[#F2F0F0] hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center rounded-full cursor-pointer"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRight className="text-primary" />
            </div>
          </div>
        </div>

        {/* About Study Academy */}
        <div className="mt-20 flex gap-[59px] max-md:mt-16 max-sm:mt-[60px]">
          <div className="w-1/2 max-md:w-full">
            <h3 className="font-semibold text-[32px] leading-[130%] text-[#151515] max-sm:text-2xl">
              About World Study Academy
            </h3>
            <p className="mt-8 mb-10 max-md:mb-5 text-[16px] max-md:mt-4">
              Lorem Impus about wst World-renowned universities Innovative and
              modern teaching methods a memorable student life experience
              Exciting post-graduation work opportunities Lorem Impus about wst
              World-renowned universities Innovative and modern teaching methods
              a memorable student life experience Exciting post-graduation work
              opportunities
            </p>

            <img
              src={HomeAcademy}
              alt="Study academy image"
              className="w-full h-[372px] rounded-[8px] object-cover min-md:hidden"
            />

            <Button
              type="button"
              variant="default"
              className="flex items-center gap-[10px] h-12 max-w-[274px] w-full max-md:mt-5 font-medium text-[18px] max-sm:text-[16px] max-[500px]:!max-w-full"
            >
              <p>Watch our team</p>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          <div className="w-1/2 max-md:hidden">
            <img
              src={HomeAcademy}
              alt="Study academy image"
              className="w-full rounded-[12px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAncestors;
