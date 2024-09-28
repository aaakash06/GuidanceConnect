"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Video,
  Users,
  Calendar,
  Star,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import Hero from "@/components/custom/Hero";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full">
        <CardContent className="flex flex-col items-center space-y-4 p-6">
          <div>
            <Icon className="h-16 w-16 text-blue-600" />
          </div>
          <h3 className="text-xl text-center font-bold">{title}</h3>
          <p className="text-gray-600 text-center">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const StepCard = ({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: number * 0.2 }}
    className="flex flex-col items-center space-y-3 border-2 border-gray-200 rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold"
    >
      {number}
    </motion.div>
    <h3 className="text-xl font-bold text-black">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </motion.div>
);

const FAQItem = ({
  question,
  answer,
  value,
}: {
  question: string;
  answer: string;
  value: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <AccordionItem value={value} className="mb-4">
      <AccordionTrigger
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-white shadow-md hover:bg-gray-50 transition-all duration-300"
      >
        <span className="text-lg font-semibold text-gray-800">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* <ChevronDown className="h-5 w-5 text-blue-500" />  */}
        </motion.div>
      </AccordionTrigger>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AccordionContent className="p-4 bg-blue-50 rounded-b-lg">
              <p className="text-gray-600">{answer}</p>
            </AccordionContent>
          </motion.div>
        )}
      </AnimatePresence>
    </AccordionItem>
  );
};

export default function Home() {
  const faqs = [
    {
      question: "What is GuidanceConnect?",
      answer:
        "GuidanceConnect is a platform that connects individuals with mentors from various fields to help them achieve their personal and professional goals.",
    },
    {
      question: "How can I sign up?",
      answer:
        "You can sign up by clicking the 'Get Started' button on our homepage and filling out the registration form.",
    },
    {
      question: "Is there a fee for the service?",
      answer:
        "GuidanceConnect offers both free and premium mentoring options. Please check our pricing page for more details.",
    },
    {
      question: "What kinds of guidance are available?",
      answer:
        "Our guidance ranges from high school subjects tutoring, competitive exam preparation, career counseling, and abroad studies to programming and beyond. There are no limits to the support we offer!",
    },
    {
      question: "Who are the guidance providers or experts?",
      answer:
        "Our experts are individuals who have successfully navigated the entire process in their respective fields and have a wide range of achievements. We constantly recruit the best experts to ensure you receive top-notch guidance.",
    },
    {
      question: "How can I choose a mentor?",
      answer:
        "You can browse through our list of available mentors, review their profiles, and choose one that aligns with your goals and needs. Each mentor's background and specialties are detailed to help you make an informed decision.",
    },
    {
      question: "Can I switch mentors if I'm not satisfied?",
      answer:
        "Absolutely! If you feel that your current mentor is not the right fit for you, you can request a change at any time. We want you to feel comfortable and supported in your learning journey.",
    },
    {
      question: "What if I have more questions?",
      answer:
        "If you have any additional questions or need further assistance, feel free to reach out to our support team via the contact form on our website. We're here to help!",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-gray-50">
      <div className="min-h-screen bg-gray-100 font-poppins">
        <main>
          <section className="lg:h-screen flex justify-center relative">
            <Hero />
          </section>

          <section
            className="w-full py-12 flex justify-center md:py-24 lg:py-32 bg-white"
            id="features"
          >
            <div className="container px-4 md:px-6">
              <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl text-black font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
              >
                Why Choose GuidanceConnect?
              </motion.h2>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <FeatureCard
                  icon={Video}
                  title="Video Consultations"
                  description="Connect face-to-face with mentors from around the world."
                />
                <FeatureCard
                  icon={Users}
                  title="Expert Mentors"
                  description="Access a diverse pool of experienced professionals and seniors."
                />
                <FeatureCard
                  icon={Calendar}
                  title="Flexible Scheduling"
                  description="Book sessions at times that suit your schedule."
                />
              </div>
            </div>
          </section>

          <section
            className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-100 to-purple-100 flexx"
            id="how-it-works"
          >
            <div className="container px-4 md:px-6 lg:px-40 ">
              <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl text-black font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
              >
                How It Works
              </motion.h2>
              <div className="grid gap-6 lg:grid-cols-3 ">
                <StepCard
                  number={1}
                  title="Sign Up"
                  description="Create your account and tell us about your goals."
                />
                <StepCard
                  number={2}
                  title="Match with Mentors"
                  description="We'll connect you with the best mentors for your needs."
                />
                <StepCard
                  number={3}
                  title="Start Learning"
                  description="Schedule video calls and get personalized guidance."
                />
              </div>
            </div>
          </section>

          <section
            className="w-full hidden py-12 md:py-24 lg:py-32 bg-white "
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

          <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 flexx to-purple-700 text-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Ready to Connect?
                  </h2>
                  <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-blue-100">
                    Join GuidanceConnect today and take the first step towards
                    your goals.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-full max-w-md"
                >
                  <form className="flex flex-col space-y-4">
                    <Input
                      className="bg-white text-gray-800 placeholder-gray-500 rounded-full"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <Button
                      type="submit"
                      className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-sm text-blue-200"
                >
                  Join 10,000+ users already benefiting from expert guidance
                </motion.p>
              </div>
            </div>
          </section>

          <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 flexx to-purple-50">
            <div className="container mx-auto px-4 md:px-6">
              <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-3xl mx-auto"
              >
                <Accordion type="single" collapsible>
                  {faqs.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      value={`item-${index + 1}`}
                    />
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
