"use client";
import { BadgePlus, CalendarCheck, Newspaper, VideoIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { useRole } from "@/context/RoleProvider";

const menuItemsS = [
  { label: "Browse", href: "/browse" },
  { label: "Upcomings", href: "/schedule" },
  { label: "Resources", href: "/" },
];

const Header = () => {
  const { user } = useUser();
  const { userRole: role } = useRole();
  const menuItemsF = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Profile", href: `/profile-facilitator/${user?.id}` },
    { label: "Schedule", href: "/schedule" },
  ];
  return (
    <header className="w-full  py-4 px-4 sm:px-6 lg:px-8 bg-white shadow-sm ">
      <div className=" mx-auto flex justify-between items-center relative font-poppins text-lg max-xl:justify-center ">
        <Link className="flex items-center justify-start xl:flex-1  " href="/">
          <VideoIcon className=" w-6 h-6 text-blue-600" />
          <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% max-sm:text-lg ">
            GuidanceConnect
          </span>
        </Link>

        <nav className="hidden xl:flex justify-center flex-1  gap-20 ">
          {role == "facilitator"
            ? menuItemsF.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {item.label}
                </Link>
              ))
            : menuItemsS.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {item.label}
                </Link>
              ))}
        </nav>
        <SignedOut>
          <div className="space-x-4  max-xl:hidden xl:flex-1 text-right ">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500  max-sm:text-xs ">
              <Link href="/sign-in">Login</Link>
            </Button>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 max-sm:text-xs">
              <Link href="/sign-up">Register</Link>
            </Button>
          </div>
        </SignedOut>
        <SignedIn>
          <div className=" max-xl:absolute right-0  xl:flex-1 text-right lg:px-5 top-[2px]">
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
