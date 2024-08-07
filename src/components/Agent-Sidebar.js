"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useMemo } from "react";
import classNames from "classnames";
import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  UsersIcon,
  VideosIcon,
} from "../icons";

const menuItems = [
  { id: 1, label: "Home", icon: HomeIcon, link: "/" },
  { id: 2, label: "Manage Posts", icon: ArticleIcon, link: "/posts" },
  { id: 3, label: "Manage Users", icon: UsersIcon, link: "/users" },
  { id: 4, label: "Manage Tutorials", icon: VideosIcon, link: "/tutorials" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded  overflow-hidden whitespace-nowrap",
      {
        "bg-light-lighter": activeMenu?.id === menu.id,
      }
    );
  };

  return (
    <div className=" bg-gray-100 rounded-lg m-2 h-full">
      <div className="flex flex-col items-start  p-4">
        {menuItems.map(({ icon: Icon, ...menu }) => {
          const classes = getNavItemClasses(menu);
          return (
            <div key={menu.id} className={classes}>
              <Link className="flex py-3  items-center  " href={menu.link}>
                <div style={{ width: "2rem" }}>
                  <Icon />
                </div>
                {!toggleCollapse && (
                  <span
                    className={classNames(
                      "text-md font-medium text-text-light"
                    )}
                  >
                    {menu.label}
                  </span>
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
