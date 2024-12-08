
import Link from 'next/link';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => (
  <nav className="flex items-center justify-between px-6 py-4 bg-black text-white">
    {/* Logo */}
    <div className="text-2xl font-bold">
      <span className="text-orange-500">Food</span>tuck
    </div>

    {/* Navigation Links */}
    <ul className="hidden md:flex space-x-6 text-sm uppercase">
      {['Home', 'Menu', 'Blog', 'Pages', 'About', 'Shop', 'Contact'].map((item) => (
        <li key={item}>
          <Link href={`#${item.toLowerCase()}`} className="hover:text-orange-500">{item}</Link>
        </li>
      ))}
    </ul>

    {/* Search and Cart Icons */}
    <div className="flex items-center space-x-4">
      <div className="hidden md:flex items-center bg-transparent border border-orange-500 rounded-full px-4 py-2">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-sm placeholder-white"
        />
        <FaSearch className="text-orange-500 ml-2" />
      </div>
      <FaShoppingCart className="text-xl hover:text-orange-500 cursor-pointer" />
    </div>
  </nav>
);

export default Navbar;
