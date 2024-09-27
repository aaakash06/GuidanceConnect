"use client";
import React, { useEffect } from "react";

const CalendlyEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head?.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full h-[calc(100vh-6rem)] "
      data-url={url}
      // style={{ minHeight: "650px", width: "100%" }}
    ></div>
  );
};

export default CalendlyEmbed;
