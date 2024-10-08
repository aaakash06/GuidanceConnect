"use server";
import { redirect } from "next/navigation";
import { connectToDB } from "./connect.db";
import { IUser, User } from "./models.db";
import { FilterQuery, model } from "mongoose";
import { Tag } from "lucide-react";
interface CreateUserClerkType {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  picture: string;
}

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY!);

export async function redirectTo(path: string) {
  redirect(path);
}

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function createUserByClerk(user: CreateUserClerkType) {
  try {
    await connectToDB();
    const newUser = {
      ...user,
      role: "null",
    };
    const mongoUser = await User.create(newUser);
    console.log("user created");
    return mongoUser;
  } catch (err) {
    console.log("erro; createUserByClerk");
    console.log(err);
  }
}

export async function updateUserByClerk(
  id: string,
  toUpdate: {
    name: string;
    username: string;
    email: string;
    picture: string;
  }
) {
  try {
    await connectToDB();

    const mongoUser = await User.findOneAndUpdate({ clerkId: id }, toUpdate, {
      new: true,
    });
    return mongoUser;
  } catch (err) {
    console.log(" error occured; updateUserByClerk");
    console.log(err);
  }
}

export const deleteUserByClerkId = async (id: string) => {
  try {
    await connectToDB();
    const user = await User.findOneAndDelete({ clerkId: id });
    if (!user) {
      console.log("no user found to delete in db");
      return "no user found to delete in db";
    }
    console.log("user deleted");
    return user;
  } catch (err) {
    console.log("error; deletebyclerk");
    console.log(err);
  }
};
export const getUserByClerkId = async (id: string) => {
  try {
    await connectToDB();
    const user = await User.findOne({ clerkId: id });
    if (!user) {
      console.log("no user found with give clerk Id");
      return "no user found with give clerk Id";
    }
    return user;
  } catch (err) {
    console.log("error; getUserbyclerk ");
    console.log(err);
  }
};
export const setRole = async (id: string, role: string) => {
  try {
    await connectToDB();

    const user = await User.findOneAndUpdate(
      { clerkId: id },
      { role },
      { new: true }
    );
    if (!user) {
      console.log("no user found with give clerk Id");
      await new Promise((r) => {
        setTimeout(r, 3000);
      });
      setRole(id, role);
    }
    return;
    // ----------error while return the raw object --------//
    // return user;
  } catch (err) {
    console.log("error ; setRole");
    console.log(err);
  }
};

export const getRoleByClerkId = async (clerkId: string) => {
  try {
    await connectToDB();
    // console.log("getRole was called");
    const user = await User.findOne({ clerkId });
    if (!user) {
      // may be due to slow mongodb crud
      return "null";
    }
    return user.role;
  } catch (e) {
    console.log("error; getRole");
    // console.log(e);
  }
};

export const getCalendlyByClerkId = async (clerkId: string) => {
  try {
    await connectToDB();
    const user = await User.findOne({ clerkId });
    if (!user) {
      return null;
    }
    if (user.role != "facilitator") {
      return null;
    }
    if (user.meetingUrl == "") return null;
    return user.meetingUrl;
  } catch (e) {
    console.log("error; getCalendlyUR");
    // console.log(e);
  }
};
export const getAllFacilitators = async () => {
  try {
    await connectToDB();
    const allFacilitators = await User.find({ role: "facilitator" });
    if (!allFacilitators) {
      return null;
    }
    return allFacilitators;
  } catch (e) {
    console.log("error; getAllFacilitators");
    return null;
    // console.log(e);
  }
};
export const updateUserInfo = async (facilitator: string, clerkId: string) => {
  const updatedFacilitator = JSON.parse(facilitator);
  try {
    await connectToDB();
    console.log(updatedFacilitator);
    const updatedUser = await User.findOneAndUpdate(
      { clerkId },
      { ...updatedFacilitator },
      { new: true }
    );
    console.log(updatedUser);

    console.log("user updated");
  } catch (e) {
    console.log("error; updateUserInfo");
    return null;
    // console.log(e);
  }
};

export const getAllFacilitatorss = async (
  search?: string,
  priceLow?: number,
  priceHigh?: number,
  language?: string,
  experience?: string,
  filter?: string,
  page?: number,
  subject?: string
) => {
  let query: FilterQuery<typeof User> = {};
  query = { role: "facilitator" };

  // Apply price range filter if both values are provided
  if (priceLow !== undefined && priceHigh !== undefined) {
    query["price"] = { $gte: priceLow, $lte: priceHigh };
  }

  // Apply subject specialization filter
  if (subject) {
    query["specializations"] = { $in: [subject] };
  }

  // Apply language filter if provided
  if (language) {
    query["languages"] = { $in: [language] };
  }

  // Apply search filter for name, username, or bio
  if (search) {
    query["$or"] = [
      { name: new RegExp(search, "i") },
      { username: new RegExp(search, "i") },
      { bio: new RegExp(search, "i") },
    ];
  }

  console.log(query);
  // Pagination setup
  const limit = 10; // Set a default limit for items per page
  const skip = page ? (page - 1) * limit : limit;

  try {
    await connectToDB();
    // Execute the query with pagination and return the result
    const facilitators = await User.find(query);
    // const facilitators = await User.find(query).skip(skip).limit(limit);
    console.log(facilitators);
    return facilitators;
  } catch (err) {
    console.log("coudn't fetch facilitator with query ");
    console.log(err);
  }
};

export async function getAllExperties() {
  try {
    await connectToDB();
    const distinceSpec = await User.distinct("specializations");
    console.log(distinceSpec);
    return distinceSpec;
  } catch (e) {
    console.log("error; getExperties");
  }
}

export async function searchGem(text: string) {
  const distinceSpec = await getAllExperties();
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-8b-exp-0924",
    systemInstruction: `You will be given a prompt by a student who is seeking a guidance provider or a facilitator in a specific field. You have to return an array of specializations that the guidance provider may have. Only choose the specializations from the array below and match the capitalization too. ${distinceSpec}
    
    If nothing matches, return empty array.`,
  });
  const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {
            text: "I want to connect with a facilitator specialized in grade 11 physics",
          },
        ],
      },
      {
        role: "model",
        parts: [{ text: "['Physics', 'Mechanics', 'NEB', 'Conceptual ']" }],
      },
      {
        role: "user",
        parts: [{ text: "I want to know a SAT tutor" }],
      },
      {
        role: "model",
        parts: [{ text: "['SAT', 'IELTS', 'foreign exchange', 'TOEFL']" }],
      },
    ],
  });
  // console.log(distinceSpec);
  let result = await chatSession.sendMessage(text);
  let stringg = result.response.text();
  stringg = stringg.replace(/'/g, '"');
  const spec = JSON.parse(stringg);
  const ret = await getFacilitatorsBySpecialization(spec);

  console.log(ret);
  return JSON.stringify(ret);
}

async function getFacilitatorsBySpecialization(inputSpecializations: string[]) {
  try {
    const facilitators = await User.find({
      role: "facilitator",
      specializations: { $in: inputSpecializations },
    });

    return facilitators;
  } catch (error) {
    console.error("Error fetching facilitators by specialization:", error);
    return [];
  }
}
