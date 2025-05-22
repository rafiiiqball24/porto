"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const formData = new FormData(form)
      const response = await fetch("https://formspree.io/f/mrbqvekz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("An error occurred while sending the message")
      }

      form.reset()
      setSubmitSuccess(true)
      setTimeout(() => setSubmitSuccess(false), 3000)
    } catch (error) {
      console.error("Error sending message:", error)
      setSubmitError("An error occurred while sending the message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="space-y-6 bg-card p-8 rounded-2xl shadow-lg border border-border"
    >
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
          Message sent successfully! Thank you for contacting me.
        </div>
      )}

      {submitError && (
        <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-xl">{submitError}</div>
      )}

      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-foreground/80">
          Name
        </label>
        <Input
          id="name"
          name="name"
          required
          className="w-full bg-background border-border focus:border-primary"
          placeholder="Your Name"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-foreground/80">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          className="w-full bg-background border-border focus:border-primary"
          placeholder="email@example.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-foreground/80">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          className="w-full min-h-[150px] bg-background border-border focus:border-primary"
          placeholder="Write Your Message Here..."
        />
      </div>

      <Button type="submit" className="w-full btn-futuristic py-6" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
            <Send className="mr-2 h-4 w-4" /> Send Message
          </span>
        )}
      </Button>
    </form>
  )
}
