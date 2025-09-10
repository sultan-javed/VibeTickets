import { useState } from "react";
import Input from "./Input";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-3 sm:px-6 py-3 flex flex-wrap items-center justify-between  gap-3 sm:gap-6 border-b rounded-b-4xl border-black/20 bg-white/70 backdrop-blur-md sticky top-0 z-20">
      {/* Logo + Tagline */}
      <div className="flex items-center gap-3 text-center sm:text-left">
        
        <Link to="/">
        <h1 className="text-2xl sm:text-4xl px-0 sm:px-6 font-logo text-black font-thin sm:border-r-2 sm:border-black/20">
          VibeTickets
        </h1>
        </Link>
        <p className="text-sm sm:text-lg font-body text-black">
          Catch the vibe - Book your seat
        </p>
        
      </div>

      {/* Desktop Search */}
      <div className="hidden sm:flex w-full sm:w-auto justify-center sm:justify-end">
        <Input />
      </div>

      {/* Mobile Hamburger */}
      <button
        className="sm:hidden text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <img src="/icons/close.png" alt="close" className="w-6 h-6" />
        ) : (
          <img src="/icons/search.png" alt="search" className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="w-full mt-2 sm:hidden">
          <Input />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
