import { AboutUzEnd as AboutUzEndBg } from "@/assets";
import { Button } from "@/components/ui/button";

const AboutUzEnd = () => {
  return (
    <section className="relative py-[100px] md:py-[200px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${AboutUzEndBg})`,
          mixBlendMode: "multiply",
        }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-black/16 mix-blend-multiply" />

      {/* Content */}
      <div className="main-container">
        <div className="relative z-10 text-white text-center space-y-4 sm:space-y-6 max-w-[700px] mx-auto px-4">
          <h2 className="text-[24px] md:text-[40px] lg:text-[64px] leading-[130%] font-semibold">
            Discover Uzbekistan. <br /> Live the Experience
          </h2>
          <p className="text-[16px] md:text-lg font-medium leading-[140%]">
            Whether you’re planning to study, travel, or explore history —
            Uzbekistan welcomes you with open arms.
          </p>
          <Button
            type="button"
            className="mt-4 sm:w-fit w-full px-6 py-3 text-lg font-semibold"
          >
            Apply now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUzEnd;
