import StudentSchedulePage from "@/components/screen/StudentSchedulePage";
import TeacherSchedulePage from "@/components/screen/TeacherSchedulePage";
import { getRoleByClerkId } from "@/db/actions.db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Schedule() {
  const { userId } = auth();
  const userRole = await getRoleByClerkId(userId!);
  if (userRole == "null") {
    return redirect("/");
  } else if (userRole == "student") {
    return <StudentSchedulePage />;
  }
  return <TeacherSchedulePage />;
}
