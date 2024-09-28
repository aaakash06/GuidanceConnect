"use client";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import React, { useEffect } from "react";
import { changeQuery } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const BrowseHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [searchTerm, setSearchTerm] = React.useState("");

  useEffect(() => {
    const debounceTimeOut = setTimeout(() => {
      if (searchTerm) {
        const newUrl = changeQuery(searchParams.toString(), "q", searchTerm);
        router.push(newUrl, { scroll: false });
      } else {
        router.push("/browse", { scroll: false });
      }
    }, 500);

    return () => clearTimeout(debounceTimeOut);
  }, [searchTerm, query, router]);

  return (
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
  );
};

export default BrowseHeader;
