import { db } from "@/lib/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
import { NextResponse } from "next/server"

export async function GET(req, { params }) {
  const { slug } = params

  if (!slug) {
    return NextResponse.json({ error: "Slug missing" }, { status: 400 })
  }

  const q = query(
    collection(db, "blogs"),
    where("slug", "==", slug)
  )

  const snapshot = await getDocs(q)

  if (snapshot.empty) {
    return NextResponse.json(null)
  }

  const blog = {
    id: snapshot.docs[0].id,
    ...snapshot.docs[0].data(),
  }

  return NextResponse.json(blog)
}