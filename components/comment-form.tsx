"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare } from "lucide-react"
import { database } from "@/lib/firebase"
import { ref, push, onValue, serverTimestamp, query, orderByChild } from "firebase/database"

interface Comment {
  id: string
  name: string
  comment: string
  createdAt: number
}

export function CommentForm() {
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  })
  const [comments, setComments] = useState<Comment[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  // Fetch comments from Realtime Database when component mounts
  useEffect(() => {
    const commentsRef = ref(database, "comments")
    const commentsQuery = query(commentsRef, orderByChild("createdAt"))

    const unsubscribe = onValue(commentsQuery, (snapshot) => {
      const commentsData: Comment[] = []
      snapshot.forEach((childSnapshot) => {
        const comment = childSnapshot.val()
        commentsData.push({
          id: childSnapshot.key || "",
          name: comment.name,
          comment: comment.comment,
          createdAt: comment.createdAt,
        })
      })

      // Sort comments from newest to oldest
      setComments(commentsData.reverse())
    })

    return () => {
      // No direct unsubscribe method like in Firestore
      // We could use off() if needed
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")
    setSubmitSuccess(false)

    try {
      // Add comment to Realtime Database
      const commentsRef = ref(database, "comments")
      await push(commentsRef, {
        name: formData.name,
        comment: formData.comment,
        createdAt: serverTimestamp(),
      })

      // Reset form and show success message
      setFormData({ name: "", comment: "" })
      setSubmitSuccess(true)
      setTimeout(() => setSubmitSuccess(false), 3000)
    } catch (error) {
      console.error("Error adding comment:", error)
      setSubmitError("An error occurred while sending your comment. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Format comment date
  const formatDate = (timestamp: number | null) => {
    if (!timestamp) return "Just now"

    const now = new Date()
    const commentDate = new Date(timestamp)
    const diffTime = Math.abs(now.getTime() - commentDate.getTime())
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) {
      const diffHours = Math.floor(diffTime / (1000 * 60 * 60))
      if (diffHours === 0) {
        const diffMinutes = Math.floor(diffTime / (1000 * 60))
        return diffMinutes === 0 ? "Just now" : `${diffMinutes} minutes ago`
      }
      return `${diffHours} hours ago`
    } else if (diffDays === 1) {
      return "Yesterday"
    } else if (diffDays < 7) {
      return `${diffDays} days ago`
    } else {
      return commentDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    }
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-xl border border-border">
        {submitSuccess && (
          <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-xl flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Comment added successfully!
          </div>
        )}

        {submitError && (
          <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-xl">
            {submitError}
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-foreground/80">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-background border-border focus:border-primary"
            placeholder="Your Name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="comment" className="block text-sm font-medium text-foreground/80">
            Comment
          </label>
          <Textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
            className="w-full min-h-[100px] bg-background border-border focus:border-primary"
            placeholder="Write your comment here..."
          />
        </div>

        <Button
          type="submit"
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center">
              <MessageSquare className="mr-2 h-4 w-4" /> Post Comment
            </span>
          )}
        </Button>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-foreground/60 flex items-center">
          {comments.length > 0 ? (
            <>
              <MessageSquare className="h-4 w-4 mr-2 text-primary" />
              Recent Comments ({comments.length})
            </>
          ) : (
            "No comments yet"
          )}
        </h4>

        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="p-5 bg-card rounded-xl border border-border hover:border-primary transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="font-semibold text-foreground">{comment.name}</h5>
                  <span className="text-xs text-foreground/60">{formatDate(comment.createdAt)}</span>
                </div>
              </div>
              <p className="mt-3 text-foreground/80">{comment.comment}</p>
            </div>
          ))}
        </div>

        {comments.length === 0 && (
          <div className="text-center py-10 bg-card rounded-xl border border-border">
            <MessageSquare className="mx-auto h-10 w-10 mb-4 text-foreground/30" />
            <p className="text-foreground/60">Be the first to leave a comment!</p>
          </div>
        )}
      </div>
    </div>
  )
}
