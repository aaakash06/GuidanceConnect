"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import React from "react";

const BrowseSideBar = () => {
  const [priceRange, setPriceRange] = React.useState([0, 100]);
  return (
    <aside className="w-full lg:w-[30%]  bg-white p-6 rounded-xl shadow-lg ">
      <h2 className="text-2xl font-semibold mb-6 text-[rgba(52, 108, 228, 1)]">
        Refine Your Search
      </h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-4 text-gray-700">
            Price Range
          </h3>
          <Slider
            min={0}
            max={200}
            step={10}
            value={priceRange}
            onValueChange={setPriceRange}
            className="mb-4"
          />
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4 text-gray-700">Languages</h3>
          <div className="space-y-3">
            {["English", "Spanish", "Mandarin"].map((lang) => (
              <div key={lang} className="flex items-center">
                <Checkbox
                  id={lang.toLowerCase()}
                  className="border-[rgba(52, 108, 228, 0.3)]"
                />
                <label
                  htmlFor={lang.toLowerCase()}
                  className="ml-3 text-sm text-gray-700"
                >
                  {lang}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4 text-gray-700">
            Experience Level
          </h3>
          <Select>
            <SelectTrigger className="w-full border-2 border-[rgba(52, 108, 228, 0.2)] focus:border-[rgba(52, 108, 228, 0.5)] focus:ring focus:ring-[rgba(52, 108, 228, 0.2)] focus:ring-opacity-50">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="expert">Expert</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </aside>
  );
};

export default BrowseSideBar;
