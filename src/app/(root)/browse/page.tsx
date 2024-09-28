import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Star,
  Search,
  Filter,
  Clock,
  DollarSign,
  Globe,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import BrowseSideBar from "@/components/custom/BrowseSideBar";
import BrowseSearch from "@/components/custom/BrowseSearch";
import { getAllFacilitators } from "@/db/actions.db";
import { IUser } from "@/db/models.db";

export default async function StudentBrowsingPage({
  searchParams,
}: {
  searchParams: { q: string; filter?: string; page: string };
}) {
  // const [selectedFacilitator, setSelectedFacilitator] = React.useState(null);
  const facilitators: null | IUser[] = await getAllFacilitators();
  if (!facilitators) return <div>no facilitators to show</div>;
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 ">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <h1 className="text-xl font-bold ">Find a Facilitator</h1>
          <div className="flex items-center mt-4 w-full md:mt-0 md:w-auto">
            <div className="relative flex-grow mr-4">
              <BrowseSearch></BrowseSearch>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="math">Mathematics</SelectItem>
                <SelectItem value="career">Career Counseling</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow lg:container mx-auto px-4  pt-5 pb-1 ">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}

          <BrowseSideBar></BrowseSideBar>

          {/* Facilitator Grid */}
          <div className="flex-grow  h-[calc(100vh-5rem)]">
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6  max-h-full custom-scrollbar overflow-y-scroll">
              {facilitators.map((facilitator) => (
                <Card key={facilitator.id} className="overflow-hidden">
                  <CardHeader className="pb-0">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={facilitator.picture}
                          alt={facilitator.name}
                        />
                        <AvatarFallback>
                          {facilitator.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">
                          {facilitator.name}
                        </CardTitle>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < 4 ? "text-yellow-400" : "text-gray-300"
                              }`}
                            />
                            // Math.floor(facilitator.rating ?? 0 )
                          ))}
                          <span className="ml-2 text-sm text-gray-600">
                            ({facilitator.ratings?.length})
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">
                      {facilitator.bio ??
                        "     Experienced computer science professor specializing in AI and machine learning."}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {facilitator.specializations.length
                        ? facilitator.specializations.map((skill, index) => (
                            <Badge key={index} variant="secondary">
                              {skill}
                            </Badge>
                          ))
                        : ["AI", "Ml"].map((skill, index) => (
                            <Badge key={index} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-green-500" />
                        {/* {facilitator.availability} */}
                        Available Now
                      </span>
                      <span className="font-semibold">
                        ${facilitator.price || 5}/hr
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="w-full"
                          // onClick={() =>
                          //   setSelectedFacilitator(facilitator)}
                        >
                          View Profile
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>{facilitator.name}</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-16 w-16">
                              <AvatarImage
                                src={facilitator.picture}
                                alt={facilitator.name}
                              />
                              <AvatarFallback>
                                {facilitator.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold">
                                {facilitator.name}
                              </p>
                              <p className="text-sm  text-gray-600">
                                {facilitator.bio ??
                                  "     Experienced computer science professor specializing in AI and machine learning."}
                              </p>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                              {facilitator.specializations.length
                                ? facilitator.specializations.map(
                                    (skill, index) => (
                                      <Badge key={index} variant="secondary">
                                        {skill}
                                      </Badge>
                                    )
                                  )
                                : ["AI", "Ml"].map((skill, index) => (
                                    <Badge key={index} variant="secondary">
                                      {skill}
                                    </Badge>
                                  ))}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h3 className="font-semibold mb-1">Languages</h3>
                              {/* <p className="text-sm">
                                {facilitator.language.join(", ")}
                              </p> */}
                            </div>
                            {/* <div>
                              <h3 className="font-semibold mb-1">Experience</h3>
                              <p className="text-sm">
                                {facilitator.experience}
                              </p>
                            </div> */}
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Education</h3>
                            {/* <p className="text-sm">{facilitator.education}</p> */}
                          </div>
                        </div>
                        <Button className="w-full">Book a Session</Button>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-sm mt-8">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          © 2023 GuidanceConnect. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
