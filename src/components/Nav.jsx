import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
import { HashLink } from "react-router-hash-link";
import axios from "axios";

function Nav() {
  const Logokoperasi = "assets/img/Logo-Koperasi-png.png";
  const Logo = "assets/img/LOGO.png";
  const [data, setData] = useState([]);
  const [home, setHome] = useState([]);
  const [info, setInfo] = useState([]);
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getNavData = async () => {
    try {
      const result = await axios(
        "https://api.koperasi-gim.com/api/navigations",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return result.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNavData().then((e) => {
      setData(e);
      setHome(e.find((data) => data.id === 1));
      setInfo(e.find((data) => data.id === 2));
    });
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // once ready it returns the 'window.location' object

  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.hash ? location.hash : location.pathname);
  }, [location]);
  // ...
  return (
    <header className="sticky w-full top-0 z-50">
      <nav className="bg-[#04BFAD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full flex items-center justify-between h-16">
            <div className="w-full flex items-center justify-between">
              <Link
                to="/"
                className="flex gap-1 justify-between items-center"
                onClick={scrollTop}
              >
                <img
                  className="w-[4.3rem] h-[2.3rem] object-fill"
                  src={Logo}
                  alt=""
                />
                <img
                  className=" w-[2.2rem] h-[2.2rem] object-fill"
                  src={Logokoperasi}
                  alt=""
                />
                <h1 className="text-white drop-shadow-lg ss:text-[12px] md:w-40 sm:text-[14px] lg:text-[.9rem] text-center uppercase">
                  Koperasi Produsen <br />
                  Gala Indo Mandiri
                </h1>
              </Link>
              <div className="hidden md:block">
                <ul className="flex items-center gap-2 md:gap-1">
                  <li className="nav_item min-w-fit">
                    <NavLink
                      onClick={scrollTop}
                      to="/"
                      className={
                        "text-slate-50 capitalize hover:text-white hover:bg-[#048C73] px-3 py-2 rounded-xl lg:text-[.9rem] font-normal md:text-[12px] md:px-2 md:py-1 sm:text-[10px]" +
                        (url === `/` ? " is-active" : "")
                      }
                    >
                      {home?.name}
                    </NavLink>
                  </li>
                  <li className="nav_item min-w-fit">
                    <HashLink
                      smooth
                      to={info?.path}
                      className={
                        "text-slate-50 capitalize hover:text-white hover:bg-[#048C73] px-3 py-2 rounded-xl lg:text-[.9rem] font-normal md:text-[12px] md:px-2 md:py-1 sm:text-[10px]" +
                        (url === `#info` ? " is-active" : "")
                      }
                    >
                      {" "}
                      {info?.name}
                    </HashLink>
                  </li>
                  {data.slice(2, 7).map(({ id, name, path }, index) => {
                    return (
                      <li key={id} className="nav_item min-w-fit">
                        <NavLink
                          onClick={scrollTop}
                          to={path}
                          className={
                            "text-slate-50 capitalize hover:text-white hover:bg-[#048C73] px-3 py-2 rounded-xl lg:text-[.9rem] font-normal md:text-[12px] md:px-2 md:py-1 sm:text-[10px]" +
                            (url === `${path}` ? " is-active" : "")
                          }
                        >
                          {name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-[#048C73] inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800 "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        className={"fixed top-16 right-0 z-10"}
      >
        <div className="md:hidden" id="mobile-menu">
          <ul className="bg-gray-600 opacity-80 w-[250px] h-full flex flex-col text-jv-light px-6 py-4 z-[100] ml-auto overflow-y-auto rounded-l-xl items-center">
            <li className="nav_item  flex flex-wrap mt-4 min-w-fit">
              <NavLink
                onClick={() => {
                  setIsOpen(!isOpen);
                  scrollTop();
                }}
                to="/"
                className={
                  " hover:bg-[#048C73] capitalize drop-shadow-md  border-gray-700 border-opacity-70 text-white block px-3 py-2  sm:text-xs font-medium" +
                  "" +
                  (url === `/` ? " is-active" : "")
                }
              >
                {home?.name}
              </NavLink>
            </li>
            <li className="nav_item min-w-fit">
              <HashLink
                onClick={() => setIsOpen(!isOpen)}
                smooth
                to={info?.path}
                className={
                  "hover:bg-[#048C73] capitalize drop-shadow-md border-t border-gray-700 border-opacity-70 text-white block px-3 py-2  sm:text-xs font-medium" +
                  "" +
                  (url === `#info` ? " is-active" : "")
                }
              >
                {" "}
                {info?.name}
              </HashLink>
            </li>
            {data.slice(2, 7).map(({ id, name, path }, index) => {
              return (
                <li key={id} className="nav_item">
                  <Link
                    onClick={() => {
                      setIsOpen(!isOpen);
                      scrollTop();
                    }}
                    to={path}
                    className={
                      "hover:bg-[#048C73] capitalize drop-shadow-md border-t border-gray-700 border-opacity-70 text-white block px-3 py-2  sm:text-xs font-medium" +
                      (url === `${path}` ? " is-active" : "")
                    }
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Transition>
    </header>
  );
}

export default Nav;
