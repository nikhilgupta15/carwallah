"use client";
import { ShowMoreProps } from "@/types";
import React from "react";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("limit", `${newLimit}`);
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
