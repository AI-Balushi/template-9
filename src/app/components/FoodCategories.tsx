import React from "react";

const FoodCategories = () => {
  const leftImagePaths = [
    "images/ext1.png",
    "images/ext2.png",
    "images/ext3.png",
    "images/ext4.png",
    "images/ext5.png",
    "images/ext6.png",
  ];

  const rightImagePaths = [
    "images/Hamburger.png",
    "images/Cookie.png",
    "images/Wine.png",
  ];

  const rightImageLabels = [
    "Fast Food",
    "Lunch",
    "Dinner",
  ];

  const additionalImage = "images/choose-us.png"; // Path for the additional image

  return (
    <div className="food-categories-page bg-black min-h-screen px-6 py-12 flex flex-col md:flex-row gap-8">
      {/* Left Side Images */}
      <div className="left-images w-full md:w-1/2 grid grid-cols-2 gap-4">
        {/* First Row (2 Images) */}
        {leftImagePaths.slice(0, 2).map((path, index) => (
          <img
            key={index}
            src={path}
            alt={`Food category ${index + 1}`}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        ))}
        {/* Second Row (4 Images) */}
        <div className="col-span-2 grid grid-cols-4 gap-4">
          {leftImagePaths.slice(2, 6).map((path, index) => (
            <img
              key={index + 2}
              src={path}
              alt={`Food category ${index + 3}`}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          ))}
        </div>
      </div>

      {/* Right Side Content */}
      <div className="right-content w-full md:w-1/2 text-white flex flex-col justify-center relative">
        {/* Image Above Text with Reduced Size */}
        <div
          className="additional-image mb-6 w-[249px] h-[40px] bg-transparent rounded-md flex justify-center items-center overflow-hidden relative"
          style={{
            backgroundImage: `url(${additionalImage})`,
            backgroundSize: "cover", // Ensures the image covers the entire area without stretching
            backgroundPosition: "center", // Centers the image inside the box
            backgroundRepeat: "no-repeat", // Prevents image from repeating
          }}
        />

        {/* Title Text */}
        <h3 className="text-3xl md:text-4xl font-helvetica font-extrabold mb-4 text-left underline decoration-transparent decoration-skip-ink text-white mt-10">
          <span className="text-orange-500">Ex</span>tra Extraordinary Taste
          <br /> And Experienced
        </h3>

        {/* Paragraph Text */}
        <p className="text-lg font-inter text-gray-300 leading-relaxed mb-6">
          Explore our carefully curated food categories, featuring the finest
          selections. Our products are crafted to deliver a blend of taste and
          quality that is second to none. Discover the flavors that make every
          meal extraordinary.
        </p>

        {/* Right Section Images Inside Orange Boxes with Labels */}
        <div className="right-images grid grid-cols-3 gap-0 mt-6">
          {rightImagePaths.map((path, index) => (
            <div
              key={index}
              className="box w-20 h-20 bg-orange-500 rounded-md flex justify-center items-center overflow-hidden relative"
              style={{
                backgroundImage: `url(${path})`,
                backgroundSize: "contain", // Ensures the image fits inside without being cropped
                backgroundPosition: "center", // Centers the image inside the box
                backgroundRepeat: "no-repeat", // Prevents image from repeating
              }}
            >
              {/* Label Text Below Each Image */}
              <div className="absolute bottom-0 left-0 right-0 text-center bg-black bg-opacity-50 text-white py-1">
                {rightImageLabels[index]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCategories;
