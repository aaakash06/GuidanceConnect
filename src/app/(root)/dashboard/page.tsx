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
  AreaChart,
  Area,
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
  ChevronRight,
  Sun,
  Moon,
  Plus,
} from "lucide-react";

// Mock data for charts (unchanged)
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
  const [sidebarWidth, setSidebarWidth] = useState(300);
  const [isDragging, setIsDragging] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getMaxWidth = useCallback(() => {
    if (windowWidth >= 1024 && windowWidth <= 1450) {
      return 325;
    } else if (windowWidth <= 910 && windowWidth >= 800) {
      return 400;
    } else if (windowWidth < 800 && windowWidth >= 724) {
      return 350;
    } else if (windowWidth < 724) {
      return 200;
    }
    return 500;
  }, [windowWidth]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    document.body.style.userSelect = "none";
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    document.body.style.userSelect = "";
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
      window.addEventListener("mousemove", handleMouseMove as any);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove as any);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div className="flex h-screen bg-gray-50" onMouseMove={handleMouseMove}>
      {/* Main Content */}
      <main
        className="flex-1 overflow-y-auto"
        style={{ width: `calc(100% - ${sidebarWidth}px)` }}
      >
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Dashboard</h1>

          {/* Overview Panel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-600 text-white overflow-hidden relative">
              <CardHeader className="flex flex-row items-center justify-between pb-2 z-10 relative">
                <CardTitle className="text-lg font-medium">
                  Total Sessions
                </CardTitle>
                <Users className="h-6 w-6" />
              </CardHeader>
              <CardContent className="z-10 relative">
                <div className="text-4xl font-bold">245</div>
                <p className="text-sm mt-2">
                  <span className="bg-green-400 text-green-800 px-1 rounded">
                    +20%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-20"></div>
            </Card>
            <Card className="bg-gradient-to-br from-gray-900 to-gray-600 text-white overflow-hidden relative">
              <CardHeader className="flex flex-row items-center justify-between pb-2 z-10 relative">
                <CardTitle className="text-lg font-medium">
                  Current Earnings
                </CardTitle>
                <DollarSign className="h-6 w-6" />
              </CardHeader>
              <CardContent className="z-10 relative">
                <div className="text-4xl font-bold">$12,450</div>
                <p className="text-sm mt-2">
                  <span className="bg-green-400 text-green-800 px-1 rounded">
                    +15%
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-20"></div>
            </Card>
            <Card className="bg-gradient-to-br from-gray-900 to-gray-600 text-white overflow-hidden relative">
              <CardHeader className="flex flex-row items-center justify-between pb-2 z-10 relative">
                <CardTitle className="text-lg font-medium">
                  Average Rating
                </CardTitle>
                <Star className="h-6 w-6" />
              </CardHeader>
              <CardContent className="z-10 relative">
                <div className="text-4xl font-bold">4.8</div>
                <p className="text-sm mt-2">Based on 180 reviews</p>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-20"></div>
            </Card>
          </div>

          {/* Calendar and Upcoming Sessions */}
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 mb-8">
            <Card className="w-full lg:w-1/3">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
            <Card className="w-full lg:w-2/3">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Upcoming Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] pr-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="mb-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12 border-2 border-blue-500">
                            <AvatarImage
                              src={`https://i.pravatar.cc/48?img=${i}`}
                            />
                            <AvatarFallback>ST</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-gray-800">
                              Student {i + 1}
                            </p>
                            <p className="text-sm text-gray-500">Mathematics</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <Badge
                            variant="secondary"
                            className="bg-blue-100 text-blue-800"
                          >
                            <Clock className="mr-1 h-3 w-3" />
                            2:00 PM
                          </Badge>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-blue-600 border-blue-600 hover:bg-blue-50"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Analytics Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Analytics</h2>
            <Tabs defaultValue="sessions" className="space-y-4">
              <TabsList className="bg-white p-1 rounded-lg shadow-sm">
                <TabsTrigger
                  value="sessions"
                  className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                >
                  Sessions
                </TabsTrigger>
                <TabsTrigger
                  value="earnings"
                  className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                >
                  Earnings
                </TabsTrigger>
              </TabsList>
              <TabsContent value="sessions">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                      Session Trends
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={sessionData}>
                        <defs>
                          <linearGradient
                            id="sessionGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#8884d8"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="#8884d8"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="sessions"
                          stroke="#8884d8"
                          fillOpacity={1}
                          fill="url(#sessionGradient)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="earnings">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                      Earnings Over Time
                    </CardTitle>
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
                          stroke="#82ca9d"
                          strokeWidth={2}
                          dot={{ r: 4 }}
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
        style={{ touchAction: "none" }}
      />

      {/* Right Sidebar */}
      <aside
        className="bg-white shadow-xl overflow-hidden"
        style={{
          width: `${sidebarWidth}px`,
          transition: isDragging ? "none" : "width 0.3s ease",
        }}
      >
        <div className="p-6">
          <h3 className="font-bold text-xl text-gray-800 mb-4">
            Notifications
          </h3>
          <ScrollArea className="h-[400px]">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="mb-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="flex items-start space-x-3">
                  <Bell className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">
                      New session request
                    </p>
                    <p className="text-sm text-gray-500">
                      From Student {i + 1}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
        <div className="p-6 border-t border-gray-200">
          <h3 className="font-bold text-xl text-gray-800 mb-4">
            Current Availability
          </h3>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-700">Weekdays</span>
                <Badge variant="outline" className="text-gray-600">
                  <Clock className="h-3 w-3 mr-1" />
                  40 hours/week
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-600">
                  9:00 AM - 5:00 PM
                </span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-700">Weekends</span>
                <Badge variant="outline" className="text-gray-600">
                  <Clock className="h-3 w-3 mr-1" />8 hours/week
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-600">
                  10:00 AM - 2:00 PM
                </span>
              </div>
            </div>
          </div>
          <Button className="w-full mt-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-300">
            <Plus className="h-4 w-4 mr-2" /> Add Time Slot
          </Button>
        </div>
        <div className="p-6 border-t border-gray-200">
          <h3 className="font-bold text-xl text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <span>View Earnings Report</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <span>Performance Analytics</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
