import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
import Link from "next/link"
import { doc, getDoc } from "firebase/firestore";
// async function getBlogs() {

//   // Use VERCEL_URL if it exists, otherwise fallback to localhost
//   const baseUrl = process.env.NODE_ENV === 'production' 
//   ? `https://${process.env.VERCEL_URL}` // Vercel automatically ye variable deta hai
//   : "http://localhost:3000";

//   const res = await fetch(`${baseUrl}/api/blog`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error('Failed to fetch blogs');
//   }

//   return res.json();
// }

    // ✅ GET BLOGS
    const getBlogs = async ()=>{
 async function  GET() {
        const q =  query(collection(db, "blogs"), orderBy("createdAt", "desc"))
        const snapshot = await getDocs(q)
    
        const blogs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        }))
    
        return blogs
    }

    }
    
   

export default async function BlogPage() {
  const blogs = await getBlogs()
  console.log("blog",blogs)

  return (
    <div>
      <Accordion
        type="single"
        collapsible
        defaultValue="shipping"
        className=" flex   gap-6 justify-center items-center md:w-[900px] !m-auto"
      >
          {blogs?.map((blog) => {
    const text = blog.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

    return (
      <AccordionItem
        key={blog.id}
        value={`blog-${blog.id}`}
        className="bg-[#003d73] !px-4 !py-4 rounded-xl text-white w-full h-auto"
      >
        <AccordionTrigger className="flex gap-2">
          <h4 className="font-[Orbitron] font-bold md:text-xl text-lg">
            {blog.title}
          </h4>
        </AccordionTrigger>
        <AccordionContent className="text-lg !h-auto">
        {text.length > 150 ? (
    <>
      {text.slice(0, 200)}...{' '}
      <Link href={`/resources/${blog.slug}`} className="text-blue-400 underline hover:text-blue-300">
        Read More
      </Link>
    </>
  ) : (
    text
  )}
        </AccordionContent>
      </AccordionItem>
    );
  })}

</Accordion>
    </div>
  )
}