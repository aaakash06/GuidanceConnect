import { getRoleByClerkId } from "@/db/actions.db";
import { auth } from "@clerk/nextjs/server";
import Home from "@/components/screen/HomePage";
import RolePage from "@/components/screen/RolePage";

export default async function Main() {
  const { userId } = auth();
  if (!userId) {
    return <Home />;
  }

  const userRole = await getRoleByClerkId(userId);
  if (userRole == "null") {
    return <RolePage />;
  }
  return <Home />;
}
