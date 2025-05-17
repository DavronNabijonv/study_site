import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
} from "@/assets";

const AboutUZGallery = () => {
  return (
    <section className="main-container py-10 space-y-6">
      <h3 className="text-[40px] leading-[140%] font-semibold text-[#151515]">
        Exclusive Photos around Uzbekistan
      </h3>

      {/* Mobile version (only visible on <lg) */}
      <div className="grid grid-cols-1 gap-4 lg:hidden">
        {[
          gallery1,
          gallery2,
          gallery3,
          gallery4,
          gallery5,
          gallery6,
          gallery7,
          gallery8,
        ].map((img, i) => (
          <div key={i} className="w-full overflow-hidden rounded-lg">
            <img
              src={img || "/placeholder.svg"}
              alt={`Gallery ${i + 1}`}
              className="w-full h-[220px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Desktop version (only visible on lg and up) */}
      <div className="hidden lg:grid grid-cols-4 grid-rows-3 gap-4">
        {/* div1 = grid-row-span-3 / left tall image */}
        <div className="col-span-1 row-span-2 overflow-hidden rounded-lg">
          <img
            src={gallery1 || "/placeholder.svg"}
            alt="Gallery 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* div2 = bottom left */}
        <div className="col-start-1 row-start-3 row-span-1 overflow-hidden rounded-lg">
          <img
            src={gallery2 || "/placeholder.svg"}
            alt="Gallery 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* div3 = top row middle-left */}
        <div className="col-start-2 row-start-1 overflow-hidden rounded-lg">
          <img
            src={gallery3 || "/placeholder.svg"}
            alt="Gallery 3"
            className="w-full h-full object-cover"
          />
        </div>

        {/* div4 = middle-left tall */}
        <div className="col-start-2 row-start-2 row-span-2 overflow-hidden rounded-lg">
          <img
            src={gallery4 || "/placeholder.svg"}
            alt="Gallery 4"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="row-span-3">
          {/* div5 = top right (upper half) */}
          <div className="col-start-3 row-start-1 mb-2 row-span-3 row-end-2 overflow-hidden rounded-lg">
            <img
              src={gallery5 || "/placeholder.svg"}
              alt="Gallery 5"
              className="w-full h-full object-cover"
            />
          </div>

          {/* div6 = middle right (lower half) */}
          <div className="col-start-3 row-start-2 row-end-3 mt-4 row-span-2 overflow-hidden rounded-lg">
            <img
              src={gallery6 || "/placeholder.svg"}
              alt="Gallery 6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* div7 = tall right side */}
        <div className="col-start-4 row-start-1 row-span-2 row-end-3 overflow-hidden rounded-lg">
          <img
            src={gallery7 || "/placeholder.svg"}
            alt="Gallery 7"
            className="w-full h-full object-cover"
          />
        </div>

        {/* div8 = bottom right */}
        <div className="col-start-4 row-start-3 row-end-4 overflow-hidden rounded-lg">
          <img
            src={gallery8 || "/placeholder.svg"}
            alt="Gallery 8"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUZGallery;
