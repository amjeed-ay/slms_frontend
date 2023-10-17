"use client";
import styles from "./Index.module.sass";
import GuestLayout from "@/partials/GuestLayout";
import classNames from "classnames";
import Link from "next/link";

export default function Home() {
  return (
    <GuestLayout>
      <div className="w-full flex-col p-10 items-center flex justify-center">
        <h1 className="font-semibold mb-10 text-3xl">Welcome to Testmate</h1>

        <Link href="/signup">
          <button
            className={classNames("button-stroke", styles.button)}
            type="submit"
          >
            Get Started
          </button>
        </Link>
      </div>
    </GuestLayout>
  );
}
