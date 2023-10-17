import React, { useState } from "react";
import SideNav from "./SideNav";
import styles from "./AuthenticatedLayout.module.sass";

type Props = { children: React.ReactNode };

export default function AuthenticatedLayout({ children }: Props) {
  const [sideNavOpen, setSideNavOpen] = useState<boolean>(true);

  return (
    <div className={styles.main}>
      <SideNav sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} />

      <div className={styles.surface}>
        <main>{children}</main>
      </div>
    </div>
  );
}
