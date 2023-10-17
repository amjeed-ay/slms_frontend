import React from "react";
import Head from "next/head";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="w-full flex h-screen justify-center overflow-y-auto  content-start bg-gradient-to-r from-gray-200 to-gray-300 ">
        <div className="flex w-full sm:max-w-md h-screen sm:h-fit  pb-5 sm:rounded-md rounded-none shadow-sm bg-opacity-95  bg-white items-center content-center self-center">
          {children}
        </div>
      </div>
    </>
  );
}
