import React from "react";
import {
  Search,
  ShoppingCart,
  House,
  Sparkles,
  BadgeCheck,
  BookOpen,
  Headphones,
  Smartphone,
  Tag,
  ChevronDown,
} from "lucide-react";

export const Navbar = () => {
  return (
    <>
      {/* TOP NAVBAR */}
      <header className="w-full border-b border-gray-200 bg-[#f6f5f2]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5 flex flex-col lg:flex-row items-center justify-between gap-5">
          
          {/* LOGO */}
          <div className="w-full lg:w-auto flex justify-between items-center">
            <h1 className="text-4xl font-serif font-bold text-[#0f172a]">
              Bookie
            </h1>

            {/* MOBILE CART */}
            <button className="lg:hidden flex items-center gap-2 border border-gray-300 px-4 py-2 bg-white">
              <ShoppingCart size={20} />
              <span className="font-semibold">$35.19</span>
            </button>
          </div>

          {/* SEARCH BAR */}
          <div className="w-full lg:w-[460px] flex">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-5 py-3 bg-[#efede8] outline-none text-gray-700"
            />

            <button className="bg-[#f47c20] px-5 flex items-center justify-center text-white">
              <Search size={20} />
            </button>
          </div>

          {/* DESKTOP CART */}
          <button className="hidden lg:flex items-center gap-3 border border-gray-400 px-6 py-4 bg-white hover:bg-gray-100 duration-300">
            <ShoppingCart size={22} />
            <span className="font-semibold text-lg">$35.19</span>
          </button>
        </div>

        {/* MENU */}
        <nav className="border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            
            <ul className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-start gap-8 py-5 text-[17px] font-medium text-gray-800">
              
              <li className="flex items-center gap-2 text-[#f47c20] cursor-pointer">
                <House size={18} />
                Home
              </li>

              <li className="flex items-center gap-2 cursor-pointer hover:text-[#f47c20] duration-300">
                <Sparkles size={18} />
                New releases
              </li>

              <li className="flex items-center gap-2 cursor-pointer hover:text-[#f47c20] duration-300">
                <BadgeCheck size={18} />
                Recommendations
              </li>

              <li className="flex items-center gap-2 cursor-pointer hover:text-[#f47c20] duration-300">
                <BookOpen size={18} />
                Books
                <ChevronDown size={16} />
              </li>

              <li className="flex items-center gap-2 cursor-pointer hover:text-[#f47c20] duration-300">
                <Headphones size={18} />
                Audiobook
                <ChevronDown size={16} />
              </li>

              <li className="flex items-center gap-2 cursor-pointer hover:text-[#f47c20] duration-300">
                <Smartphone size={18} />
                Ebook
                <ChevronDown size={16} />
              </li>

              <li className="flex items-center gap-2 text-red-500 cursor-pointer hover:text-red-600 duration-300">
                <Tag size={18} />
                SALE
              </li>

            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;