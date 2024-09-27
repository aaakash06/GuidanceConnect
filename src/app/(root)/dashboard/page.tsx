"use client";
import React, { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {
  LayoutDashboard,
  Calendar as CalendarIcon,
  DollarSign,
  UserCircle,
  MessageSquare,
  Bell,
  Clock,
  Users,
  Star,
  TrendingUp,
} from "lucide-react";

// Mock data for charts
const sessionData = [
  { month: "Jan", sessions: 20 },
  { month: "Feb", sessions: 25 },
  { month: "Mar", sessions: 30 },
  { month: "Apr", sessions: 35 },
  { month: "May", sessions: 28 },
  { month: "Jun", sessions: 32 },
];

const earningsData = [
  { month: "Jan", earnings: 2000 },
  { month: "Feb", earnings: 2500 },
  { month: "Mar", earnings: 3000 },
  { month: "Apr", earnings: 3500 },
  { month: "May", earnings: 2800 },
  { month: "Jun", earnings: 3200 },
];

export default function FacilitatorDashboard() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [sidebarWidth, setSidebarWidth] = useState(256);
  const [isDragging, setIsDragging] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getMaxWidth = useCallback(() => {
    if (windowWidth >= 1024 && windowWidth <= 1450) {
      return 325;
    }

    else if (windowWidth <=910 && windowWidth >=800) {
      return 400
    }
    
    else if (windowWidth < 800 && windowWidth >=724) {
      return 350
    }
    else if (windowWidth <724) {
      return 200
    } 
    return 500;
  }, [windowWidth]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default selection behavior
    setIsDragging(true);
    document.body.style.userSelect = 'none'; // Disable text selection
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    document.body.style.userSelect = ''; // Re-enable text selection
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) {
        const newWidth = window.innerWidth - e.clientX;
        const maxWidth = getMaxWidth();
        setSidebarWidth(Math.max(200, Math.min(newWidth, maxWidth)));
      }
    },
    [isDragging, getMaxWidth]
  );

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove as any);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove as any);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className="flex h-screen bg-gray-100" onMouseMove={handleMouseMove}>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto" style={{ width: `calc(100% - ${sidebarWidth}px)` }}>
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>

          {/* Overview Panel */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Sessions
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">245</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+20%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Current Earnings
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,450</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+15%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Average Rating
                </CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.8</div>
                <p className="text-xs text-muted-foreground">
                  Based on 180 reviews
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Calendar and Upcoming Sessions */}
          <div className="mt-8 flex flex-col lg:flex-row xl:space-x-4 gap-4 xl:gap-0">
            <Card className="w-auto lg:w-fit xl:w-1/3">
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="max-w-[250px] w-full">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="flex-1 xl:w-2/3">
              <CardHeader>
                <CardTitle>Upcoming Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="mb-4 flex items-center justify-between last:mb-0"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage
                            src={`https://i.pravatar.cc/32?img=${i}`}
                          />
                          <AvatarFallback>ST</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Student {i + 1}</p>
                          <p className="text-xs text-gray-500">Mathematics</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">
                          <Clock className="mr-1 h-3 w-3" />
                          2:00 PM
                        </Badge>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Analytics Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Analytics
            </h2>
            <Tabs defaultValue="sessions">
              <TabsList>
                <TabsTrigger value="sessions">Sessions</TabsTrigger>
                <TabsTrigger value="earnings">Earnings</TabsTrigger>
              </TabsList>
              <TabsContent value="sessions">
                <Card>
                  <CardHeader>
                    <CardTitle>Session Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={sessionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="sessions" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="earnings">
                <Card>
                  <CardHeader>
                    <CardTitle>Earnings Over Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={earningsData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="earnings"
                          stroke="#8884d8"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      {/* Resizable divider */}
      <div
        className="w-1 bg-gray-200 cursor-ew-resize hover:bg-gray-300 transition-colors"
        onMouseDown={handleMouseDown}
        style={{ touchAction: 'none' }} // Prevents scrolling on touch devices
      />

      {/* Right Sidebar */}
      <aside
        className="bg-white shadow-md overflow-hidden"
        style={{ width: `${sidebarWidth}px`, transition: isDragging ? 'none' : 'width 0.3s ease' }}
      >
        <div className="p-4">
          <h3 className="font-semibold text-gray-800">Notifications</h3>
          <ScrollArea className="h-[300px] mt-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-start space-x-2 mb-4">
                <Bell className="h-5 w-5 text-blue-500 mt-1" />
                <div>
                  <p className="text-sm font-medium">New session request</p>
                  <p className="text-xs text-gray-500">From Student {i + 1}</p>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
        <div className="p-4 border-t">
          <h3 className="font-semibold text-gray-800 mb-2">
            Current Availability
          </h3>
          <p className="text-sm text-gray-600 mb-2">Mon-Fri: 9AM - 5PM</p>
          <Button size="sm">Update Time Slots</Button>
        </div>
        <div className="p-4 border-t">
          <h3 className="font-semibold text-gray-800 mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                View Earnings Report
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Performance Analytics
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
