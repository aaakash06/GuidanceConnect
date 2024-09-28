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
        <Link className="flex items-center justify-start xl:flex-1" href="/">
          {/* SVG logo */}
          <svg
            width="29"
            height="27"
            viewBox="0 0 29 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5625 11.8125L27 1.6875"
              stroke="#B3B6FD"
              strokeWidth="2"
            />
            <path
              d="M21.0938 21.0938L16.875 16.0312"
              stroke="#B3B6FD"
              strokeWidth="2"
            />
            <path
              d="M3.375 15.1875L12.6562 13.5"
              stroke="#B3B6FD"
              strokeWidth="2"
            />
            <g filter="url(#filter0_d_1_13)">
              <circle cx="16.0312" cy="12.6562" r="5.90625" fill="#6B70E6" />
            </g>
            <circle cx="24.4688" cy="4.21875" r="4.21875" fill="#B3B6FD" />
            <circle cx="4.21875" cy="14.3438" r="4.21875" fill="#B3B6FD" />
            <circle cx="22.7812" cy="22.7812" r="4.21875" fill="#B3B6FD" />
            <defs>
              <filter
                id="filter0_d_1_13"
                x="6.125"
                y="6.75"
                width="19.8125"
                height="19.8125"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.618924 0 0 0 0 0.6325 0 0 0 0 0.958333 0 0 0 0.27 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_13"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_13"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% max-sm:text-lg">
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
          <div className="max-xl:absolute right-0 xl:flex-1 text-right lg:px-5 top-0">
            <div className="absolute right-2 top-0 w-9 h-9 rounded-full  flex items-center justify-center">
              <UserButton />
            </div>
          </div>
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
