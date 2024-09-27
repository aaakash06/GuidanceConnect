import FacilitatorEditProfile from "@/components/custom/EditProfile";
import { getUserByClerkId } from "@/db/actions.db";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const EditProfile = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { userId } = auth();
  if (userId != id) return <div>You can't access this route</div>;
  const user = await getUserByClerkId(userId);
  return <FacilitatorEditProfile user={JSON.stringify(user)} />;
};

export default EditProfile;
