import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";
import logo from "../assets/images/brand/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    { name: "Home", path: "/home" },
    { name: "Über Uns ", path: "/about" },
    { name: "Dienstleistungen", path: "/services" },
    { name: "Kontaktieren", path: "/contact" },
  ];
  const [active, setActive] = useState(0);
  useEffect(() => {
    links.forEach((link, index) => {
      if (window.location.pathname === link.path) {
        setActive(index);
      }
    });
  });
  const handleActive = (index) => {
    setActive(index);
  };

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    if (window.innerWidth < 768) {
      document.body.classList.toggle("overflow-hidden");
    }
  };

  return (
    <nav
      id="navigation"
      aria-label="Navigation Links"
      className="2xl:px-[10vw] xl:px-[5vw] p-8 flex justify-between items-center"
    >
      <a href="/" className="md:w-48 w-32">
        <img src={logo} alt="MZ-Clean Logo" />
      </a>
      <ul
        className={`md:relative md:text-base text-xl absolute md:w-auto md:h-auto w-full h-full bg-white left-0 top-0 flex md:flex-row flex-col gap-8 md:p-0 px-8 py-12 z-[999] font-medium font-header md:opacity-100 md:visible transition-all ${
          isNavbarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {links.map((link, index) => (
          <li
            key={index}
            className={`${
              active === index ? "text-teal" : "text-gray-500"
            } hover:text-teal transition duration-300`}
            onClick={() => handleActive(index)}
          >
            <Link to={link.path} onClick={toggleNavbar}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <button
        id="navToggler"
        type="button"
        onClick={toggleNavbar}
        className="z-[999] md:hidden block"
      >
        <CiMenuFries className="text-3xl" />
      </button>
    </nav>
  );
}

export default Navbar;
