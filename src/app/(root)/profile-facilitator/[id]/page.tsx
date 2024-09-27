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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Progress } from "@/components/ui/progress";
import { getUserByClerkId } from "@/db/actions.db";
import { IUser } from "@/db/models.db";
export default async function FacilitatorProfile({
  params,
}: {
  params: { id: string };
}) {
  const { id: clerkId } = params;
  const user: IUser = await getUserByClerkId(clerkId);
  const facilitator = {
    name: "Dr. Emily Chen",
    image: "https://i.pravatar.cc/300?img=47",
    bio: "Experienced computer science professor with a passion for mentoring students in AI and machine learning.",
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

  // const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <div className="mb-8 flex flex-col md:flex-row items-center md:items-start gap-6">
        <Avatar className="w-32 h-32">
          <AvatarImage src={user.picture} alt={facilitator.name} />
          <AvatarFallback>
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">{user.name}</h1>
          <p className="text-gray-600 mb-4">{user.bio ?? facilitator.bio}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {user.specializations.length > 0
              ? user.specializations.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))
              : facilitator.expertise.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
          </div>
        </div>
      </div>

      {/* Skills and Expertise */}
      {/* <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Skills and Expertise
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {facilitator.skills.map((skill, index) => (
            <Card key={index}>
              <CardContent className="flex items-center p-4">
                <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                <span>{skill}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Accomplishments */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Accomplishments
        </h2>
        <ul className="space-y-2">
          {facilitator.accomplishments.map((accomplishment, index) => (
            <li key={index} className="flex items-start">
              <Award className="h-5 w-5 mr-2 text-yellow-500 mt-1 flex-shrink-0" />
              <span>{accomplishment}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Availability Calendar */}
      {/* <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Availability
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <Card className="flex-grow">
            <CardContent className="p-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
          <Card className="flex-grow">
            <CardHeader>
              <CardTitle>Book a Session</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-600">
                Select a date and time to schedule your session with{" "}
                {facilitator.name}.
              </p>
              <Button className="w-full">Book Now</Button>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Webinars */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Webinars</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Webinars</CardTitle>
            </CardHeader>
            <CardContent>
              {facilitator.upcomingWebinars.map((webinar) => (
                <div key={webinar.id} className="mb-4 last:mb-0">
                  <h3 className="font-semibold">{webinar.topic}</h3>
                  <p className="text-sm text-gray-600 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {new Date(webinar.time).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {webinar.students} students registered
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Past Webinars</CardTitle>
            </CardHeader>
            <CardContent>
              {facilitator.pastWebinars.map((webinar) => (
                <div key={webinar.id} className="mb-4 last:mb-0">
                  <h3 className="font-semibold">{webinar.topic}</h3>
                  <p className="text-sm text-gray-600 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {new Date(webinar.time).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {webinar.students} students attended
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feedback and Ratings */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Feedback and Ratings
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              Overall Rating: {facilitator.overallRating}
              <Star className="h-5 w-5 text-yellow-400 ml-2" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={facilitator.overallRating * 20} className="mb-4" />
            {facilitator.reviews.map((review) => (
              <div key={review.id} className="mb-4 last:mb-0">
                <div className="flex items-center mb-1">
                  <span className="font-semibold mr-2">{review.student}</span>
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
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
