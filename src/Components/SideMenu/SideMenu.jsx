import { IconBuildingBank, IconFingerprint, IconHome, IconId, IconNotebook, IconReportAnalytics, IconUser, IconUserBolt, IconUsersGroup } from "@tabler/icons-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  const [openSubMenu, setOpenSubMenu] = useState(false)

  const menuItems = [
    {
      path: "/dashboard",
      icon: <IconHome />,
      text: "Dashboard",
    },
    {
      path:"/user",
      icon: <IconUser />,
      text: "User Details",
    },
    {
      path: "/bank-account",
      icon: <IconBuildingBank />,
      text: "Users Bank A/C",
    },
    {
      path: "/access-manage",
      icon: <IconFingerprint />,
      text: "Access manage",
    },
    {
      path: "/user-notes",
      icon: <IconNotebook />,
      text: "User Notes",
    },
    {
      path: "/user-analysis",
      icon: <IconReportAnalytics />,
      text: "User Analysis",
    },
    {
      path: "/group-create",
      icon: <IconUsersGroup />,
      text: "Group Create & manage",
    },
    {
      path: "/vip-user",
      icon: <IconUserBolt />,
      text: "Vip User",
    },
    {
      path: "/unique-id-search",
      icon: <IconId />,
      text: "Unique ID search",
    },
  ];

  const handleMenuClick = (menuItem) => {
    if (menuItem.subMenu) {
      setOpenSubMenu(!openSubMenu);
    }
  };
  
  return (
    <nav className="flex flex-col gap-[6px] sm:gap-[6px] md:gap-[6px]">
      {menuItems?.map((menuItem, index) => (
        <div key={index}>
          <NavLink
            to={menuItem.path}
            // target={menuItem.text === "Blogs" && "_blank"}
            className={({ isActive }) =>
              isActive
                ? 'relative before:content-[""] before:absolute before:left-0 before:h-full before:w-[10px] before:bg-orange-400 bg-[#FABA1F] text-white px-4 py-2 flex items-center'
                : "relative bg-transparent px-4 py-2 flex items-center"
            }
            onClick={() => handleMenuClick(menuItem)}
          >
            <div className="flex items-center gap-2">
              {menuItem?.icon}
              {menuItem?.text}
            </div>
          </NavLink>
        </div>
      ))}
      {/* <Logout /> */}
    </nav>
  );
};

export default SideMenu;
