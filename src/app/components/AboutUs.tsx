import Image from "next/image";

const AboutUs = () => (
  <section className="container mx-auto px-6 py-16 bg-black"> {/* Set background color to black */}
    <div className="flex flex-col md:flex-row items-center md:items-start">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2">
        {/* Image above the text */}
        <div className="absolute top-[-50px] left-0 w-[249px] h-[40px]">
          <Image
            src="/images/home1.png" // Image path
            alt="Small decorative"
            width={249} // Image width
            height={40} // Image height
            className="object-cover" // Ensure the image covers the box properly
          />
        </div>

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
      <div className="md:w-1/2 mt-10 md:mt-0 grid grid-cols-2 gap-4">
        <div className="col-span-2">
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
