import { Menu, X } from "lucide-react";
import { useState } from "react";

import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 bg-yellow-50 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-light">Oxilo</span>
          </div>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <ul className="hidden lg:flex ml-14 space-x-7">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="bg-gradient-to-r text-white bg-blue-600 py-2 px-3 rounded-md"
            >
              Contact Us
            </a>
          </div>
          <div className="lg:hidden flex justify-center space-x-5 items-center">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
            <a
              href="#"
              className="bg-gradient-to-r text-white bg-blue-600 py-2 px-3 rounded-md"
            >
              Contact Us
            </a>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 text-white bg-neutral-900 w-full p-12 flex flex-col lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="py-4 mb-3 font-semibold hover:bg-slate-400"
                >
                  <a href={item.href}>{item.label}</a>
                  {/* <hr className="border-neutral-800  mt-3" /> */}
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                className="py-2 px-3 text-white bg-blue-600 rounded-md bg-gradient-to-r"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
