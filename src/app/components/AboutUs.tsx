import Image from "next/image";

const AboutUs = () => (
  <section className="w-full h-full bg-black py-16">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 relative">
        {/* Image above the text */}
        <div className="absolute top-[-30px] left-0 w-[149px] h-[30px]">
          <Image
            src="/images/about-us.png" // Image path
            alt="Small decorative"
            width={149} // Reduced image width
            height={30} // Reduced image height
            className="object-cover"
          />
        </div>
        <br />
        {/* Text Content */}
        <h3 className="text-4xl md:text-5xl font-helvetica font-extrabold mb-2 text-left underline decoration-transparent decoration-skip-ink text-white">
          <span className="text-orange-500">We</span> Create the Best
        </h3>
        <h4 className="text-2xl font-helvetica font-semibold mb-6 text-white">Foody Product</h4>
        <p className="text-lg font-inter text-gray-300 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>
        <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-full text-lg hover:bg-orange-600">
          Read More
        </button>
      </div>

      {/* Right Side: Images */}
      <div className="md:w-1/2 mt-10 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {/* Top Image */}
          <img
            src="/images/about1.png"
            alt="Delicious food"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div>
          {/* Bottom Left Image */}
          <img
            src="/images/about2.png"
            alt="Delicious food"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div>
          {/* Bottom Right Image */}
          <img
            src="/images/about3.png"
            alt="Delicious food"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
