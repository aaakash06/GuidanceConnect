import mongoose, { Schema, Document, ObjectId } from "mongoose";
export type ObjectIdType = mongoose.Schema.Types.ObjectId;

export interface IUser extends mongoose.Document {
  name: string;
  username: string;
  clerkId: string;
  email: string;
  password?: string;
  role: "student" | "teacher" | "null";
  bio?: string;
  picture?: string;
  specializations: string[];
  ratings?: ObjectIdType[];
  rating?: Number;
  // comments?: ObjectIdType[];
  joinAt: Date;
}

// Define an interface for Schedule
interface ISchedule extends Document {
  facilitatorId: ObjectIdType;
  availableSlots: {
    startTime: Date;
    endTime: Date;
    isBooked: boolean;
  }[];
}

// Define an interface for Meeting
interface IMeeting extends Document {
  studentId: ObjectIdType;
  facilitatorId: ObjectIdType;
  date: Date;
  duration: number;
  status: "scheduled" | "completed" | "cancelled";
  rating?: ObjectId;
}

interface IRating extends Document {
  studentId: ObjectIdType;
  facilitatorId: ObjectIdType;
  rate: number;
  type: "profile" | "meeting";
  meetingId: ObjectIdType;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    clerkId: { type: String, required: true },
    password: { type: String },
    role: {
      type: String,
      required: true,
      enum: ["student", "facilitator", "null"],
    },
    bio: { type: String },
    picture: { type: String },
    specializations: { type: [String], default: [] },
    ratings: {
      type: [{ type: Schema.Types.ObjectId, ref: "Rating" }],
      default: [],
    },
    rating: Number,
    joinAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Meeting Schema
const MeetingSchema = new Schema<IMeeting>(
  {
    studentId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    facilitatorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Date, required: true },
    duration: { type: Number, required: true },
    status: {
      type: String,
      enum: ["scheduled", "completed", "cancelled"],
      default: "scheduled",
    },
    rating: { type: Schema.Types.ObjectId, ref: "Rating" },
  },
  { timestamps: true }
);

const RatingSchema = new mongoose.Schema<IRating>(
  {
    studentId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    facilitatorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    meetingId: { type: Schema.Types.ObjectId, ref: "Meeting" },
    rate: Number,
    type: { type: String, enum: ["profil", "meeting"] },
  },
  { timestamps: true }
);

// Schedule Schema
const ScheduleSchema = new Schema<ISchedule>(
  {
    facilitatorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    availableSlots: [
      {
        startTime: { type: Date, required: true },
        endTime: { type: Date, required: true },
        isBooked: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true }
);

export const Meeting =
  mongoose.models.Meeting || mongoose.model<IMeeting>("Meeting", MeetingSchema);

export const User =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export const Rating =
  mongoose.models.Rating || mongoose.model<IRating>("Rating", RatingSchema);

export const Schedule =
  mongoose.models.Schedule ||
  mongoose.model<ISchedule>("Schedule", ScheduleSchema);
