import { useState } from "react";
import { FaUser, FaBriefcase, FaEllipsisH, FaBars } from "react-icons/fa";

const navItems = [
  { icon: <FaUser />, href: "#about", label: "About" },
  { icon: <FaBriefcase />, href: "#experience", label: "Experience" },
  { icon: <FaEllipsisH />, href: "#others", label: "Others" },
];

const FloatingNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop - 右側垂直浮動選單 */}
      <div className="hidden md:flex fixed right-6 top-1/3 flex-col gap-4 z-50">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group relative flex items-center justify-end"
          >
            {/* 滑出文字 */}
            <span className="absolute right-14 opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-blue-600 font-extrabold text-sm whitespace-nowrap">
              {item.label}
            </span>

            {/* 圓形 Icon */}
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:bg-blue-500 hover:text-white transition duration-300 text-md">
              {item.icon}
            </div>
          </a>
        ))}
      </div>

      {/* Mobile - 右上角漢堡選單 */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:bg-blue-500 hover:text-white transition duration-300 text-xl"
        >
          <FaBars />
        </button>

        {/* 下拉展開選單 */}
        {menuOpen && (
          <div className="absolute top-14 right-0 bg-white rounded-lg shadow-lg py-2 w-40">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition"
              >
                <span className="mr-2 text-lg">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingNav;
