import { Link } from "react-scroll";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scroll]);
  return (
    <header className={`header ${scroll > 40 ? "nav-scroll" : null}`}>
      <Link
        to="home"
        className="logo"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        linia’s
      </Link>
      <NavMenu />
    </header>
  );
};

export default Navbar;
