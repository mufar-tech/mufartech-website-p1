import mongoose, { Schema, Document } from "mongoose"

export interface ISaasProduct extends Document {
  name: string
  description: string
  icon: string
  color: string
  comingSoon: boolean
  order: number
  createdAt: Date
  updatedAt: Date
}

const SaasProductSchema = new Schema<ISaasProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    color: { type: String, required: true },
    comingSoon: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
)

export const SaasProduct = mongoose.models.SaasProduct || mongoose.model<ISaasProduct>("SaasProduct", SaasProductSchema)
