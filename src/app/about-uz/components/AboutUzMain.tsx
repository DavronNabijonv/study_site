import { AboutMain1, AboutMain2, AboutMain3 } from "@/assets";

const AboutUzMain = () => {
  return (
    <section className="main-container py-10">
      {/* Title */}
      <h2 className="text-[24px] md:text-[32px] lg:text-[40px] leading-[140%] font-semibold text-[#151515] max-w-[814px] mb-8">
        Uzbekistan: Cradle of Knowledge and Enlightenment
      </h2>

      {/* Content Box */}
      <div className="w-full bg-[#F8F8F5] rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col md:flex-row gap-8">
        {/* Left: Text */}
        <div className="flex-1 text-[#151515] space-y-4">
          <h3 className="text-[16px] md:text-[20px] lg:text-[24px] font-semibold leading-[140%]">
            About Uzbekistan
          </h3>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[160%] text-[#606060] max-w-[640px]">
            Uzbekistan is the beating heart of Central Asia — a land where every
            mosaic tells a story, and hospitality lives in the soul of its
            people. From the minarets of Khiva to the regal Registan in
            Samarkand, it offers not only beauty but deep knowledge. Here, Ulugh
            Beg mapped the stars, Avicenna wrote of medicine. Science was born,
            flourished, and inspired. The Silk Road didn’t just carry goods — it
            carried wisdom. Let your steps follow its legacy through this land
            of timeless thought.
          </p>
        </div>

        {/* Right: Images */}
        <div className="flex flex-col md:flex-row gap-4 md:w-[50%]">
          {/* Large image (top on mobile, left on tablet) */}
          <div className="w-full md:w-1/2 h-[220px] sm:h-[300px] md:h-full overflow-hidden rounded-lg">
            <img
              src={AboutMain1}
              alt="About Uzbekistan 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Two stacked images */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="h-[140px] sm:h-[160px] md:h-[50%] overflow-hidden rounded-lg">
              <img
                src={AboutMain2}
                alt="About Uzbekistan 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[140px] sm:h-[160px] md:h-[50%] overflow-hidden rounded-lg">
              <img
                src={AboutMain3}
                alt="About Uzbekistan 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUzMain;
