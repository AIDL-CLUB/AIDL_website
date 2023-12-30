import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [showEventsDropdown, setShowEventsDropdown] = useState(false);
  const [showCoreCommitteeDropdown, setShowCoreCommitteeDropdown] = useState(false);

  const links = [
    { id: 1, link: "HOME" },
    { id: 2, link: "ABOUT US" },
    { id: 3, link: "EVENTS", dropdown: true, subLinks: ["2022-23", "2023-24"] },
    { id: 4, link: "FAQ" },
    { id: 5, link: "CORE COMMITTEE", dropdown: true, subLinks: ["2022-23", "2023-24"] },
    { id: 6, link: "CONTACT US" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed" style={{ zIndex: "100" }}>
      <div>
        <h1 className="text-3xl ml-2">AIDL FCRIT</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link, dropdown, subLinks }) => (
          <li
            key={id}
            className="px-4 cursor-pointer uppercase font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {dropdown ? (
              <div
                onMouseEnter={() => {
                  if (id === 3) setShowEventsDropdown(true);
                  if (id === 5) setShowCoreCommitteeDropdown(true);
                }}
                onMouseLeave={() => {
                  setShowEventsDropdown(false);
                  setShowCoreCommitteeDropdown(false);
                }}
                className="relative"
              >
                <span>{link}</span>
                {id === 3 && showEventsDropdown && (
                  <ul className="absolute top-full left-0 bg-black text-white p-2">
                    {subLinks.map((subLink, index) => (
                      <li key={index} className="py-2">
                        <HashLink
                          onClick={() => setNav(!nav)}
                          to={`#${subLink}`}
                          smooth
                        >
                          {subLink}
                        </HashLink>
                      </li>
                    ))}
                  </ul>
                )}
                {id === 5 && showCoreCommitteeDropdown && (
                  <ul className="absolute top-full left-0 bg-black text-white p-2">
                    {subLinks.map((subLink, index) => (
                      <li key={index} className="py-2">
                        <HashLink
                          onClick={() => setNav(!nav)}
                          to={`#${subLink === "2022-23" ? "CoreComm" : "CoreComm23"}`} 
                          smooth
                        >
                          {subLink}
                        </HashLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <HashLink to={`#${link}`} smooth>
                {link}
              </HashLink>
            )}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, dropdown, subLinks }) => (
            <li key={id} className="px-4 cursor-pointer uppercase py-6 text-4xl">
              {dropdown ? (
                <div>
                  <span>{link}</span>
                  <ul className="mt-2">
                    {subLinks.map((subLink, index) => (
                      <li key={index}>
                        <HashLink
                          onClick={() => setNav(!nav)}
                          to={`#${subLink}`}
                          smooth
                        >
                          {subLink}
                        </HashLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <HashLink
                  onClick={() => setNav(!nav)}
                  to={`#${link}`}
                  smooth
                >
                  {link}
                </HashLink>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;