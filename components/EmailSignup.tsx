"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Translations } from "@/lib/translations";

interface EmailSignupProps {
  signupT: Translations["signup"];
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function EmailSignup({ signupT }: EmailSignupProps) {
  const { ref, isInView } = useInView();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, lastName }),
      });

      if (res.ok) {
        setStatus("success");
        setFirstName("");
        setLastName("");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "flex-1 min-w-0 border border-gray-200 rounded-full px-5 py-3.5 text-sm " +
    "text-swipet-text placeholder-gray-400 bg-white shadow-sm " +
    "focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary " +
    "transition-all duration-200";

  return (
    <section
      id="signup"
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(240,149,106,0.07) 0%, rgba(226,114,137,0.10) 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "rgba(226,114,137,0.15)" }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "rgba(240,149,106,0.15)" }}
      />

      <div className="max-w-xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`fade-up text-center ${isInView ? "visible" : ""}`}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-card text-2xl mb-6">
            🐾
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-swipet-text tracking-tight mb-3">
            {signupT.heading}
          </h2>
          <p className="text-gray-400 text-sm mb-10">{signupT.subheading}</p>

          {status === "success" ? (
            <div className="bg-white rounded-[20px] shadow-card px-8 py-10 flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                🎉
              </div>
              <h3 className="text-lg font-bold text-swipet-text">
                {signupT.successTitle}
              </h3>
              <p className="text-gray-400 text-sm">{signupT.successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name row */}
              <div className="flex gap-3">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder={signupT.firstNamePlaceholder}
                  className={inputClass}
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder={signupT.lastNamePlaceholder}
                  className={inputClass}
                />
              </div>

              {/* Email + Button row */}
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={signupT.emailPlaceholder}
                  required
                  className={inputClass}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-7 py-3.5 bg-primary text-white font-semibold rounded-full text-sm
                    shadow-md hover:shadow-lg hover:brightness-105 hover:scale-[1.02]
                    active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed
                    transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30
                    whitespace-nowrap"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      {signupT.submitting}
                    </span>
                  ) : (
                    signupT.button
                  )}
                </button>
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">
                  {signupT.errorMessage}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
