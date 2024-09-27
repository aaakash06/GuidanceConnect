"use client";
import { getUserByClerkId } from "@/db/actions.db";
import { useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { createContext, useContext } from "react";

const RoleContext = createContext<{
  userRole: string | null;
  user: string | null;
}>({
  userRole: "",
  user: "",
});

export const RoleContextProvider = async ({
  children,
  userRole,
  user,
}: {
  children: React.ReactNode;
  userRole: string | null;
  user: string | null;
}) => {
  return (
    <RoleContext.Provider value={{ userRole, user }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = (): { userRole: string | null } => {
  const { userRole } = useContext(RoleContext);
  return { userRole };
};
export const useUserDB = (): { user: string | null } => {
  const { user } = useContext(RoleContext);
  return { user };
};
