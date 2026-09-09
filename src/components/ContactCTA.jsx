import { useState } from "react";
import { profile } from "../data/profile";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const empty = { name: "", email: "", message: "" };

export default function ContactCTA() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) {
      next.name = "Name must be at least 2 characters.";
    }
    if (!emailPattern.test(form.email.trim())) {
      next.email = "Enter a valid email.";
    }
    if (form.message.trim().length < 10) {
      next.message = "Message must be at least 10 characters.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    setStatus("sending");

    // TODO: set VITE_FORM_ENDPOINT (Formspree/EmailJS/etc). Falls back to Web3Forms when an access key exists.
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT || "https://api.web3forms.com/submit";
    const accessKey = import.meta.env.VITE_WEB3_FORMS_ACCESS_KEY;

    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      };
      if (accessKey) {
        payload.access_key = accessKey;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const result = await response.json().catch(() => ({}));
      if (result.success === false) {
        throw new Error("Provider rejected");
      }

      setStatus("success");
      setForm(empty);
    } catch (error) {
      console.error("Contact form error", error);
      setStatus("error");
    }
  };

  const fieldClass =
    "w-full border border-line bg-bg px-3 py-2 text-sm text-fg placeholder:text-muted/70";

  return (
    <section id="contact" aria-labelledby="contact-heading" className="px-4 py-20 md:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Contact</p>
          <h2 id="contact-heading" className="mt-3 text-3xl font-semibold sm:text-4xl">
            Interested in working together?
          </h2>
          <p className="mt-4 text-muted">{profile.availability}</p>
          <a href={`mailto:${profile.email}`} className="mt-6 inline-block text-xl text-accent hover:text-accent-dim sm:text-2xl">
            {profile.email}
          </a>
          <p className="mt-4 text-sm text-muted">{profile.responseTime}</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4 border border-line bg-surface p-5">
          <div>
            <label htmlFor="name" className="mb-1 block font-mono text-xs uppercase tracking-widest text-muted">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              className={fieldClass}
              autoComplete="name"
            />
            {errors.name ? <p className="mt-1 text-xs text-red-400">{errors.name}</p> : null}
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block font-mono text-xs uppercase tracking-widest text-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              className={fieldClass}
              autoComplete="email"
            />
            {errors.email ? <p className="mt-1 text-xs text-red-400">{errors.email}</p> : null}
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block font-mono text-xs uppercase tracking-widest text-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              className={`${fieldClass} resize-none`}
            />
            {errors.message ? <p className="mt-1 text-xs text-red-400">{errors.message}</p> : null}
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-accent py-2.5 text-sm font-medium text-bg disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {status === "success" ? (
            <p className="text-sm text-accent" role="status">
              Message sent. I&apos;ll get back to you soon.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="text-sm text-red-400" role="alert">
              Could not send. Email me directly at {profile.email}.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
