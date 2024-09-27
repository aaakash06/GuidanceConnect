import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex text-black bg-white   flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6  border-t">
      <p className="text-md text-gray-500">
        © 2023 GuidanceConnect. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm  hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-sm hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
