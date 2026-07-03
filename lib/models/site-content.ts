import mongoose, { Schema, Document } from "mongoose"

export interface ISiteContent extends Document {
  key: string
  content: string
  createdAt: Date
  updatedAt: Date
}

const SiteContentSchema = new Schema<ISiteContent>(
  {
    key: { type: String, required: true, unique: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
)

export const SiteContent = mongoose.models.SiteContent || mongoose.model<ISiteContent>("SiteContent", SiteContentSchema)
