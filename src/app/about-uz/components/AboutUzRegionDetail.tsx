import {
  samarqand1,
  samarqand2,
  samarqand3,
  bukhara1,
  bukhara2,
  bukhara3,
  khorezm1,
  khorezm2,
  khorezm3,
} from "@/assets";

interface RegionData {
  title: string;
  description: string;
  images: string[];
  reverse?: boolean;
  withBackground?: boolean; // yangi maydon
}

const data: RegionData[] = [
  {
    title: "About Samarkand",
    description:
      "Samarkand is one of the oldest cities in the world, located in southeastern Uzbekistan. A key stop on the ancient Silk Road, it became a major center of trade, science, and culture, especially under the rule of Timur in the 14th century. The city is renowned for its stunning Islamic architecture, including Registan Square, Shah-i-Zinda, and the Bibi-Khanym Mosque. It also boasts the Ulugh Beg Observatory, a symbol of medieval scientific advancement. Today, Samarkand is a UNESCO World Heritage Site and a cultural treasure of Central Asia.",
    images: [samarqand1, samarqand2, samarqand3],
    withBackground: true,
  },
  {
    title: "About Bukhara",
    description:
      "Bukhara is a historic city in central Uzbekistan, renowned for its well-preserved medieval architecture and deep cultural heritage. Once a major center on the Silk Road, it flourished as a hub of Islamic learning, trade, and craftsmanship. The city is home to over 140 architectural monuments, including the iconic Kalyan Minaret, Ark Fortress, and Lyab-i Hauz complex. Bukhara’s old city retains its ancient charm, with winding alleys and bustling bazaars. Today, it stands as a UNESCO World Heritage Site and a symbol of Central Asian history.",
    images: [bukhara1, bukhara2, bukhara3],
    reverse: true,
    withBackground: false, // bg bo'lmasin
  },
  {
    title: "About Khorezm",
    description:
      "Khorezm, located in northwestern Uzbekistan, is an ancient region with a rich cultural and historical legacy. Once the center of the powerful Khorezmian Empire, it played a key role in the development of science, architecture, and trade along the Silk Road. Its capital, Khiva, is famous for the Itchan Kala, a UNESCO World Heritage Site filled with mosques, madrasahs, and palaces. Khorezm is also known for its unique traditions, music, and handicrafts, preserving a distinct identity that reflects centuries of Central Asian civilization.",
    images: [khorezm1, khorezm2, khorezm3],
    withBackground: true,
  },
];

const AboutUZRegionDetail = () => {
  return (
    <div className="py-20">
      {data.map((region, idx) => (
        <div
          key={idx}
          className={`w-full ${
            region.withBackground ? "bg-[#F8F8F5]" : ""
          } px-4 sm:px-6 md:px-12 lg:px-[120px] py-16 space-y-8`}
        >
          <div
            className={`flex flex-col md:flex-row ${
              region.reverse ? "md:flex-row-reverse" : ""
            } items-start gap-6 md:gap-8 lg:gap-10`}
          > 
            {/* Text Section */}
            <div className="flex-1 space-y-4">
              <h3 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-semibold text-[#151515] leading-[140%]">
                {region.title}
              </h3>
              <p className="text-[14px] sm:text-[15px] md:text-[18px] lg:text-[22px] leading-[160%] text-[#606060]">
                {region.description}
              </p>
            </div>

            {/* Images Section */}
            <div className="w-full md:flex md:w-auto gap-4 md:gap-6">
              <div className="flex flex-col md:flex-row w-full gap-4 md:gap-6">
                {/* Big image */}
                <img
                  src={region.images[0]}
                  alt={`${region.title} 1`}
                  className="w-full md:w-[300px] lg:w-[360px] h-[240px] sm:h-[280px] md:h-[480px] lg:h-[542px] object-cover rounded-lg"
                />

                {/* Small stacked images */}
                <div className="flex flex-row md:flex-col gap-4 md:gap-6 w-full md:w-[200px] lg:w-[240px]">
                  <img
                    src={region.images[1]}
                    alt={`${region.title} 2`}
                    className="w-[calc(50%-8px)] md:w-full h-[100px] sm:h-[120px] md:h-[200px] lg:h-[260px] object-cover rounded-lg"
                  />
                  <img
                    src={region.images[2]}
                    alt={`${region.title} 3`}
                    className="w-[calc(50%-8px)] md:w-full h-[100px] sm:h-[120px] md:h-[200px] lg:h-[260px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default AboutUZRegionDetail;
