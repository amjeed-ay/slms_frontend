import cn from "classnames";
import styles from "./MenuLink.module.sass";

type MenuLinkProp = {
  active: boolean;
  item: any;
  sideNavOpen: boolean;
  onClick: any;
};

const MenuLink = ({
  active = false,
  item,
  onClick,
  sideNavOpen,
}: MenuLinkProp) => {
  return (
    <li className="mt-2 w-full">
      <button
        onClick={onClick}
        className={cn(styles.btnlink, {
          [styles.active]: active,
        })}
      >
        <span
          className={`text-base w-full rounded-md flex p-4 hover:bg-gray-300 truncate font-normal ${
            !sideNavOpen && "hidden"
          }  ${active && "font-semibold bg-gray-300"}`}
        >
          {item.title}
        </span>
      </button>
    </li>
  );
};

export default MenuLink;
