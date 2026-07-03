import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

declare global {
  var mongooseCache: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null }
}

let cached = global.mongooseCache || { conn: null, promise: null }
global.mongooseCache = cached

export async function connectDB() {
  if (cached.conn) return cached.conn

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable is not set")
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((m) => m)
  }

  cached.conn = await cached.promise
  return cached.conn
}
