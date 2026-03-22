"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Translations } from "@/lib/translations";

interface FeedbackFormProps {
  feedbackT: Translations["feedback"];
}

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  profession: string;
  likes: string;
  changes: string;
  wouldUse: string;
  name: string;
  email: string;
}

export default function FeedbackForm({ feedbackT }: FeedbackFormProps) {
  const { ref, isInView } = useInView();

  const [formData, setFormData] = useState<FormData>({
    profession: "",
    likes: "",
    changes: "",
    wouldUse: "",
    name: "",
    email: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const setWouldUse = (value: string) => {
    setFormData((prev) => ({ ...prev, wouldUse: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          profession: formData.profession,
          likes: formData.likes,
          changes: formData.changes,
          wouldUse: formData.wouldUse,
          name: formData.name,
          email: formData.email,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ profession: "", likes: "", changes: "", wouldUse: "", name: "", email: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "input-field";
  const textareaClass =
    "input-field resize-none min-h-[96px]";

  return (
    <section id="feedback" className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Section heading */}
        <div
          ref={ref}
          className={`fade-up text-center mb-12 ${isInView ? "visible" : ""}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-swipet-text tracking-tight mb-3">
            {feedbackT.sectionTitle}
          </h2>
          <div className="w-10 h-1 rounded-full bg-primary mx-auto" />
        </div>

        {/* Card */}
        <div
          className={`fade-up delay-200 bg-white rounded-[20px] shadow-card p-8 sm:p-10 ${
            isInView ? "visible" : ""
          }`}
        >
          {status === "success" ? (
            /* Success state */
            <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl">
                🐾
              </div>
              <h3 className="text-xl font-bold text-swipet-text">
                {feedbackT.successTitle}
              </h3>
              <p className="text-gray-500 text-sm">{feedbackT.successMessage}</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-primary text-sm underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                Weiteres Feedback geben
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7" noValidate>
              {/* Q1 */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-swipet-text">
                  {feedbackT.q1Label}
                </label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  placeholder={feedbackT.q1Placeholder}
                  className={inputClass}
                />
              </div>

              {/* Q2 */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-swipet-text">
                  {feedbackT.q2Label}
                </label>
                <textarea
                  name="likes"
                  value={formData.likes}
                  onChange={handleChange}
                  placeholder={feedbackT.q2Placeholder}
                  className={textareaClass}
                  rows={3}
                />
              </div>

              {/* Q3 */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-swipet-text">
                  {feedbackT.q3Label}
                </label>
                <textarea
                  name="changes"
                  value={formData.changes}
                  onChange={handleChange}
                  placeholder={feedbackT.q3Placeholder}
                  className={textareaClass}
                  rows={3}
                />
              </div>

              {/* Q4 – Pill toggles */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-swipet-text">
                  {feedbackT.q4Label}
                </label>
                <div className="flex flex-wrap gap-3">
                  {feedbackT.q4Options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setWouldUse(option)}
                      className={`px-5 py-2.5 rounded-full border-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                        formData.wouldUse === option
                          ? "bg-primary border-primary text-white shadow-md scale-[1.03]"
                          : "border-gray-200 text-gray-500 hover:border-primary/60 hover:text-primary"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q5 – Name + Email */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-swipet-text">
                  {feedbackT.q5Label}
                </label>
                <p className="text-xs text-gray-400 -mt-1">{feedbackT.q5Hint}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={feedbackT.q5NamePlaceholder}
                    className={inputClass}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={feedbackT.q5EmailPlaceholder}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Error message */}
              {status === "error" && (
                <p className="text-red-500 text-sm text-center bg-red-50 rounded-2xl py-3 px-4">
                  {feedbackT.errorMessage}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-primary text-white font-bold rounded-full text-base
                  shadow-lg hover:shadow-xl hover:brightness-105 hover:scale-[1.01]
                  active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed
                  transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30"
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
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
                    {feedbackT.submitting}
                  </span>
                ) : (
                  feedbackT.submitButton
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
