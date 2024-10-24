import React, { useEffect, useRef, useState } from "react";

const DropDown = ({ options, reset, defaultOption, onclick }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(defaultOption);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef?.current?.contains(e?.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, [defaultOption]);

  function handleItemClick(option) {
    setSelected(option);
    setIsActive(false);
    onclick(option);
  }
  return (
    <div className="relative" ref={menuRef}>
      <button
        className="bg-[#FABA1F] p-2 rounded-3xl min-w-[80px] text-white"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        {selected || "Status"}
      </button>
      <div
        className={`left-3 absolute right-0 mt-2 w-[180px] rounded-md shadow-lg bg-white dark:bg-[#1F2937] ring-1 ring-black ring-opacity-5 focus:outline-none z-10 ${
          isActive ? "block" : "hidden"
        } dropdown-menu`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {options?.map((option, index) => (
          <div
            key={index}
            onClick={() => handleItemClick(option)}
            className=" block px-4 py-2 text-sm cursor-pointer text-black dark:text-white hover:bg-[#cdcecf] dark:hover:bg-[#080d13] hover:text-black"
            role="menuitem"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
