"use client";
import { Input } from "../ui/input";
import React from "react";

const BrowseSearch = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <Input
      type="text"
      placeholder="Search by name, expertise, or location"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="pl-10"
    />
  );
};

export default BrowseSearch;
