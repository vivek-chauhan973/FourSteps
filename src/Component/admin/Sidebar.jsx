import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
// import dynamic from 'next/dynamic';
// import Cookies from 'js-cookie';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faSliders,
  faSort,
  faBook,
  faCar,
  faBlog,
  faHotel,
  faCartShopping,
  faFile,
  faGear,
  faRightFromBracket,
  faTag,
  faLayerGroup,
  faUsers,
  faHome,
  faGlobe,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import { IoIosArrowDown } from "react-icons/io";
const Sidebar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(null);
  const [selectedSubMenu, setSelectedSubMenu] = useState(null);

  const sidebarTabs = useMemo(
    () => [
      {
        label: "Global",
        icon: () => <FontAwesomeIcon icon={faChartSimple} />,
        href: "/admin",
      },
      {
        label: "Webinar ",
        icon: () => <FontAwesomeIcon icon={faSliders} />,
        subMenu: [
          {
            label: "Webinar Master",
            // change url according to the bizare expendition
            href: "/admin/webinar/master-webinar",
          },
          {
            label: "Create Webinar",
            href: "/admin/webinar/create-webinar",
          },
          {
            label: "Webinar List",
            href: "/admin/webinar/list-webinar",
          },
        ],
      },
      {
        label: "Home Page",
        icon: () => <FontAwesomeIcon icon={faHome} />,

        subMenu: [
          { label: "Banner", href: "#" },
          { label: "Other Management", href: "/admin/home/manage" },
        ],
      },
      {
        label: "Our Teams",
        icon: () => <FontAwesomeIcon icon={faUsers} />,
        subMenu: [
          { label: "Add Team here", href: "/admin/teams/team" },
          { label: "List of team", href: "/admin/teams/listofTeam" },
        ],
      },
      {
        label: "package master",
        icon: () => <FontAwesomeIcon icon={faLayerGroup} />,
        subMenu: [
          { label: "Package Master", href: "/admin/package/category" },
          { label: "Add Itinerary", href: "/admin/package/itinerary" },
          {
            label: "Itinerary List",
            href: "/admin/package/itinerary-detail-list",
          },
          { label: "Promo List", href: "/admin/package/itinerary-promo-list" },
          {
            label: "Promo Management",
            href: "/admin/package/promo-management",
          },
        ],
      },
      {
        label: "Testimonial",
        icon: () => <FontAwesomeIcon icon={faComment} />,
        subMenu: [
          {
            label: "Add Testimonial Here",
            href: "/admin/testimonial/testimonial",
          },
          {
            label: "List Of Testimonial",
            href: "/admin/testimonial/list-testimonial",
          },
          {
            label: "Testimonial Bg Banner",
            href: "/admin/testimonial/bg-banner",
          },
        ],
      },
      {
        label: "ABC..",
        icon: () => <FontAwesomeIcon icon={faHotel} />,
        subMenu: [
          { label: "Hotel Master", href: "#" },
          { label: "Packages", href: "/admin/hotel/packages-list" },
          { label: "Hotel Promo Management", href: "/admin/hotel/management" },
        ],
      },
      {
        label: "ABC...",
        icon: () => <FontAwesomeIcon icon={faBlog} />,
        subMenu: [
          { label: "Blog Master", href: "/admin/blog/category" },
          { label: "All Post", href: "/admin/blog/all-post" },
          { label: "Create", href: "/admin/blog/post" },
          { label: "Blog Promo Management", href: "/admin/blog/management" },
        ],
      },
      {
        label: "ABC.....",
        icon: () => <FontAwesomeIcon icon={faCartShopping} />,
        subMenu: [
          { label: "Package Order", href: "/admin/manage-order/package" },
          { label: "Hotel Order", href: "/admin/manage-order/hotel" },
          { label: "Car Order", href: "/admin/manage-order/car" },
        ],
      },
      {
        label: "ABC......",
        icon: () => <FontAwesomeIcon icon={faFile} />,
        href: "/admin/page-create",
      },
      {
        label: "Setting",
        icon: () => <FontAwesomeIcon icon={faGear} />,
        href: "/admin/setting-site",
      },
      {
        label: "Travel Guide",
        icon: () => <FontAwesomeIcon icon={faBook} />,
        href: "#",
      },
      {
        label: "Deals Page",
        icon: () => <FontAwesomeIcon icon={faTag} />,
        href: "#",
      },
    ],
    []
  );

  useEffect(() => {
    // Determine the active tab and submenu based on the current URL
    sidebarTabs.forEach((tab) => {
      if (tab.subMenu) {
        tab.subMenu.forEach((subMenu) => {
          if (router.pathname === subMenu.href) {
            setActiveTab(tab.label);
            setSelectedSubMenu(subMenu.label);
          }
        });
      } else if (router.pathname === tab.href) {
        setActiveTab(tab.label);
      }
    });
  }, [router.pathname, sidebarTabs]);

  const handleTabToggle = (tabName) => {
    setActiveTab((prevTab) => (prevTab === tabName ? null : tabName));
    console.log("Toggle Button clicked");
    setSelectedSubMenu(null);
  };

  const handleSubMenuClick = (subMenuLabel, parentLabel) => {
    setSelectedSubMenu(subMenuLabel);
    console.log("Submenu Button clicked");
    setActiveTab(parentLabel); // Ensure the parent tab remains open
  };

  const renderSubMenu = (items, parentLabel) => {
    return (
      <div
        className={`pl-4 my-2 py-2 text-para bg-slate-50 rounded-md text-black ${
          activeTab === parentLabel ? "block" : "hidden"
        }`}
      >
        {items.map((item, index) => (
          <a href={item.href} key={index}>
            <p
              onClick={() => handleSubMenuClick(item.label, parentLabel)}
              className={`text-[12px] cursor-pointer hover:underline hover:font-semibold hover:text-orange-500 ${
                selectedSubMenu === item.label ? "text-green-500 " : ""
              }`}
            >
              {item.label}
            </p>
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="text-[14px] text-[#f5f7fb] font-sans p-4 md:w-full">
      <div className="flex flex-col gap-5">
        <div className="sm:flex items-center block gap-4 py-4 border-b border-b-white">
          <Image
            className="w-16 border-2 border-primary rounded-full"
            src="/image/1.png"
            alt="User"
            width={320}
            height={400}
          />
          <span className="text-md tracking-wide leading-5 border-l mt-2 md:mt-0 md:py-1 pl-2 md:pl-4 font-bold bg-gradient-to-r from-primary via-amber-400 to-white inline-block text-transparent bg-clip-text">
            FourSteps
            <br />
          </span>
        </div>
        {sidebarTabs.map((tab, index) => (
          <div key={index} className="relative group">
            {tab.subMenu ? (
              <div
                onClick={() => handleTabToggle(tab.label)}
                className={`flex justify-between items-center cursor-pointer ${
                  activeTab === tab.label ? "text-green-500 font-semibold" : ""
                } group-hover:text-orange-500`}
              >
                <div className="flex items-center gap-2">
                  <tab.icon size={20} />{" "}
                  {/* Use the icon component correctly */}
                  <p className="cursor-pointer">{tab.label}</p>
                </div>
                <div>
                  <IoIosArrowDown
                    className={`transition-transform duration-200 ${
                      activeTab === tab.label ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
            ) : (
              <Link href={tab.href}>
                <div
                  className={`flex items-center gap-2 ${
                    activeTab === tab.label
                      ? "text-green-500 font-semibold"
                      : ""
                  } hover:text-orange-500`}
                >
                  <tab.icon size={20} />{" "}
                  {/* Use the icon component correctly */}
                  <p className="cursor-pointer">{tab.label}</p>
                </div>
              </Link>
            )}
            {tab.subMenu && (
              <div
                className={` left-0 w-full group-hover:block ${
                  activeTab === tab.label ? "block" : "hidden"
                }`}
              >
                {renderSubMenu(tab.subMenu, tab.label)}
              </div>
            )}
          </div>
        ))}
        <div
          className={`flex items-center gap-2 ${
            activeTab === "Logout" ? "text-green-500 font-semibold" : ""
          } hover:text-orange-500`}
          // onClick={handleLogout}
        >
          <FontAwesomeIcon icon={faRightFromBracket} size={20} />{" "}
          {/* Use the icon component correctly */}
          <p className="cursor-pointer">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
