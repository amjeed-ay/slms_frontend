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
    <li className="mt-2">
      <button
        onClick={onClick}
        className={cn(styles.btnlink, {
          [styles.active]: active,
        })}
      >
        <span
          className={cn(styles.topic_link, {
            [styles.active]: active,
          })}
        >
          {item.id}
        </span>
        <span
          className={`text-base truncate w-44 font-normal ${
            !sideNavOpen && "hidden"
          }  ${active && "font-semibold"}`}
        >
          {item.title}
        </span>
      </button>
    </li>
  );
};

export default MenuLink;
