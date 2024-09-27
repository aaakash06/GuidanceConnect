import React from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  Users,
  Star,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  ArrowRight,
  MapPin,
  Mail,
  Globe,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { getUserByClerkId } from "@/db/actions.db";
import { IUser } from "@/db/models.db";

const WebinarCard = ({ webinar, isPast }) => (
  <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
    <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500 group-hover:bg-blue-600 transition-colors duration-300"></div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 pr-8">{webinar.topic}</h3>
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <CalendarIcon className="h-4 w-4 mr-2" />
        {new Date(webinar.time).toLocaleDateString()}
      </div>
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <Clock className="h-4 w-4 mr-2" />
        {new Date(webinar.time).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <Users className="h-4 w-4 mr-2" />
        {webinar.students} {isPast ? "attended" : "registered"}
      </div>
      <Badge variant={isPast ? "secondary" : "default"} className="mt-2">
        {isPast ? "Past" : "Upcoming"}
      </Badge>
    </div>
    <div className="absolute bottom-4 right-4">
      <ArrowRight className="h-6 w-6 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
    </div>
  </div>
);

const SkillBadge = ({ skill }) => (
  <Badge variant="outline" className="mr-2 mb-2">
    {skill}
  </Badge>
);

const ExpertiseBadge = ({ expertise }) => (
  <div className="border-2 border-black rounded-full py-2 px-4 flex items-center justify-between group hover:shadow-lg transition-all duration-300 cursor-pointer">
    <span>{expertise}</span>
    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
);

const SkillBar = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium text-gray-700">{skill}</span>
      <span className="text-sm font-medium text-gray-500">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const AccomplishmentCard = ({ accomplishment, icon }) => (
  <Card className="hover:shadow-lg transition-all duration-300 group">
    <CardContent className="p-4 flex items-start space-x-4">
      <div className="bg-blue-500 p-3 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
          {accomplishment}
        </p>
      </div>
    </CardContent>
  </Card>
);

export default function FacilitatorProfile({
  params,
}: {
  params: { id: string };
}) {
  const { id: clerkId } = params;
  // const user: IUser = await getUserByClerkId(clerkId);
  const facilitator = {
    name: "Dr. Emily Chen",
    image: "https://i.pravatar.cc/300?img=47",
    bio: "Experienced computer science professor with a passion for mentoring students in AI and machine learning.",
    location: "San Francisco, CA",
    email: "emily.chen@example.com",
    website: "www.emilychen.com",
    expertise: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Science",
      "Career Guidance",
    ],
    skills: ["Python", "TensorFlow", "Data Analysis", "Research Methodology"],
    accomplishments: [
      "Ph.D. in Computer Science from Stanford University",
      "Published 20+ research papers in top-tier conferences",
      "Mentored 50+ students who secured positions in leading tech companies",
      "Certified AWS Machine Learning Specialist",
    ],
    upcomingWebinars: [
      {
        id: 1,
        topic: "Introduction to Neural Networks",
        time: "2023-09-30T15:00:00",
        students: 75,
      },
      {
        id: 2,
        topic: "Career Paths in AI",
        time: "2023-10-05T14:00:00",
        students: 100,
      },
    ],
    pastWebinars: [
      {
        id: 3,
        topic: "Python for Machine Learning",
        time: "2023-09-15T16:00:00",
        students: 120,
      },
      {
        id: 4,
        topic: "Preparing for Tech Interviews",
        time: "2023-09-01T15:30:00",
        students: 90,
      },
    ],
    reviews: [
      {
        id: 1,
        student: "Alex M.",
        rating: 5,
        comment: "Dr. Chen's guidance was invaluable for my ML project!",
      },
      {
        id: 2,
        student: "Sarah L.",
        rating: 4,
        comment: "Great insights into the AI industry. Very helpful!",
      },
    ],
    overallRating: 4.8,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="text-center place-content-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <Avatar className="w-40 h-40 border-4 border-white shadow-lg mb-6 md:mb-0 md:mr-8">
            <AvatarImage src={facilitator.image} alt={facilitator.name} />
            <AvatarFallback>
              {facilitator.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">{facilitator.name}</h1>
            <p className="text-xl mb-4">{facilitator.bio}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {facilitator.location}
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 bg-[#5f59d2] px-0.5" />
                {facilitator.email}
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-2 bg-[##5e32ce42] px-0.5" />
                {facilitator.website}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:w-4/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-1 space-y-8">
            {/* Expertise */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-blue-500 text-white">
                <CardTitle className="text-xl">Expertise</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {facilitator.expertise.map((exp, index) => (
                    <ExpertiseBadge key={index} expertise={exp} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-blue-500 text-white">
                <CardTitle className="text-xl">Skills</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <SkillBar skill="Python" level={90} />
                <SkillBar skill="TensorFlow" level={85} />
                <SkillBar skill="Data Analysis" level={95} />
                <SkillBar skill="Research Methodology" level={80} />
              </CardContent>
            </Card>

            {/* Accomplishments */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-blue-500 text-white">
                <CardTitle className="text-xl">Accomplishments</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <AccomplishmentCard
                    accomplishment="Ph.D. in Computer Science from Stanford University"
                    icon={<GraduationCap className="h-6 w-6" />}
                  />
                  <AccomplishmentCard
                    accomplishment="Published 20+ research papers in top-tier conferences"
                    icon={<BookOpen className="h-6 w-6" />}
                  />
                  <AccomplishmentCard
                    accomplishment="Mentored 50+ students who secured positions in leading tech companies"
                    icon={<Users className="h-6 w-6" />}
                  />
                  <AccomplishmentCard
                    accomplishment="Certified AWS Machine Learning Specialist"
                    icon={<Award className="h-6 w-6" />}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2">
            {/* Webinars */}
            {/* Webinars */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Webinars
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Upcoming Webinars
                  </h3>
                  <div className="space-y-4">
                    {facilitator.upcomingWebinars.map((webinar) => (
                      <WebinarCard
                        key={webinar.id}
                        webinar={webinar}
                        isPast={false}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Past Webinars</h3>
                  <div className="space-y-4">
                    {facilitator.pastWebinars.map((webinar) => (
                      <WebinarCard
                        key={webinar.id}
                        webinar={webinar}
                        isPast={true}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Feedback and Ratings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  Feedback and Ratings
                  <span className="ml-2 text-2xl font-bold">
                    {facilitator.overallRating}
                  </span>
                  <Star className="h-6 w-6 text-yellow-400 ml-1" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Progress
                  value={facilitator.overallRating * 20}
                  className="mb-6"
                />
                <div className="space-y-6">
                  {facilitator.reviews.map((review) => (
                    <Card key={review.id} className="bg-gray-50">
                      <CardContent className="p-4">
                        <div className="flex items-center mb-2">
                          <span className="font-semibold mr-2">
                            {review.student}
                          </span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
