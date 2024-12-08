const MenuSection = () => {
    const menuItems = [
      { name: "Pasta", image: "/images/menu1.png" }, // Corrected path
      { name: "Burger", image: "/images/menu2.png" },
      { name: "Pizza", image: "/images/menu3.png" },
      { name: "Salad", image: "/images/menu4.png" },
    ];
  
    return (
      <section id="menu" className="p-10 bg-black">
        <h3 className="text-4xl md:text-5xl font-helvetica font-extrabold mb-2 text-left underline decoration-transparent decoration-skip-ink text-white">
          <span className="text-orange-500">Ch</span>oose Food Iteam 
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="rounded-lg w-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default MenuSection;
  