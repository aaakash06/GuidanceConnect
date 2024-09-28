"use client";

import { Checkbox } from "@radix-ui/react-checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import { Slider } from "@radix-ui/react-slider";
import React from "react";

const BrowseSideBar = () => {
  const [priceRange, setPriceRange] = React.useState([0, 100]);
  return (
    <aside className="w-full md:w-64 bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-2">Price Range</h3>
          <Slider
            min={0}
            max={200}
            step={10}
            value={priceRange}
            onValueChange={setPriceRange}
          />
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-2">Languages</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <Checkbox id="english" />
              <label htmlFor="english" className="ml-2 text-sm">
                English
              </label>
            </div>
            <div className="flex items-center">
              <Checkbox id="spanish" />
              <label htmlFor="spanish" className="ml-2 text-sm">
                Spanish
              </label>
            </div>
            <div className="flex items-center">
              <Checkbox id="mandarin" />
              <label htmlFor="mandarin" className="ml-2 text-sm">
                Mandarin
              </label>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-2">Experience Level</h3>
          <Select>
            <SelectTrigger>
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
