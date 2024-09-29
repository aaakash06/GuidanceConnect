"use client";
import React, { useEffect, useState } from "react";
import { searchGem } from "@/db/actions.db";
// import { ContentSearch } from "../components/ContentSearch";
import { motion } from "framer-motion";
import { Spotlight } from "../ui/spotlight";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "../ui/dialog";
import { Star, Clock, DollarSign, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { DialogHeader } from "../ui/dialog";
import { IUser } from "@/db/models.db";
import { Badge } from "../ui/badge";

export default function Hero() {
  const UserCard = () => {
    return (
      <div className="w-full flexx mt-10">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"> */}
        <div className="flexx">
          {result.map((facilitator) => (
            <Card
              key={facilitator.clerkId}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white rounded-xl border-0 "
            >
              <CardHeader className="pb-0 pt-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16 ring-2 ring-[rgba(52, 108, 228, 0.5)] ring-offset-2">
                    <AvatarImage
                      src={facilitator.picture}
                      alt={facilitator.name}
                    />
                    <AvatarFallback className="bg-[rgba(52, 108, 228, 0.1)] text-[rgba(52, 108, 228, 1)] font-semibold">
                      {facilitator.name
                        .split(" ")
                        //@ts-ignore
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {facilitator.name}
                    </CardTitle>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i <
                            Math.floor(
                              //@ts-ignore
                              facilitator.rating ? facilitator.rating : 4
                            )
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill={
                            i <
                            Math.floor(
                              //@ts-ignore
                              facilitator.rating ? facilitator.rating : 4
                            )
                              ? "currentColor"
                              : "none"
                          }
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium text-gray-600">
                        {facilitator.rating
                          ? facilitator.rating.toString()
                          : "4"}{" "}
                        ({facilitator.ratings?.length} reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4 mt-4 line-clamp-2 ">
                  {facilitator.bio ??
                    "The facilitator has no bio. The facilitator has no bio. The facilitator has no bio. The facilitator has no bio. "}
                </p>
                <div className="flex flex-wrap items-center gap-2 mb-4 min-h-16">
                  {facilitator.specializations.length > 0
                    ? facilitator.specializations.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-[rgba(52, 108, 228, 0.1)]-100 text-[rgba(52, 108, 228, 1)]"
                        >
                          {skill}
                        </Badge>
                      ))
                    : ["none", "none"].map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-[rgba(52, 108, 228, 0.1)]-100 text-[rgba(52, 108, 228, 1)]"
                        >
                          {skill}
                        </Badge>
                      ))}
                </div>

                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-4 h-4 mr-2 text-[rgba(52, 108, 228, 0.1)]" />
                    <span>{"Available now"}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <DollarSign className="w-4 h-4 mr-2 text-green-500" />
                    <span className="font-semibold">
                      ${facilitator.price}/hour
                    </span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Globe className="w-4 h-4 mr-2 text-purple-500" />
                    <span>{facilitator.language.join(", ")}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={"/browse"}>
                  <Button className="w-full bg-[rgb(52,108,228)]/[.85] hover:bg-[rgb(52,108,228)] text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
                    View Profile
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  };
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const floatingVariant = {
    initial: { y: 0, opacity: 0 },
    animate: {
      y: [0, -10, 0],
      opacity: 1,
      transition: {
        y: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        },
        opacity: {
          duration: 0.8,
          ease: "easeInOut",
        },
      },
    },
  };

  const [userQuery, setUserQuery] = useState("");
  const [result, setResult] = useState<IUser[]>([]);
  const [searching, setSearching] = useState(false);

  return (
    <>
      <div className="flex    flex-col gap-4  max-w-10xl h-[50vh] md:h-[75vh] size-screen mx-auto justify-center  ">
        <div className="relative z-10 hidden lg:block  ">
          <motion.img
            src="/imgs/chemistry.png"
            alt="Custom Image"
            className="hidden lg:block absolute -top-10 -left-24 -rotate-12 drop-shadow-[0_16px_24px_rgba(49,120,198,0.35)]"
            style={{
              x: mousePosition.x * 0.04,
              y: mousePosition.y * 0.04,
            }}
            variants={floatingVariant}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            width="80px"
            // height="150px"

            // style={{ width: "56px", height: "auto" }}
          />

          <motion.svg
            className="hidden lg:block size-12 absolute top-80 -left-32 drop-shadow-[0_16px_24px_rgba(0,0,255,0.35)] "
            style={{
              x: mousePosition.x * 0.02, // Parallax effect based on mouse position
              y: mousePosition.y * 0.02,
            }}
            variants={floatingVariant}
            initial="initial"
            animate="animate"
            width="800px"
            height="800px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.01,5.03,23.244,2.254a1.742,1.742,0,0,0-1.989.338L2.38,19.8A1.166,1.166,0,0,0,2.3,21.447c.025.027.05.053.077.077l1.541,1.4a1.165,1.165,0,0,0,1.489.066L28.142,5.75A1.158,1.158,0,0,1,30,6.672V6.605A1.748,1.748,0,0,0,29.01,5.03Z"
              fill="#0065a9"
            />
            <path
              d="M29.01,26.97l-5.766,2.777a1.745,1.745,0,0,1-1.989-.338L2.38,12.2A1.166,1.166,0,0,1,2.3,10.553c.025-.027.05-.053.077-.077l1.541-1.4A1.165,1.165,0,0,1,5.41,9.01L28.142,26.25A1.158,1.158,0,0,0,30,25.328V25.4A1.749,1.749,0,0,1,29.01,26.97Z"
              fill="#007acc"
            />
            <path
              d="M23.244,29.747a1.745,1.745,0,0,1-1.989-.338A1.025,1.025,0,0,0,23,28.684V3.316a1.024,1.024,0,0,0-1.749-.724,1.744,1.744,0,0,1,1.989-.339l5.765,2.772A1.748,1.748,0,0,1,30,6.6V25.4a1.748,1.748,0,0,1-.991,1.576Z"
              fill="#1f9cf0"
            />
          </motion.svg>

          <motion.img
            src="/imgs/atom.png"
            alt="Custom Image"
            style={{
              x: mousePosition.x * 0.02, // Parallax effect based on mouse position
              y: mousePosition.y * 0.02,
            }}
            variants={floatingVariant}
            className="hidden lg:block absolute bottom-20 right-0 rotate-12 drop-shadow-[0_16px_24px_rgba (80,201,162,0.35))]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            width="100px"

            // style={{ width: "56px", height: "auto" }}
          />

          <motion.img
            src="/imgs/harvard.png"
            alt="Custom Image"
            className="hidden lg:block absolute top-96 -right-32 rotate-12 drop-shadow-[0_16px_24px_rgba(247,147,20,0.35)]"
            style={{
              x: mousePosition.x * 0.04,
              y: mousePosition.y * 0.04,
            }}
            variants={floatingVariant}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            width="80px"
            // height="150px"

            // style={{ width: "56px", height: "auto" }}
          />
        </div>
        <div className="absolute  inset-0 overflow-hidden pointer-events-none bg-gray-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute w-60 h-60 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mix-blend-multiply filter  opacity-70 animate-floatA"></div>
              <div className="absolute top-[10rem] right-0 w-96 h-96 bg-gradient-to-br from-pink-700 to-red-700 rounded-full mix-blend-multiply filter  opacity-70 animate-floatB animation-delay-2000"></div>
            </div>
            <div className="absolute inset-0 bg-grid-indigo-100/[0.03] bg-[size:20px_20px]"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80"></div>
        </div>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            type: "spring",
            damping: 10,
            delay: 0.3,
          }}
          initial={{ y: -20, opacity: 0 }}
          className="max-w-7xl  z-10  mx-auto px-4 flex flex-col gap-4 items-center justify-center "
        >
          <div className="flex flex-col items-center justify-center">
            <span className="tracking-tighter text-2xl md:text-3xl text-center font-medium text-primary/80 ">
              Welcome to
            </span>
            <h1 className="tracking-tighter text-black max-sm:text-4xl  text-6xl md:text-7xl xl:text-8xl text-center font-bold my-2">
              <span className="font-bold  bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
                Guidance
              </span>
              Connect.
            </h1>
          </div>
          <p className="text-primary/80 max-w-lg text-center tracking-tight md:text-lg font-light">
            Platform that helps students and guidance seekers connect with
            domain experts and seniors.
          </p>
          <div className="mt-10 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search for guidance... (Physics, Career, etc.)"
              className="px-4 py-2 border rounded-md w-full md:w-96"
              value={userQuery}
              onChange={(e) => {
                setUserQuery(e.currentTarget.value);
              }}
            />
            <button
              disabled={searching}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={async () => {
                setSearching(true);
                const gemResult = await searchGem(userQuery);
                setResult(JSON.parse(gemResult));
                console.log(gemResult);
                setSearching(false);
              }}
            >
              Search
            </button>
          </div>

          {result && <UserCard />}
          {/* <ContentSearch tracks={tracks} /> */}
        </motion.div>
      </div>
      <div className="text-black">asdfh</div>
    </>
  );
}
