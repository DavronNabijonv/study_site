import { HomeHeroBg } from "@/assets";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function HomeHero() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-[200px] pb-[276px] max-[1000px]:py-[200px] max-md:py-[180px] max-sm:py-[150px] max-[500px]:!pt-[120px] max-[500px]:!pb-[108px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HomeHeroBg})`,
          mixBlendMode: "multiply",
        }}
      />
      <div className="absolute inset-0 bg-black/25 mix-blend-multiply" />

      {/* Content */}
      <div className="main-container">
        <div className="relative z-10 text-white max-w-[482px] w-full max-sm:max-w-full max-[500px]:text-center">
          <h1 className="font-bold text-[80px] leading-20 max-[1000px]:text-6xl max-[1000px]:leading-16 max-md:text-5xl max-md:leading-14 max-sm:text-4xl max-sm:leading-10 max-[500px]:!text-[32px] max-[500px]:leading-[130%]">
            Study in Uzbekistan
          </h1>

          <p className="font-semibold text-2xl mt-6 mb-10 max-sm:text-[18px] max-[500px]:!text-[16px]">
            Explore universities, apply for grants, and live your dream
          </p>

          <div className="flex items-center gap-3 h-12 max-sm:h-10 max-[500px]:flex-col-reverse max-[500px]:mt-[300px]">
            <Button
              className="h-full text-[18px] px-10 max-[500px]:w-full max-[500px]:text-[16px] hover:bg-gray-300"
              type="button"
              variant="secondary"
              onClick={() => navigate("about-uz")}
            >
              About Uzbekistan
            </Button>
            <Button
              className="h-full text-[18px] px-10 max-[500px]:w-full max-[500px]:text-[16px] hover:bg-[#2198e7]"
              type="button"
              variant="default"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
