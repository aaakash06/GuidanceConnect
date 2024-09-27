"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  ChevronDown,
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
  // Add more facilitators as needed
];

const SkillBadge = ({ skill }) => (
  <Badge variant="secondary" className="mr-2 mb-2">
    {skill}
  </Badge>
);

const RatingStars = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= Math.round(rating)
              ? "text-yellow-400 fill-current"
              : "text-gray-300"
          }`}
        />
      ))}
      <span className="ml-2 text-sm font-semibold">{rating.toFixed(1)}</span>
    </div>
  );
};

const FacilitatorCard = ({ facilitator, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full"
    >
      <Card className="h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={facilitator.image} alt={facilitator.name} />
              <AvatarFallback>{facilitator.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-xl font-bold">
                {facilitator.name}
              </CardTitle>
              <RatingStars rating={facilitator.rating} />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">{facilitator.bio}</p>
          <div className="flex flex-wrap mb-4">
            {facilitator.skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-blue-500" />
              <span>{facilitator.availability}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-2 text-green-500" />
              <span>${facilitator.hourlyRate}/hour</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2 text-purple-500" />
              <span>{facilitator.languages.join(", ")}</span>
            </div>
            <div className="flex items-center">
              <GraduationCap className="w-4 h-4 mr-2 text-red-500" />
              <span>{facilitator.education.split(",")[0]}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => onClick(facilitator)} className="w-full">
            View Profile
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default function StudentBrowsingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedFacilitator, setSelectedFacilitator] = useState(null);
  const [filteredFacilitators, setFilteredFacilitators] =
    useState(facilitators);

  useEffect(() => {
    const filtered = facilitators.filter((facilitator) => {
      const matchesSearch =
        facilitator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        facilitator.skills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesPrice =
        facilitator.hourlyRate >= priceRange[0] &&
        facilitator.hourlyRate <= priceRange[1];
      return matchesSearch && matchesPrice;
    });
    setFilteredFacilitators(filtered);
  }, [searchTerm, priceRange]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-indigo-700 mb-4 md:mb-0"
            >
              Find Your Perfect Mentor
            </motion.h1>
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="relative flex-grow">
                <Input
                  type="text"
                  placeholder="Search by name or skill..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex items-center">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Filter Options</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Price Range</label>
                      <Slider
                        min={0}
                        max={200}
                        step={5}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="mt-2"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                    {/* Add more filter options here */}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilitators.map((facilitator) => (
            <FacilitatorCard
              key={facilitator.id}
              facilitator={facilitator}
              onClick={setSelectedFacilitator}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-indigo-200">
                We connect students with expert mentors to help them achieve
                their goals and advance their careers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-indigo-200 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-indigo-200 hover:text-white transition-colors"
                  >
                    Browse Mentors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-indigo-200 hover:text-white transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-indigo-200 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="text-indigo-200 mb-4">
                Stay updated with our latest news and offers.
              </p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="rounded-r-none"
                />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-indigo-800 text-center text-indigo-200">
            <p>&copy; 2024 MentorMatch. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Facilitator Profile Dialog */}
      {selectedFacilitator && (
        <Dialog
          open={!!selectedFacilitator}
          onOpenChange={() => setSelectedFacilitator(null)}
        >
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {selectedFacilitator.name}
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedFacilitator.image}
                  alt={selectedFacilitator.name}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <div className="mt-4">
                  <RatingStars rating={selectedFacilitator.rating} />
                  <p className="text-sm text-gray-500 mt-1">
                    {selectedFacilitator.reviews} reviews
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 mr-2 text-green-500" />
                    <span>${selectedFacilitator.hourlyRate}/hour</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-500" />
                    <span>{selectedFacilitator.availability}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-purple-500" />
                    <span>{selectedFacilitator.languages.join(", ")}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">About Me</h3>
                <p className="text-gray-700 mb-4">{selectedFacilitator.bio}</p>
                <h3 className="text-xl font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap mb-4">
                  {selectedFacilitator.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-700 mb-4">
                  {selectedFacilitator.education}
                </p>
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-gray-700 mb-4">
                  {selectedFacilitator.experience}
                </p>
                <Button className="w-full">Schedule a Session</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
