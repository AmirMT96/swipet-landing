"use client";

import { useState } from "react";
import { translations, Lang } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import FeedbackForm from "@/components/FeedbackForm";
import EmailSignup from "@/components/EmailSignup";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<Lang>("de");
  const t = translations[lang];

  return (
    <main className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />
      <HeroSection heroT={t.hero} />
      <ScreenshotsSection screenshotsT={t.screenshots} />
      <FeedbackForm feedbackT={t.feedback} />
      <EmailSignup signupT={t.signup} />
      <Footer footerT={t.footer} />
    </main>
  );
}
