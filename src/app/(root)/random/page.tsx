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
  // Add more facilitators as needed
];

export default function StudentBrowsingPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [priceRange, setPriceRange] = React.useState([0, 100]);
  const [selectedFacilitator, setSelectedFacilitator] = React.useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-[rgba(52, 108, 228, 0.1)]">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-6 flex flex-wrap items-center justify-between">
          <h1 className="text-2xl font-bold text-[rgba(52, 108, 228, 1)] tracking-tight">
            Find Your Perfect Facilitator
          </h1>
          <div className="flex items-center mt-4 w-full md:mt-0 md:w-auto">
            <div className="relative flex-grow mr-4">
              <Input
                type="text"
                placeholder="Search by name, expertise, or location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-full border-2 border-[rgba(52, 108, 228, 0.2)] focus:border-[rgba(52, 108, 228, 0.5)] focus:ring focus:ring-[rgba(52, 108, 228, 0.2)] focus:ring-opacity-50"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[rgba(52, 108, 228, 0.4)]" />
            </div>
            <Select>
              <SelectTrigger className="w-[200px] rounded-full border-2 border-[rgba(52, 108, 228, 0.2)] focus:border-[rgba(52, 108, 228, 0.5)] focus:ring focus:ring-[rgba(52, 108, 228, 0.2)] focus:ring-opacity-50">
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
      <main className="flex-grow container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 bg-white p-6 rounded-xl shadow-lg ">
            <h2 className="text-2xl font-semibold mb-6 text-[rgba(52, 108, 228, 1)]">
              Refine Your Search
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-700">
                  Price Range
                </h3>
                <Slider
                  min={0}
                  max={200}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-4"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-700">
                  Languages
                </h3>
                <div className="space-y-3">
                  {["English", "Spanish", "Mandarin"].map((lang) => (
                    <div key={lang} className="flex items-center">
                      <Checkbox
                        id={lang.toLowerCase()}
                        className="border-[rgba(52, 108, 228, 0.3)]"
                      />
                      <label
                        htmlFor={lang.toLowerCase()}
                        className="ml-3 text-sm text-gray-700"
                      >
                        {lang}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-700">
                  Experience Level
                </h3>
                <Select>
                  <SelectTrigger className="w-full border-2 border-[rgba(52, 108, 228, 0.2)] focus:border-[rgba(52, 108, 228, 0.5)] focus:ring focus:ring-[rgba(52, 108, 228, 0.2)] focus:ring-opacity-50">
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
          <div className="flex-grow">
            <ScrollArea className="h-[calc(100vh-12rem)] pr-4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {facilitators.map((facilitator) => (
                  <Card
                    key={facilitator.id}
                    className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white rounded-xl border-0"
                  >
                    <CardHeader className="pb-0 pt-6">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-16 w-16 ring-2 ring-[rgba(52, 108, 228, 0.5)] ring-offset-2">
                          <AvatarImage
                            src={facilitator.image}
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
                                  i < Math.floor(facilitator.rating)
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                                fill={
                                  i < Math.floor(facilitator.rating)
                                    ? "currentColor"
                                    : "none"
                                }
                              />
                            ))}
                            <span className="ml-2 text-sm font-medium text-gray-600">
                              {facilitator.rating} ({facilitator.reviews}{" "}
                              reviews)
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4 mt-4 line-clamp-2">
                        {facilitator.bio}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mb-4 min-h-16">
                        {facilitator.skills.slice(0, 3).map((skill, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-[rgba(52, 108, 228, 0.1)] text-[rgba(52, 108, 228, 1)] font-medium py-1 px-2"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-y-2 text-sm">
                        <div className="flex items-center text-gray-700">
                          <Clock className="w-4 h-4 mr-2 text-[rgba(52, 108, 228, 0.1)]" />
                          <span>{facilitator.availability}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <DollarSign className="w-4 h-4 mr-2 text-green-500" />
                          <span className="font-semibold">
                            ${facilitator.hourlyRate}/hour
                          </span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Globe className="w-4 h-4 mr-2 text-purple-500" />
                          <span>{facilitator.languages.join(", ")}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <GraduationCap className="w-4 h-4 mr-2 text-red-500" />
                          <span className="truncate">
                            {facilitator.education.split(",")[0]}
                          </span>
                        </div>
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
                                  src={facilitator.image}
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
                                  {facilitator.bio}
                                </p>
                              </div>
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg mb-2 text-[rgba(52, 108, 228, 1)]">
                                Skills
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {facilitator.skills.map((skill, index) => (
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
                                  {facilitator.languages.join(", ")}
                                </p>
                              </div>
                              <div>
                                <h3 className="font-semibold text-[rgba(52, 108, 228, 1)] mb-1">
                                  Experience
                                </h3>
                                <p className="text-sm text-gray-700">
                                  {facilitator.experience}
                                </p>
                              </div>
                            </div>
                            <div>
                              <h3 className="font-semibold text-[rgba(52, 108, 228, 1)] mb-1">
                                Education
                              </h3>
                              <p className="text-sm text-gray-700">
                                {facilitator.education}
                              </p>
                            </div>
                          </div>
                          <Button className="w-full bg-[rgba(52, 108, 228, 0.6)] hover:bg-[rgba(52, 108, 228, 0.7)] text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
                            Book a Session
                          </Button>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[rgba(52, 108, 228, 1)] text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-semibold">
            © 2023 GuidanceConnect. All rights reserved.
          </p>
          <p className="mt-2 text-[rgba(52, 108, 228, 0.2)]">
            Empowering learners through expert guidance.
          </p>
        </div>
      </footer>
    </div>
  );
}
