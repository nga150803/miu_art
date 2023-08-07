import React, { useState } from "react";
import { Link } from "react-router-dom";
import navbarimage from "assets/img/layout/Navbar.png";
import IonIcon from '@reacticons/ionicons'
import DropDown from "../../../component/share/DropDown/DropDown";

// interface NavBarProps {
//   onOpenSidenav: () => void;
//   brandText: string;
// }

const NavBar =() => {
  // const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = useState<boolean>(false);

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <a
            className="text-base font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href=" "
          >
            Pages
            <span className="mx-1 text-base text-navy-700 hover:text-navy-700 dark:text-white">
              {" "}
              /{" "}
            </span>
          </a>
          <Link
            className="text-base font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            to="#"
          >
           Home
          </Link>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <Link
            to="#"
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
          >
            Home
          </Link>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
        <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <IonIcon name="search-outline" className="h-4 w-4 text-gray-400 dark:text-white" />
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="block h-full w-full rounded-full bg-lightPrimary text-base font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
          />
        </div>
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
          // onClick={onOpenSidenav}
        >
          <IonIcon name="notifications-outline" className="h-5 w-5" />
        </span>
   
        <div
          className="cursor-pointer text-gray-600"
          onClick={() => {
            if (darkmode) {
              document.body.classList.remove("dark");
              setDarkmode(false);
            } else {
              document.body.classList.add("dark");
              setDarkmode(true);
            }
          }}
        >
          {darkmode ? (
            <IonIcon name='sunny-outline' className="h-4 w-4 text-gray-600 dark:text-white" />
          ) : (
            <IonIcon name="moon-outline" className="h-4 w-4 text-gray-600 dark:text-white" />
          )}
        </div>
        {/* Profile & Dropdown */}
        <DropDown
          button={
            <img
              className="h-10 w-10 rounded-full border border-solid border-red-400"
              src='https://i.pinimg.com/originals/bd/ee/24/bdee248e53d027102223f17e4c025854.gif'
              alt="Elon Musk"
            />
          }
          children={
            <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <p className="text-base font-bold text-navy-700 dark:text-white">
                    👋 Hey, Admin
                  </p>{" "}
                </div>
              </div>
              <div className="h-px w-full bg-gray-200 dark:bg-white/20 " />

              <div className="flex flex-col p-4">
                <a
                  href=" "
                 className="text-base text-gray-800 dark:text-white hover:dark:text-white"
                >
                  Hồ sơ cá nhân
                </a>
                
                <a
                  href=" "
                  className="mt-3 text-base font-medium text-red-500 hover:text-red-500"
                >
                  <IonIcon name="log-out-outline"  className="mr-3 text-[1rem]"/>
                  Đăng xuất
                </a>
              </div>
            </div>
          }
          classNames={"py-2 top-8 -left-[180px] w-max"}
        />
      </div>
    </nav>
  );
};

export default NavBar;