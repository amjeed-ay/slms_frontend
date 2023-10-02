import React, { useRef } from "react";
import MenuLink from "./Components/MenuLinks";
import Icon from "@/components/Icon";
import styles from "./SideNav.module.sass";
import classNames from "classnames";

type SideNavProp = {
  sideNavOpen: boolean;
  setSideNavOpen: any;
};

function SideNav({ sideNavOpen, setSideNavOpen }: SideNavProp) {
  const sidebar = useRef(null);

  return (
    <div
      id="sidebar"
      ref={sidebar}
      className={classNames(styles.sidenav, {
        [styles.open]: sideNavOpen,
      })}
    >
      <div className="text-lg pl-5 mt-[70px] text-[#3E3E55] font-semibold py-1 mr-2 flex w-full items-center ">
        <span className="mr-2">
          <Icon
            name="question-mark"
            size="26"
            viewBox="0 0 26 25"
            iconType="svg"
            fill="none"
          />
        </span>{" "}
        {sideNavOpen && "Questions"}
      </div>

      {/* Links */}
      <ul className="mt-1 pl-5">
        {menuLinks.map((item: any, i) => {
          return (
            <MenuLink
              sideNavOpen={sideNavOpen}
              onClick={() => console.log("ok")}
              item={item}
              key={i}
              active={true}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default SideNav;

const menuLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
  },
];
