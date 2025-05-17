import { AboutUzHeroImg } from "@/assets";

function AboutUzHero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[600px] md:min-h-[700px] lg:min-h-[812px]"
      style={{ backgroundImage: `url(${AboutUzHeroImg})` }}
    >
      {/* Overlay gradient for darkening the background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/40" />

      {/* Content */}
      <div className="relative z-10 main-container flex flex-col justify-center text-white py-[100px] md:py-[140px] space-y-4">
        <h2 className="font-bold text-[40px] md:text-[40px] lg:text-[64px] leading-[130%] text-left">
          Uzbekistan
        </h2>
        <p className="font-medium text-[16px] md:text-[16px] lg:text-[20px] leading-[150%] max-w-[320px] md:max-w-[500px] text-left">
          Land of Great Scholars and Crossroads of Cultures
        </p>
      </div>
    </section>
  );
}

export default AboutUzHero;
