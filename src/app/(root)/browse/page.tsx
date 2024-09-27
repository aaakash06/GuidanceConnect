"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
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

const facilitators = [
  {
    id: 1,
    name: "Dr. Emily Chen",
    image: "https://i.pravatar.cc/150?img=1",
    bio: "Experienced computer science professor specializing in AI and machine learning.",
    skills: ["Artificial Intelligence", "Machine Learning", "Python"],
    rating: 4.9,
    reviews: 120,
    hourlyRate: 75,
    availability: "Available Now",
    languages: ["English", "Mandarin"],
    education: "Ph.D. in Computer Science, Stanford University",
    experience: "Expert",
  },
  {
    id: 2,
    name: "John Smith",
    image: "https://i.pravatar.cc/150?img=2",
    bio: "Career counselor with 10+ years of experience in tech industry placement.",
    skills: ["Career Counseling", "Resume Writing", "Interview Preparation"],
    rating: 4.7,
    reviews: 85,
    hourlyRate: 60,
    availability: "Available in 2 hours",
    languages: ["English", "Spanish"],
    education: "M.A. in Career Counseling, Columbia University",
    experience: "Expert",
  },
  {
    id: 2,
    name: "John Smith",
    image: "https://i.pravatar.cc/150?img=2",
    bio: "Career counselor with 10+ years of experience in tech industry placement.",
    skills: ["Career Counseling", "Resume Writing", "Interview Preparation"],
    rating: 4.7,
    reviews: 85,
    hourlyRate: 60,
    availability: "Available in 2 hours",
    languages: ["English", "Spanish"],
    education: "M.A. in Career Counseling, Columbia University",
    experience: "Expert",
  },
  {
    id: 2,
    name: "John Smith",
    image: "https://i.pravatar.cc/150?img=2",
    bio: "Career counselor with 10+ years of experience in tech industry placement.",
    skills: ["Career Counseling", "Resume Writing", "Interview Preparation"],
    rating: 4.7,
    reviews: 85,
    hourlyRate: 60,
    availability: "Available in 2 hours",
    languages: ["English", "Spanish"],
    education: "M.A. in Career Counseling, Columbia University",
    experience: "Expert",
  },
  {
    id: 2,
    name: "John Smith",
    image: "https://i.pravatar.cc/150?img=2",
    bio: "Career counselor with 10+ years of experience in tech industry placement.",
    skills: ["Career Counseling", "Resume Writing", "Interview Preparation"],
    rating: 4.7,
    reviews: 85,
    hourlyRate: 60,
    availability: "Available in 2 hours",
    languages: ["English", "Spanish"],
    education: "M.A. in Career Counseling, Columbia University",
    experience: "Expert",
  },
  {
    id: 2,
    name: "John Smith",
    image: "https://i.pravatar.cc/150?img=2",
    bio: "Career counselor with 10+ years of experience in tech industry placement.",
    skills: ["Career Counseling", "Resume Writing", "Interview Preparation"],
    rating: 4.7,
    reviews: 85,
    hourlyRate: 60,
    availability: "Available in 2 hours",
    languages: ["English", "Spanish"],
    education: "M.A. in Career Counseling, Columbia University",
    experience: "Expert",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    image: "https://i.pravatar.cc/150?img=3",
    bio: "Math tutor specializing in calculus and statistics for college students.",
    skills: ["Calculus", "Statistics", "Linear Algebra"],
    rating: 4.8,
    reviews: 95,
    hourlyRate: 50,
    availability: "Available Tomorrow",
    languages: ["English"],
    education: "B.S. in Mathematics, MIT",
    experience: "Intermediate",
  },
  // Add more facilitators as needed
];

export default function StudentBrowsingPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [priceRange, setPriceRange] = React.useState([0, 100]);
  const [selectedFacilitator, setSelectedFacilitator] = React.useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 ">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <h1 className="text-xl font-bold ">Find a Facilitator</h1>
          <div className="flex items-center mt-4 w-full md:mt-0 md:w-auto">
            <div className="relative flex-grow mr-4">
              <Input
                type="text"
                placeholder="Search by name, expertise, or location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
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
          <aside className="w-full md:w-64 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Price Range</h3>
                <Slider
                  min={0}
                  max={200}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Languages</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="english" />
                    <label htmlFor="english" className="ml-2 text-sm">
                      English
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="spanish" />
                    <label htmlFor="spanish" className="ml-2 text-sm">
                      Spanish
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="mandarin" />
                    <label htmlFor="mandarin" className="ml-2 text-sm">
                      Mandarin
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Experience Level</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </aside>

          {/* Facilitator Grid */}
          <div className="flex-grow  h-[calc(100vh-6rem)]">
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6  max-h-full custom-scrollbar overflow-y-scroll">
              {facilitators.map((facilitator) => (
                <Card key={facilitator.id} className="overflow-hidden">
                  <CardHeader className="pb-0">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={facilitator.image}
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
                                i < Math.floor(facilitator.rating)
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">
                            ({facilitator.reviews})
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">
                      {facilitator.bio}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {facilitator.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-green-500" />
                        {facilitator.availability}
                      </span>
                      <span className="font-semibold">
                        ${facilitator.hourlyRate}/hr
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
                                src={facilitator.image}
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
                              <p className="text-sm text-gray-600">
                                {facilitator.bio}
                              </p>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                              {facilitator.skills.map((skill, index) => (
                                <Badge key={index} variant="secondary">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h3 className="font-semibold mb-1">Languages</h3>
                              <p className="text-sm">
                                {facilitator.languages.join(", ")}
                              </p>
                            </div>
                            <div>
                              <h3 className="font-semibold mb-1">Experience</h3>
                              <p className="text-sm">
                                {facilitator.experience}
                              </p>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Education</h3>
                            <p className="text-sm">{facilitator.education}</p>
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
