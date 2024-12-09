  import Image from "next/image";

  const Hero = () => (
    <section className="relative bg-black text-white py-24"> {/* Changed background color to black */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Side: Image and Text Content */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start relative">
          {/* Image Above Text */}
          <div className="absolute top-[-50px] left-0 w-[249px] h-[40px]">
            <Image
              src="/images/home1.png" // Image path
              alt="Small decorative"
              width={249} // Image width
              height={40} // Image height
              className="object-cover" // Ensure the image covers the box properly
            />
          </div>

          {/* Main Text */}
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mt-[0px]">
            <span className="text-orange-500">Th</span>e Art of Speed <br /> Food Quality
          </h1>

          {/* Paragraph Text */}
          <p className="mt-4 text-lg max-w-lg text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>

          <button className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-full text-lg hover:bg-orange-600">
              Read More
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image
            src="/images/hero3.png" // Image path
            alt="Delicious food"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );

  export default Hero;
