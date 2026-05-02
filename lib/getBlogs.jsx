// lib/getBlogs.js
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getBlogs() {
  try {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Firebase error:", error);
    return [];
  }
}