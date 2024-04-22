import React, { useState } from "react";
import { NavLink} from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () =>{
    setIsOpen(false);
  
  }
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap py-2 my-2 px-3 mx-3">
        <NavLink to={"/"}>
          <img
            src="/images/LogoRR.png"
            alt="logo"
            className="w-10 sm:w-12 md:w-14 lg:w-18 xl:w-22"
          />
        </NavLink>

        <div onClick={toggleMenu} className="lg:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-oscuro"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </div>

        <div
          className={`w-full ${
            isOpen ? "" : "hidden"
          } lg:flex lg:items-center lg:w-auto`}
        >
          <div className="items-center lg:flex-grow">
            <NavLink
              to={"/"}
              onClick={closeMenu}
              className="block font-MiFuente mt-4 lg:inline-block lg:mt-4 text-oscuro border-b-4 border-transparent hover:border-rojo m-4 text-lg items-center"
            >
              Inicio
            </NavLink>

            <NavLink
              to={"/proyectos"}
              onClick={closeMenu}
              className="block font-MiFuente mt-4 lg:inline-block lg:mt-4 text-oscuro border-b-4 border-transparent hover:border-rojo  m-4 text-lg items-center"
            >
              Proyectos
            </NavLink>

            <NavLink
              to={"/contacto"}
              onClick={closeMenu}
              className="block font-MiFuente mt-4 lg:inline-block lg:mt-4 text-oscuro border-b-4 border-transparent hover:border-rojo  m-4 mr-0 text-lg items-center"
            >
              Contacto
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
