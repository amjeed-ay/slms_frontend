import React, { useState } from "react";
import SideNav from "./SideNav";
import styles from "./AuthenticatedLayout.module.sass";

type Props = { children: React.ReactNode };

export default function AuthenticatedLayout({ children }: Props) {
  const [sideNavOpen, setSideNavOpen] = useState<boolean>(true);

  return (
    <div className={styles.main}>
      <SideNav sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} />
      {/* <div className=" relative z-50 -left-4 top-14">
        <button
          onClick={() => setSideNavOpen(!sideNavOpen)}
          className={styles.hide_topics_button}
        >
          <Icon name={sideNavOpen ? "arrow-left" : "arrow-right"} size={16} />
        </button>
      </div> */}
      <div className={styles.surface}>
        {/* <Header
              auth={auth}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            /> */}
        <main>{children}</main>
      </div>
    </div>
  );
}
