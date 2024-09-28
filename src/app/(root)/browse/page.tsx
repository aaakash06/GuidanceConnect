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
import BrowseSideBar from "@/components/custom/browse/BrowseSideBar";
import BrowseSearch from "@/components/custom/browse/BrowseSearch";
import { getAllFacilitators } from "@/db/actions.db";
import { IUser } from "@/db/models.db";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import BrowseHeader from "@/components/custom/browse/BrowseHeader";
import BrowseGrid from "@/components/custom/browse/BrowseGrid";

export default async function StudentBrowsingPage({
  searchParams,
}: {
  searchParams: { q: string; filter?: string; page: string };
}) {
  const facilitators: null | IUser[] = await getAllFacilitators();
  if (!facilitators) return <div>no facilitators to show</div>;
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-[rgba(52, 108, 228, 0.1)]">
      {/* Header */}
      <BrowseHeader></BrowseHeader>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 ">
          {/* Sidebar */}

          <BrowseSideBar></BrowseSideBar>

          {/* Facilitator Grid */}
          <BrowseGrid
            facilitatorJSON={JSON.stringify(facilitators)}
          ></BrowseGrid>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white hidden shadow-sm mt-8">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          © 2023 GuidanceConnect. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
