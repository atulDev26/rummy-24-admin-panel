import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideMenu from "../Components/SideMenu/SideMenu";

const Layout = ({ children }) => {
  
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const [open, setOpen] = useState(window.innerWidth > 1000);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let userData = JSON.parse(localStorage.getItem("userData"));

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };


  function handleCloseSideMenu() {
    setOpen(!open);
  }


  // useEffect(() => {
  //   const handleKeydown = (event) => {
  //     if (event.ctrlKey && event.shiftKey && event.key === 'q') {
  //       event.preventDefault();
  //       toggleTheme();
  //     }
  //   };

  //   window.addEventListener('keydown', handleKeydown);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeydown);
  //   };
  // }, [theme]);

  // <div className="bg-white dark:bg-gray-900 text-black dark:text-white">


  return (
    <div className="h-dvh w-dvw flex overflow-x-hidden relative bg-white dark:bg-gray-900 text-black dark:text-white">
      {open && window.innerWidth <= 1000 && (
        <div
          className="bg-black opacity-25 w-full h-full absolute z-10"
          onClick={() => {
            window.innerWidth <= 768 && setOpen(false);
          }}
        />
      )}
      <div
        className={`${
          open
            ? "bg-white dark:bg-gray-800 h-full w-[250px] fixed sm:relative z-20 ease-in duration-200 shadow-md"
            : "bg-white dark:bg-gray-800 h-full w-0 fixed sm:relative z-20 ease-in duration-200 shadow-md"
        }`}
      >
        <img
          src={process.env.PUBLIC_URL + "/Assets/Images/rummyLogo.png"}
          alt="logo"
          className="p-8 mx-auto py-3"
          style={{ width: "250px" }}
        />
        <div
          className={`${
            open
              ? "block h-[calc(100%-109.5px)] overflow-y-auto"
              : "hidden"
          }`}
        >
          <SideMenu/>
        </div>
      </div>

      <div className="flex-1 h-full px-4 pt-4 flex flex-col justify-between">
        <div className="h-[60px] p-4 bg-white dark:bg-gray-800 rounded-md shadow-md flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src={process.env.PUBLIC_URL + "/Assets/Images/menubaricon.svg"}
              alt="menu-Icon"
              className="cursor-pointer"
              onClick={handleCloseSideMenu}
            />
            <Link to={"/setting"}>
              <div className="flex items-center gap-3">
                {userData?.instituteLogo && (
                  <img
                    src={userData?.instituteLogo}
                    alt="Institute Logo"
                    className="w-[40px] h-[40px] rounded-full object-cover"
                  />
                )}
                {userData?.instituteName && (
                  <p className="font-medium">{userData?.instituteName}</p>
                )}
              </div>
            </Link>
          </div>
          {/* Right-side Menu Options */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full shadow"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        <div className="mt-4 h-full overflow-y-auto">
          <div id="container" className="relative">
            {children}
          </div>
        </div>

        <div className={!open ? "block" : "hidden"}>
          {/* Footer Component */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
