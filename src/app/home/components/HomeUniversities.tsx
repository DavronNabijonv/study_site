// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./HomeSwiper.css";

// import required modules
import { Pagination, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Swiper as SwiperCore } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HomeUnData } from "@/data";

function HomeUniversities() {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <section className="py-10">
      <div className="main-container">
        {/* Intro */}
        <div className="flex items-center justify-between gap-5 flex-wrap">
          <h2 className="font-semibold text-[#151515] capitalize text-[40px] leading-[130%] max-md:text-3xl max-sm:text-[28px] max-sm:leading-2">
            Top <span className="text-primary">universities</span>
          </h2>

          <Button
            type="button"
            variant="link"
            className="flex items-center gap-2 font-medium text-2xl transition-all duration-300 max-sm:text-xl max-sm:gap-1 !p-0 max-[500px]:!text-[16px]"
          >
            See More
            <ChevronRight className="!w-5 !h-5" />
          </Button>
        </div>

        {/* Carousel */}
        <div className="relative mt-10 max-md:mt-5 max-sm:mt-[18px]">
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
            {HomeUnData.map((university) => (
              <SwiperSlide
                className="relative group !h-[380px] max-sm:!h-[460px] rounded-[12px] px-8 overflow-hidden max-sm:px-4"
                key={university.id}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[1] max-sm:bg-top"
                  style={{
                    backgroundImage: `url(${university.img})`,
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-black/50 mix-blend-multiply z-[2] transition-colors duration-300" />

                {/* Content */}
                <div className="relative z-[3] flex flex-col justify-end h-full py-4 items-center">
                  <div className="flex items-center pb-4 border-b-[2.5px] border-b-white w-full justify-between flex-wrap gap-x-2">
                    <p className="text-white text-xl max-sm:text-[18px] text-left">
                      {university.name}
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
      </div>

      {/* University statistics */}
      <div className="bg-darkBlue mt-20 max-sm:mt-10">
        <div className="main-container text-white py-12 flex items-center justify-between gap-5 max-[800px]:flex-col max-md:py-10 max-sm:py-6">
          <p className="font-semibold text-[28px] leading-[130%] max-w-[500px] max-[800px]:max-w-full max-[800px]:text-center max-md:text-2xl max-sm:text-[20px]">
            Start your journey with 1 million students across Uzbekistan!
          </p>

          <div className="flex gap-[56px] max-[1000px]:gap-10 max-sm:gap-5">
            <div className="gap-1 flex items-center justify-center flex-col">
              <h3 className="font-medium text-[56px] leading-[130%] max-[1000px]:text-5xl max-[800px]:text-3xl max-sm:text-2xl">
                202
              </h3>
              <span className="text-[18px] font-medium max-sm:text-[16px]">
                Universities
              </span>
            </div>
            <div className="gap-1 flex items-center justify-center flex-col">
              <h3 className="font-medium text-[56px] leading-[130%] max-[1000px]:text-5xl max-[800px]:text-3xl max-sm:text-2xl">
                700
              </h3>
              <span className="text-[18px] font-medium max-sm:text-[16px]">
                Faculties
              </span>
            </div>
            <div className="gap-1 flex items-center justify-center flex-col">
              <h3 className="font-medium text-[56px] leading-[130%] max-[1000px]:text-5xl max-[800px]:text-3xl max-sm:text-2xl">
                10K
              </h3>
              <span className="text-[18px] font-medium max-sm:text-[16px]">
                Applicants
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeUniversities;
