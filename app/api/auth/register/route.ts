import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { connectDB } from "@/lib/db"
import { User } from "@/lib/models/user"

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()
    await connectDB()

    const existing = await User.findOne({ email })
    if (existing) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    const hashed = await bcrypt.hash(password, 12)
    const user = await User.create({ name, email, password: hashed, provider: "credentials" })

    return NextResponse.json({ id: user._id, name: user.name, email: user.email })
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
