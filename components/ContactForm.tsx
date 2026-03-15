"use client";

import { useState, type FormEvent } from "react";
import { IconArrowRight } from "@/components/icons";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const canSubmit =
    name.trim().length >= 2 && isEmail(email) && description.trim().length >= 10;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) {
      setStatus({
        kind: "error",
        message: "Add your name, a valid email, and a short description of the project."
      });
      return;
    }

    setStatus({ kind: "submitting" });
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus({
      kind: "success",
      message: "Thanks. We will reach out within one business day with next steps."
    });
    setName("");
    setEmail("");
    setDescription("");
  }

  return (
    <form className="formGrid" onSubmit={onSubmit}>
      <div className="fieldGroup">
        <label htmlFor="name" className="fieldLabel">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          autoComplete="name"
          className="fieldControl"
        />
      </div>

      <div className="fieldGroup">
        <label htmlFor="email" className="fieldLabel">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@company.com"
          autoComplete="email"
          className="fieldControl"
        />
      </div>

      <div className="fieldGroup">
        <label htmlFor="description" className="fieldLabel">
          Project description
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="What are you building, what is the timeline, and where is the main delivery risk?"
          rows={6}
          className="fieldControl"
          style={{ resize: "vertical" }}
        />
      </div>

      <button
        type="submit"
        className="btnPrimary"
        disabled={!canSubmit || status.kind === "submitting"}
        style={{
          width: "100%",
          opacity: !canSubmit || status.kind === "submitting" ? 0.7 : 1
        }}
      >
        {status.kind === "submitting" ? "Sending..." : "Discuss Your Project"}
        <IconArrowRight />
      </button>

      <div
        aria-live="polite"
        className="formNote"
        style={{
          color:
            status.kind === "error"
              ? "#ff9f96"
              : status.kind === "success"
                ? "#9bf5d0"
                : "var(--muted)"
        }}
      >
        {status.kind === "idle"
          ? "We never share contact details outside the conversation."
          : status.kind === "submitting"
            ? "Preparing your message..."
            : status.message}
      </div>
    </form>
  );
}
