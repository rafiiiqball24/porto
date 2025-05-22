import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { database } from "@/lib/firebase"
import { ref, push, get, serverTimestamp } from "firebase/database"

// API Route untuk mendapatkan semua komentar
export async function GET() {
  try {
    const commentsRef = ref(database, "comments")
    const snapshot = await get(commentsRef)

    const comments: any[] = []
    snapshot.forEach((childSnapshot) => {
      comments.push({
        id: childSnapshot.key,
        ...childSnapshot.val(),
      })
    })

    // Urutkan komentar dari yang terbaru ke yang terlama
    comments.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))

    return NextResponse.json({ comments })
  } catch (error) {
    console.error("Error getting comments:", error)
    return NextResponse.json({ error: "Failed to get comments" }, { status: 500 })
  }
}

// API Route untuk menambahkan komentar baru
export async function POST(request: NextRequest) {
  try {
    const { name, comment } = await request.json()

    if (!name || !comment) {
      return NextResponse.json({ error: "Name and comment are required" }, { status: 400 })
    }

    const commentsRef = ref(database, "comments")
    const newCommentRef = await push(commentsRef, {
      name,
      comment,
      createdAt: serverTimestamp(),
    })

    return NextResponse.json({
      success: true,
      id: newCommentRef.key,
      message: "Comment added successfully",
    })
  } catch (error) {
    console.error("Error adding comment:", error)
    return NextResponse.json({ error: "Failed to add comment" }, { status: 500 })
  }
}
