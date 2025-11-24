import { NavLink } from "react-router-dom";
import { useFetchTopicsQuery } from "../store/apis/blog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";

const getActiveClass = ({ isActive }) => (isActive ? "text-purple-500" : "hover:text-white hover:underline");

export default function Header() {
  const { data, isLoading } = useFetchTopicsQuery();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  const redirect = (p) => {
    toggleMenu();
    navigate("/learn?id=" + btoa(p.id));
  };

  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-center items-center h-full">
        <div className="w-12 h-12 rounded-full bg-slate-300 animate-spin" /> loading...
      </div>
    );
  } else if (data) {
    content = data.map((n, i) => (
      <li key={i} onClick={() => redirect(n)} className="hover:text-gray-300 cursor-pointer">
        {n.name}
      </li>
    ));
  }

  return (
    <div className="w-full fixed bg-gray-800 border-b border-double border-purple-500 z-50">
      <div className="container mx-auto">
        <div className="w-full py-5 px-6 flex justify-between items-center">
          <div className="text-white text-h1 flex gap-4 items-center">
            <NavLink to="/" className="hover:text-white">YUVARAJ</NavLink>
            <ul>
                <li className="relative des:hidden">
                    <div className="flex items-center gap-2 cursor-pointer bg-purple-500 px-4 py-1 rounded-lg text-2r" onClick={toggleMenu}>
                    Learn {!isOpen ? <FaChevronDown size={15} /> : <FaChevronUp size={15} />}
                    </div>
                    {isOpen && (
                    <ul className="absolute left-0 mt-2 bg-slate-500 border-2 border-slate-200 p-2 text-2r rounded-lg">{content}</ul>
                    )}
                </li>
            </ul>
             
          </div>

          {/* Desktop Navbar */}
          <nav className="text-white text-s1 mob:hidden md:flex">
            <ul className="flex gap-8 text-slate-300 cursor-pointer">
              <li><NavLink to="/" className={getActiveClass}><span className="text-purple-500">#</span> Home</NavLink></li>
              <li><NavLink to="/portfolio" className={getActiveClass}><span className="text-purple-500">#</span> Portfolio</NavLink></li>
              <li><NavLink to="/about" className={getActiveClass}><span className="text-purple-500">#</span> About Me</NavLink></li>
              <li className="relative">
                <div className="flex items-center gap-2 cursor-pointer bg-purple-500 px-4 py-1 rounded-lg" onClick={toggleMenu}>
                  Learn {!isOpen ? <FaChevronDown size={15} /> : <FaChevronUp size={15} />}
                </div>
                {isOpen && (
                  <ul className="absolute left-0 mt-2 bg-slate-500 border-2 border-slate-200 p-2 rounded-lg">{content}</ul>
                )}
              </li>
              <li><NavLink to="/medium" className={getActiveClass}><span className="text-purple-500">#</span> Medium Blogs</NavLink></li>
              <li><NavLink to="/stackblitz" className={getActiveClass}><span className="text-purple-500">#</span> Stackblitz Code</NavLink></li>
              <li><NavLink to="/connect" className={getActiveClass}><span className="text-purple-500">#</span> Connect Me</NavLink></li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="text-white des:hidden" onClick={toggleMobileMenu}>
            {!isMobileOpen ? <FaBars size={24} /> : <FaTimes size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navbar Popup */}
      {isMobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-white py-4 px-6 md:hidden">
          <ul className="flex flex-col gap-4">
            <li><NavLink to="/" className={getActiveClass} onClick={toggleMobileMenu}>Home</NavLink></li>
            <li><NavLink to="/portfolio" className={getActiveClass} onClick={toggleMobileMenu}>Portfolio</NavLink></li>
            <li><NavLink to="/about" className={getActiveClass} onClick={toggleMobileMenu}>About Me</NavLink></li>
            {/* <li className="relative">
              <div className="flex items-center gap-2 cursor-pointer bg-purple-500 px-4 py-1 rounded-lg" onClick={toggleMenu}>
                Learn {!isOpen ? <FaChevronDown size={15} /> : <FaChevronUp size={15} />}
              </div>
              {isOpen && (
                <ul className="bg-slate-500 border-2 border-slate-200 p-2 rounded-lg">{content}</ul>
              )}
            </li> */}
            <li><NavLink to="/medium" className={getActiveClass} onClick={toggleMobileMenu}>Medium Blogs</NavLink></li>
            <li><NavLink to="/stackblitz" className={getActiveClass} onClick={toggleMobileMenu}>Stackblitz Code</NavLink></li>
            <li><NavLink to="/connect" className={getActiveClass} onClick={toggleMobileMenu}>Connect Me</NavLink></li>
          </ul>
        </div>
      )}
    </div>
  );
}
