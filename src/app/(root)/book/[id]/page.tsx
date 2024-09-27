import CalendlyEmbed from "@/components/calendlyEmbed";
import { getCalendlyByClerkId } from "@/db/actions.db";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const BookingPage = async () => {
  const { userId } = auth();
  const calendlyURL: string | null = await getCalendlyByClerkId(userId!);
  if (!calendlyURL) return <div>No meeting Yet</div>;
  return (
    <>
      <div className="w-full bg-light-700 border-2 ">
        <CalendlyEmbed url={calendlyURL} />
      </div>
    </>
  );
};

export default BookingPage;
