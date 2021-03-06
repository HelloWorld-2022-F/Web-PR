import useWindowDimensions from "../hooks/useWindowDimensions";

import BREAKPOINTS from "../Data/BREAKPOINTS";
import PAGES from "../Data/PAGES";
import styled from "styled-components";
import SITKMUTT_Tag from "../assets/images/SITKMUTT_Tag.png";
import { motion } from "framer-motion";

const Navbar = ({ pageOnScreen }) => {
  const { height, width } = useWindowDimensions();

  const toggleMobileNav = () => {
    const mobileNavbar = document.getElementById("mobileNav");
    const bars = document.querySelectorAll(".bar");
    const navBackground = document.getElementById("navBackground");

    mobileNavbar.classList.toggle("on");
    navBackground.classList.toggle("on");
    bars.forEach((bar) => {
      bar.classList.toggle("on");
    });
  };

  // const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  const MobileNavbar = () => {
    return (
      <MobileNav>
        <div
          id="mobileNav"
          className="-translate-y-full opacity-0  transition-all duration-500 ease-in-out w-full trans fixed top-0 left-0 rounded-b-3xl backdrop-blur-md bg-white/50  z-10 p-5 shadow-sm shadow-white/30"
        >
          <ul className="flex mt-6 mb-12 flex-col space-y-12 ">
            {PAGES.map((page, index) => {
              return (
                <li className="flex justify-center items-center" key={index}>
                  <button
                    onClick={() => {
                      window.fullpage_api.moveTo(index + 1);
                    }}
                    className={
                      (pageOnScreen == index ? "text-red-500" : "text-black") +
                      " hover:text-gray-500 text-xl font-sans w-2/3"
                    }
                  >
                    {page.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          className="flex flex-col fixed top-0 right-0  pt-3 pr-6 z-20 justify-center items-center"
          onClick={toggleMobileNav}
        >
          <NavBurger>
            <Bar id="bar1" className="bar" />
            <Bar id="bar2" className="bar" />
            <Bar id="bar3" className="bar" />
          </NavBurger>
        </button>
        <button
          onClick={toggleMobileNav}
          id="navBackground"
          className="bg-black w-full h-full absolute top-0 left-0 opacity-0 duration-500 ease-in-out hidden"
        />
      </MobileNav>
    );
  };

  const DesktopNavbar = () => {
    return (
      <nav
        id="desktop-nav"
        className="fixed top-0 duration-500 opacity-1 p-3 pr-5  right-0 items-start"
      >
        <div className="block">
          <ul className="flex mt-4 flex-row space-x-8 md:space-x-4 md:mt-3 md:text-xs md:font-medium">
            {PAGES.map((page, index) => {
              return (
                <li className="flex items-center" key={index}>
                  <button
                    onClick={() => {
                      window.fullpage_api.moveTo(index + 1);
                    }}
                    className={
                      (pageOnScreen == index ? "text-red-500" : "text-black") +
                      " hover:text-gray-500 md:hover:text-black text-xl font-sans"
                    }
                  >
                    {page.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay : 0.3 }}
      id="myMenu"
    >
      {width < BREAKPOINTS.mobile ? <MobileNavbar /> : <DesktopNavbar />}

      <SITTag
        href="https://www.sit.kmutt.ac.th/"
        target="blank"
        id="SITTag"
        className="w-72 h-20 md:w-56 md:h-16 sm:w-44 sm:h-12 rounded-b-3xl sm:rounded-b-xl  left-10 md:left-5 shadow-md "
      />
    </motion.div>
  );
};

const SITTag = styled.a`
  background-color: white;
  opacity: 1;
  position: fixed;
  top: 0;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: translateY(-0.25rem);
  }

  background-image: url(${SITKMUTT_Tag});
  background-size: contain;
  background-repeat: no-repeat;
`;

const Bar = styled.div`
  height: 0.25rem;
  width: 1.5rem;
  margin: 0.25rem 0;
  border-radius: 9999px;
  background-color: #303030;
  transition: all 0.1s ease-in-out;

  -webkit-transition: 0.1s;
  -moz-transition: 0.1s;
  -o-transition: 0.1s;
`;

const NavBurger = styled.div`
  #bar1.on {
    transform: translateY(0.5rem) rotate(45deg);
  }

  #bar2.on {
    opacity: 0;
  }

  #bar3.on {
    transform: translateY(-0.5rem) rotate(-45deg);
  }
`;

const MobileNav = styled.div`
  #mobileNav.on {
    transform: translateY(0%);
    opacity: 1;
  }

  #navBackground.on {
    display: block;
  }
`;

export default Navbar;
