import mongoose, { Schema, Document } from "mongoose"

export interface IUser extends Document {
  name: string
  email: string
  password?: string
  image?: string
  role: "admin" | "user"
  provider: "credentials" | "google"
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: { type: String },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    provider: { type: String, enum: ["credentials", "google"], default: "credentials" },
  },
  { timestamps: true }
)

export const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema)
