"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="flex justify-between items-center max-w-[1440px] mx-auto sm:px-16 px-6 py-4">
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            src={"/logo.svg"}
            alt="CarWallah"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="bg-white text-primary-blue rounded-full min-w-[130px]"
          handleClick={() => {}}
        />
      </nav>
    </header>
  );
};

export default Navbar;
