import { NextResponse } from "next/server"

import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  orderBy,
  query,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore"

import { db } from "@/lib/firebase"

// ---------------- CREATE BLOG ----------------
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
    return NextResponse.json({ success: false, error: error.message })
  }
}

// ---------------- GET BLOGS ----------------
export async function GET() {
  try {
    const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"))
    const snapshot = await getDocs(q)

    const blogs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    return NextResponse.json(blogs)

  } catch (error) {
    return NextResponse.json({ success: false, error: error.message })
  }
}

// ---------------- UPDATE BLOG ----------------
export async function PUT(req) {
  try {
    const { id, title, content } = await req.json()

    const blogRef = doc(db, "blogs", id)

    await updateDoc(blogRef, {
      title,
      content,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
    })

    return NextResponse.json({ success: true, message: "Blog updated" })

  } catch (error) {
    return NextResponse.json({ success: false, error: error.message })
  }
}

// ---------------- DELETE BLOG ----------------
export async function DELETE(req) {
  try {
    const { id } = await req.json()

    await deleteDoc(doc(db, "blogs", id))

    return NextResponse.json({ success: true, message: "Blog deleted" })

  } catch (error) {
    return NextResponse.json({ success: false, error: error.message })
  }
}