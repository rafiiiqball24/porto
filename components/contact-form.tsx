"use client"

import { useState, type FormEvent } from "react"
import { ArrowUpRight, LoaderCircle } from "lucide-react"

type FormState = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle")

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    // Quietly ignore bot submissions that fill the hidden honeypot field.
    if (formData.get("_gotcha")) return

    setState("submitting")

    try {
      const response = await fetch("https://formspree.io/f/mrbqvekz", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (!response.ok) throw new Error("Message could not be sent")

      form.reset()
      setState("success")
    } catch {
      setState("error")
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" maxLength={80} placeholder="Your name" required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            maxLength={160}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="message">Project or message</label>
        <textarea
          id="message"
          name="message"
          minLength={10}
          maxLength={2000}
          placeholder="Tell me a little about what you are building."
          required
        />
      </div>

      <p className="form-note">Your details are used only to reply to this message.</p>

      <button type="submit" disabled={state === "submitting"}>
        {state === "submitting" ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending
          </>
        ) : (
          <>
            Send message
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>

      <div aria-live="polite" aria-atomic="true">
        {state === "success" && (
          <p className="form-status" data-state="success">
            Message sent. Thank you — I will get back to you soon.
          </p>
        )}
        {state === "error" && (
          <p className="form-status" data-state="error">
            Something went wrong. Please email me directly instead.
          </p>
        )}
      </div>
    </form>
  )
}
