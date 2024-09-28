import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";
import { getRoleByClerkId, getUserByClerkId } from "@/db/actions.db";
import { auth } from "@clerk/nextjs/server";
import ResponsiveSidebar from "@/components/custom/MobileNav";
import { RoleContextProvider } from "@/context/RoleProvider";
import { IUser } from "@/db/models.db";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();
  let userRole: null | string = null;
  let user: IUser | null = null;
  if (userId) {
    user = await getUserByClerkId(userId);
    userRole = user!.role;
  }
  return (
    <RoleContextProvider userRole={userRole} user={JSON.stringify(user)}>
      <ResponsiveSidebar></ResponsiveSidebar>
      <Header></Header>
      {children}
      {/* <Footer></Footer> */}
    </RoleContextProvider>
  );
}
