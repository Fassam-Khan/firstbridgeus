    import { NextResponse } from "next/server"
    import { addDoc, collection, serverTimestamp } from "firebase/firestore"


    import { db } from "@/lib/firebase"
    import {
    getDocs,
    orderBy,
    query,
    deleteDoc,
    updateDoc,
    where
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

    // ❌ DELETE BLOG
    export async function DELETE(req) {
        try {
        const { slug } = await req.json()
    
        // 🔍 find blog by slug
        const q = query(collection(db, "blogs"), where("slug", "==", slug))
        const snapshot = await getDocs(q)
    
        if (snapshot.empty) {
            return NextResponse.json({ success: false, message: "Blog not found" })
        }
    
        // 🗑 delete first match
        const blogDoc = snapshot.docs[0]
        await deleteDoc(doc(db, "blogs", blogDoc.id))
    
        return NextResponse.json({ success: true })
        } catch (error) {
        console.error(error)
        return NextResponse.json({ success: false, error })
        }
    }

    // ✏️ UPDATE BLOG
export async function PUT(req) {
    try {
      const { slug, title, content } = await req.json()
  
      // 🔍 find blog by slug
      const q = query(collection(db, "blogs"), where("slug", "==", slug))
      const snapshot = await getDocs(q)
  
      if (snapshot.empty) {
        return NextResponse.json({ success: false, message: "Blog not found" })
      }
  
      const blogDoc = snapshot.docs[0]
  
      // ✏️ update
      await updateDoc(doc(db, "blogs", blogDoc.id), {
        title,
        content,
      })
  
      return NextResponse.json({ success: true })
    } catch (error) {
      console.error(error)
      return NextResponse.json({ success: false, error })
    }
  }