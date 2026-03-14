"use client";

import { useMemo, useState } from "react";
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

  const canSubmit = useMemo(() => {
    return name.trim().length >= 2 && isEmail(email) && description.trim().length >= 10;
  }, [name, email, description]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) {
      setStatus({
        kind: "error",
        message: "Please add your name, a valid email, and a short project description."
      });
      return;
    }

    setStatus({ kind: "submitting" });
    await new Promise((r) => setTimeout(r, 700));
    setStatus({
      kind: "success",
      message: "Thanks. We will reach out within 1 business day with next steps."
    });
    setName("");
    setEmail("");
    setDescription("");
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "grid", gap: 6 }}>
        <label htmlFor="name" style={{ fontSize: 13, color: "var(--muted)" }}>
          Name
        </label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          autoComplete="name"
          style={inputStyle}
        />
      </div>

      <div style={{ display: "grid", gap: 6 }}>
        <label htmlFor="email" style={{ fontSize: 13, color: "var(--muted)" }}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          autoComplete="email"
          style={inputStyle}
        />
      </div>

      <div style={{ display: "grid", gap: 6 }}>
        <label htmlFor="desc" style={{ fontSize: 13, color: "var(--muted)" }}>
          Project description
        </label>
        <textarea
          id="desc"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="What are you building, when do you need it, and what does success look like?"
          rows={5}
          style={{ ...inputStyle, resize: "vertical", paddingTop: 12 }}
        />
      </div>

      <button
        type="submit"
        className="btnPrimary"
        disabled={!canSubmit || status.kind === "submitting"}
        style={{
          width: "100%",
          justifyContent: "center",
          opacity: !canSubmit || status.kind === "submitting" ? 0.7 : 1
        }}
      >
        {status.kind === "submitting" ? "Sending..." : "Discuss Your Project"}{" "}
        <IconArrowRight />
      </button>

      <div
        aria-live="polite"
        style={{
          minHeight: 18,
          fontSize: 13,
          color:
            status.kind === "error"
              ? "#b42318"
              : status.kind === "success"
                ? "#0b5d1e"
                : "var(--muted)"
        }}
      >
        {status.kind === "error"
          ? status.message
          : status.kind === "success"
            ? status.message
            : "We will never share your contact details."}
      </div>
    </form>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 14,
  border: "1px solid rgba(37, 99, 235, 0.18)",
  background: "rgba(255,255,255,0.9)",
  outline: "none",
  boxShadow: "0 1px 0 rgba(37, 99, 235, 0.05)",
  transition: "box-shadow 180ms ease, border-color 180ms ease"
};

