import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import { SaasProduct } from "@/lib/models/saas-product"

export async function GET() {
  try {
    await connectDB()
    const products = await SaasProduct.find().sort({ order: 1 })
    return NextResponse.json(products)
  } catch {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    await connectDB()
    const body = await req.json()
    const product = await SaasProduct.create(body)
    return NextResponse.json(product, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Failed to create" }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    await connectDB()
    const body = await req.json()
    const { _id, ...data } = body
    const product = await SaasProduct.findByIdAndUpdate(_id, data, { returnDocument: 'after' })
    if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 })
    return NextResponse.json(product)
  } catch {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    await connectDB()
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 })
    await SaasProduct.findByIdAndDelete(id)
    return NextResponse.json({ message: "Deleted" })
  } catch {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 })
  }
}
