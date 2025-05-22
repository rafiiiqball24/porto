"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare } from "lucide-react"

interface Comment {
  id: string
  name: string
  comment: string
  createdAt: number
}

export function CommentFormLocal() {
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  })
  const [comments, setComments] = useState<Comment[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem("portfolio-comments")
    if (savedComments) {
      setComments(JSON.parse(savedComments))
    }
  }, [])

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("portfolio-comments", JSON.stringify(comments))
  }, [comments])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create new comment
    const newComment: Comment = {
      id: Date.now().toString(),
      name: formData.name,
      comment: formData.comment,
      createdAt: Date.now(),
    }

    // Add to comments array
    setComments((prevComments) => [newComment, ...prevComments])

    // Reset form and show success message
    setFormData({ name: "", comment: "" })
    setSubmitSuccess(true)
    setTimeout(() => setSubmitSuccess(false), 3000)
    setIsSubmitting(false)
  }

  // Format date
  const formatDate = (timestamp: number) => {
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
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        {submitSuccess && <div className="p-3 bg-green-100 text-green-700 rounded-md">Comment added successfully!</div>}

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
            Comment
          </label>
          <Textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
            className="w-full min-h-[80px]"
            placeholder="Write your comment here..."
          />
        </div>

        <Button
          type="submit"
          variant="outline"
          className="border-red-500 text-red-500 hover:bg-red-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-red-500"
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
      <div className="space-y-4 mt-6">
        <h4 className="text-sm font-medium text-gray-500">
          {comments.length > 0 ? `Recent Comments (${comments.length})` : "No comments yet"}
        </h4>

        {comments.map((comment) => (
          <div key={comment.id} className="p-4 bg-gray-50 rounded-md">
            <div className="flex justify-between items-start">
              <h5 className="font-medium text-gray-800">{comment.name}</h5>
              <span className="text-xs text-gray-500">{formatDate(comment.createdAt)}</span>
            </div>
            <p className="mt-2 text-gray-600">{comment.comment}</p>
          </div>
        ))}

        {comments.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <MessageSquare className="mx-auto h-8 w-8 mb-2 opacity-50" />
            <p>Be the first to leave a comment!</p>
          </div>
        )}
      </div>
    </div>
  )
}
