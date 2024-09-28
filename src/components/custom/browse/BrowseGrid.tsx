" use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { DialogHeader } from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, DollarSign, Globe, GraduationCap } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { IUser } from "@/db/models.db";
import Link from "next/link";

const BrowseGrid = ({ facilitatorJSON }: { facilitatorJSON: string }) => {
  const facilitators: IUser[] = JSON.parse(facilitatorJSON);

  return (
    <div className="flex-grow ">
      <ScrollArea className="h-[calc(100vh-12rem)] pr-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {facilitators.map((facilitator) => (
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
                  {/* <div className="flex items-center text-gray-700">
                    <GraduationCap className="w-4 h-4 mr-2 text-red-500" />
                    <span className="truncate">
                    {facilitator.education.split(",")[0]}
                  </span>
                  </div> */}
                </div>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-[rgb(52,108,228)]/[.85] hover:bg-[rgb(52,108,228)] text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
                      View Profile
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-[rgba(52, 108, 228, 1)]">
                        {facilitator.name}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-24 w-24">
                          <AvatarImage
                            src={facilitator.picture}
                            alt={facilitator.name}
                          />
                          <AvatarFallback className="bg-[rgba(52, 108, 228, 0.1)] text-[rgba(52, 108, 228, 1)] text-2xl font-bold">
                            {facilitator.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-lg text-gray-800">
                            {facilitator.name}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {facilitator.bio ?? "There is no bio"}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 text-[rgba(52, 108, 228, 1)]">
                          Expertise
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {/* {facilitator.specializations.length == 0 &&
                            "something"}{" "} */}
                          {facilitator.specializations.length > 0
                            ? facilitator.specializations.map(
                                (skill, index) => (
                                  <Badge
                                    key={index}
                                    variant="secondary"
                                    className="bg-[rgba(52, 108, 228, 0.1)]-100 text-[rgba(52, 108, 228, 1)]"
                                  >
                                    {skill}
                                  </Badge>
                                )
                              )
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
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-semibold text-[rgba(52, 108, 228, 1)] mb-1">
                            Languages
                          </h3>
                          <p className="text-sm text-gray-700">
                            {facilitator.language.join(", ")}
                          </p>
                        </div>
                        {/* <div>
                        <h3 className="font-semibold text-[rgba(52, 108, 228, 1)] mb-1">
                          Experience
                        </h3>
                        <p className="text-sm text-gray-700">
                          {facilitator.experience}
                        </p>
                      </div> */}
                      </div>
                      {/* <div>
                      <h3 className="font-semibold text-[rgba(52, 108, 228, 1)] mb-1">
                        Education
                      </h3>
                      <p className="text-sm text-gray-700">
                        {facilitator.education}
                      </p>
                    </div> */}
                    </div>
                    <Button className="w-full bg-dark-100 hover:bg-dark-400 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 ">
                      <Link href={`/book/${facilitator.clerkId}`}>
                        Book a Session
                      </Link>
                    </Button>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default BrowseGrid;
