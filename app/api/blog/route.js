import { NextResponse } from "next/server"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"


import { db } from "@/lib/firebase"
import {
  getDocs,
  orderBy,
  query,
} from "firebase/firestore"

export async function POST(req) {
  const { title, content } = await req.json()

  try {
    const docRef = await addDoc(collection(db, "blogs"), {
      title,
      content,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      createdAt: serverTimestamp(),
    })

    return NextResponse.json({ success: true, id: docRef.id })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}

// ✅ GET BLOGS
export async function GET() {
    const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"))
    const snapshot = await getDocs(q)
  
    const blogs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  
    return NextResponse.json(blogs)
  }