import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Video, Users, Calendar, Star } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import Hero from "@/components/custom/Hero";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-gray-50">
      <div className=" min-h-screen  bg-gray-100 font-poppins  ">
        <main>
          <section className=" lg:h-screen flex justify-center relative  ">
            <Hero></Hero>
          </section>
          <section
            className="w-full py-12 flex justify-center md:py-24 lg:py-32 bg-white"
            id="features"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                Why Choose GuidanceConnect?
              </h2>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardContent className="flex flex-col items-center space-y-2 p-6">
                    <Video className="h-12 w-12 text-blue-600" />
                    <h3 className="text-xl text-center font-bold">
                      Video Consultations
                    </h3>
                    <p className="text-gray-600 text-center">
                      Connect face-to-face with mentors from around the world.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center space-y-2 p-6">
                    <Users className="h-12 w-12 text-blue-600" />
                    <h3 className="text-xl text-center font-bold">
                      Expert Mentors
                    </h3>
                    <p className="text-gray-600 text-center">
                      Access a diverse pool of experienced professionals and
                      seniors.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center space-y-2 p-6">
                    <Calendar className="h-12 w-12 text-blue-600" />
                    <h3 className="text-xl text-center font-bold">
                      Flexible Scheduling
                    </h3>
                    <p className="text-gray-600 text-center">
                      Book sessions at times that suit your schedule.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section
            className="w-full flexx py-12 md:py-24 lg:py-32 bg-gray-100"
            id="how-it-works"
          >
            <div className="container px-4 md:px-6 lg:px-40">
              <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                How It Works
              </h2>
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="flex flex-col items-center space-y-3 border-2 border-gray-200 rounded-2xl p-6 bg-white">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-black">Sign Up</h3>
                  <p className="text-gray-600 text-center">
                    Create your account and tell us about your goals.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-3 border-2 border-gray-200 rounded-2xl p-6 bg-white">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    Match with Mentors
                  </h3>
                  <p className="text-gray-600 text-center">
                    We'll connect you with the best mentors for your needs.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-3 border-2 border-gray-200 rounded-2xl p-6 bg-white">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    Start Learning
                  </h3>
                  <p className="text-gray-600 text-center">
                    Schedule video calls and get personalized guidance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            className="w-full hidden py-12  md:py-24 lg:py-32 bg-white"
            id="testimonials"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-black">
                What Our Users Say
              </h2>
              <div className="grid gap-8 lg:grid-cols-2">
                <Card>
                  <CardContent className="flex flex-col space-y-2 p-6">
                    <Star className="h-6 w-6 text-yellow-500" />
                    <p className="text-gray-600">
                      "GuidanceConnect helped me find the perfect mentor for my
                      career transition. The video calls were incredibly
                      insightful!"
                    </p>
                    <p className="font-semibold">- Sarah T., Career Changer</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col space-y-2 p-6">
                    <Star className="h-6 w-6 text-yellow-500" />
                    <p className="text-gray-600">
                      "As a senior professional, I love being able to give back
                      and guide the next generation through GuidanceConnect."
                    </p>
                    <p className="font-semibold">- Mark R., Mentor</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="w-full flexx py-12  md:py-24 lg:py-32 bg-blue-600">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-6 text-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Ready to Connect?
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                    Join GuidanceConnect today and take the first step towards
                    your goals.
                  </p>
                </div>
                <div className="w-full flex justify-center">
                  <form className="flex w-full max-w-2xl space-x-2">
                    <Input
                      className="max-w-lg flex-1 bg-white"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <Button
                      type="submit"
                      className="bg-white text-blue-600 hover:bg-gray-100 max-w-full"
                    >
                      Get Started
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-black">
                Frequently Asked Questions
              </h2>
              <div className="w-3/4 mx-auto">
                {" "}
                {/* Container with 75% width */}
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      What is GuidanceConnect?
                    </AccordionTrigger>
                    <AccordionContent>
                      GuidanceConnect is a platform that connects individuals
                      with mentors from various fields to help them achieve
                      their personal and professional goals.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How can I sign up?</AccordionTrigger>
                    <AccordionContent>
                      You can sign up by clicking the "Get Started" button on
                      our homepage and filling out the registration form.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      Is there a fee for the service?
                    </AccordionTrigger>
                    <AccordionContent>
                      GuidanceConnect offers both free and premium mentoring
                      options. Please check our pricing page for more details.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      What kinds of guidance are available?
                    </AccordionTrigger>
                    <AccordionContent>
                      Our guidance ranges from high school subjects tutoring,
                      competitive exam preparation, career counseling, and
                      abroad studies to programming and beyond. There are no
                      limits to the support we offer!
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      Who are the guidance providers or experts?
                    </AccordionTrigger>
                    <AccordionContent>
                      Our experts are individuals who have successfully
                      navigated the entire process in their respective fields
                      and have a wide range of achievements. We constantly
                      recruit the best experts to ensure you receive top-notch
                      guidance.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>
                      How can I choose a mentor?
                    </AccordionTrigger>
                    <AccordionContent>
                      You can browse through our list of available mentors,
                      review their profiles, and choose one that aligns with
                      your goals and needs. Each mentor's background and
                      specialties are detailed to help you make an informed
                      decision.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger>
                      Can I switch mentors if I'm not satisfied?
                    </AccordionTrigger>
                    <AccordionContent>
                      Absolutely! If you feel that your current mentor is not
                      the right fit for you, you can request a change at any
                      time. We want you to feel comfortable and supported in
                      your learning journey.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-8">
                    <AccordionTrigger>
                      What if I have more questions?
                    </AccordionTrigger>
                    <AccordionContent>
                      If you have any additional questions or need further
                      assistance, feel free to reach out to our support team via
                      the contact form on our website. We're here to help!
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
