import React from "react";
import { Calendar, Clock, Book, User, CheckCircle, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function TeacherSchedulePage() {
  // Mock data for upcoming sessions
  const upcomingSessions = [
    {
      id: 1,
      facilitator: "Dr. Emily Chen",
      time: "2023-09-26T14:00:00",
      subject: "Computer Science",
    },
    {
      id: 2,
      facilitator: "Prof. Michael Brown",
      time: "2023-09-28T10:30:00",
      subject: "Mathematics",
    },
    {
      id: 3,
      facilitator: "Sarah Johnson, MBA",
      time: "2023-09-30T16:00:00",
      subject: "Business Strategy",
    },
  ];

  // Mock data for progress tracker
  const progressData = {
    overallProgress: 65,
    goals: [
      { id: 1, name: "Complete Python Course", progress: 80 },
      { id: 2, name: "Prepare for GMAT", progress: 50 },
      { id: 3, name: "Develop Machine Learning Project", progress: 30 },
    ],
  };

  // Mock data for recommended facilitators
  const recommendedFacilitators = [
    {
      id: 1,
      name: "Dr. Alex Turner",
      expertise: "Artificial Intelligence",
      rating: 4.9,
    },
    { id: 2, name: "Prof. Lisa Wang", expertise: "Data Science", rating: 4.8 },
    { id: 3, name: "John Doe, Ph.D.", expertise: "Robotics", rating: 4.7 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">My Schedule</h1>

      {/* Upcoming Sessions */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Upcoming Guidance Sessions
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {upcomingSessions.map((session) => (
            <Card key={session.id}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-blue-500" />
                  {new Date(session.time).toLocaleDateString()}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="flex items-center text-sm text-gray-600 mb-2">
                  <Clock className="mr-2 h-4 w-4" />
                  {new Date(session.time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p className="flex items-center text-sm text-gray-600 mb-2">
                  <User className="mr-2 h-4 w-4" />
                  {session.facilitator}
                </p>
                <p className="flex items-center text-sm text-gray-600">
                  <Book className="mr-2 h-4 w-4" />
                  {session.subject}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
