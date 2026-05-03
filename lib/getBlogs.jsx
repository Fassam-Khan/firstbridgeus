// lib/getBlogs.js
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

// In your Firebase fetch function
export async function getBlogs() {
  const snapshot = await getDocs(collection(db, "blogs"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
