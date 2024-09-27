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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Progress } from "@/components/ui/progress";
import { getUserByClerkId } from "@/db/actions.db";
import { IUser } from "@/db/models.db";



export default  function FacilitatorProfile({
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
    <div className="min-h-screen p-8 w-4/5 mx-auto">
    

      {/* Webinars */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Webinars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Upcoming Webinars</h3>
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
                <WebinarCard key={webinar.id} webinar={webinar} isPast={true} />
              ))}
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
