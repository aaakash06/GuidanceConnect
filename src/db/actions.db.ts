"use server";
import { redirect } from "next/navigation";
import { connectToDB } from "./connect.db";
import { User } from "./models.db";
interface CreateUserClerkType {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  picture: string;
}
export async function redirectTo(path: string) {
  redirect(path);
}

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
