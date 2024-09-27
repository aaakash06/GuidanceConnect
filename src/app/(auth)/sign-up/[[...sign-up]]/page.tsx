import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="w-screen h-screen bg-light-700 flexx pt-40">
      <SignUp />
    </section>
  );
}
