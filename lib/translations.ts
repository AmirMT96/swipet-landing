export type Lang = "de" | "en";

export const translations = {
  de: {
    nav: {
      langLabel: "EN",
    },
    hero: {
      tagline: "Love at first sniff",
      cta: "Feedback geben →",
      secondary: "Updates erhalten",
    },
    feedback: {
      sectionTitle: "Was denkst du?",
      q1Label: "Was machst du?",
      q1Placeholder: "z.B. Projektmanager, Designer...",
      q2Label: "Was gefällt dir an der Idee?",
      q2Placeholder: "Deine Gedanken...",
      q3Label: "Was würdest du anders machen?",
      q3Placeholder: "Deine Verbesserungsvorschläge...",
      q4Label: "Würdest du die App nutzen?",
      q4Options: ["Ja, definitiv", "Vielleicht", "Eher nicht"],
      q5Label: "Darf ich mich bei dir melden?",
      q5Hint: "Name und E-Mail sind optional",
      q5NamePlaceholder: "Dein Name (optional)",
      q5EmailPlaceholder: "Deine E-Mail (optional)",
      submitButton: "Feedback senden",
      submitting: "Wird gesendet…",
      successTitle: "Danke für dein Feedback! 🐾",
      successMessage: "Ich melde mich bald bei dir.",
      errorMessage:
        "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
    },
    signup: {
      heading: "Sei dabei wenn wir launchen",
      subheading: "Kein Spam. Nur die wichtigsten Updates.",
      firstNamePlaceholder: "Vorname",
      lastNamePlaceholder: "Nachname",
      emailPlaceholder: "E-Mail-Adresse",
      button: "Dabei sein",
      submitting: "Wird gesendet…",
      successTitle: "Du bist dabei! 🐾",
      successMessage: "Wir melden uns wenn es soweit ist.",
      errorMessage:
        "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
    },
    about: {
      heading: `F\u00FCr Hunde gibt\u2019s jetzt den perfekten Match`,
      para1:
        `Swipet ist eine App, die Hunde mit Menschen sowie Hundebesitzer untereinander vernetzt \u2013 eine Art \u201ETinder f\u00FCr Hunde\u201C.`,
      para2:
        `\u00DCber die App erhalten Tierheime die M\u00F6glichkeit, ihre Hunde digital zu registrieren und sichtbar zu machen. Interessierte Nutzer k\u00F6nnen durch Profile swipen und gezielt nach einem passenden Hund suchen. Gleichzeitig schafft Swipet einen Mehrwert f\u00FCr bestehende Hundebesitzer: Die App erm\u00F6glicht es, andere Hundehalter in der N\u00E4he zu finden und gemeinsame \u201EGassi-Dates\u201C zu organisieren.`,
      para3:
        `Der MVP fokussiert sich bewusst auf Hunde \u2013 perspektivisch wird Swipet auf weitere Tierarten erweitert.`,
    },
    screenshots: {
      heading: "Swipet in Aktion",
      subtext: "Für Hundesuchende, Hundebesitzer und Tierheime.",
    },
    footer: {
      tagline: "Love at first sniff",
      copyright: "© 2026 Swipet. Alle Rechte vorbehalten.",
      linkedinLabel: "LinkedIn",
    },
  },

  en: {
    nav: {
      langLabel: "DE",
    },
    hero: {
      tagline: "Love at first sniff",
      cta: "Give feedback →",
      secondary: "Get updates",
    },
    feedback: {
      sectionTitle: "What do you think?",
      q1Label: "What do you do?",
      q1Placeholder: "e.g. Project Manager, Designer...",
      q2Label: "What do you like about the idea?",
      q2Placeholder: "Your thoughts...",
      q3Label: "What would you change?",
      q3Placeholder: "Your suggestions...",
      q4Label: "Would you use the app?",
      q4Options: ["Yes, definitely", "Maybe", "Probably not"],
      q5Label: "Can I follow up with you?",
      q5Hint: "Name and email are optional",
      q5NamePlaceholder: "Your name (optional)",
      q5EmailPlaceholder: "Your email (optional)",
      submitButton: "Send feedback",
      submitting: "Sending…",
      successTitle: "Thanks for your feedback! 🐾",
      successMessage: "I'll be in touch soon.",
      errorMessage: "Something went wrong. Please try again.",
    },
    signup: {
      heading: "Be the first to know when we launch",
      subheading: "No spam. Just the important updates.",
      firstNamePlaceholder: "First name",
      lastNamePlaceholder: "Last name",
      emailPlaceholder: "Email address",
      button: "I'm in",
      submitting: "Sending…",
      successTitle: "You're in! 🐾",
      successMessage: "We'll reach out when the time comes.",
      errorMessage: "Something went wrong. Please try again.",
    },
    about: {
      heading: "The perfect match for dogs \u2014 now a reality",
      para1:
        "Swipet is an app that connects dogs with people and dog owners with each other \u2013 a kind of \"Tinder for dogs\".",
      para2:
        "Shelters can digitally register and showcase their dogs on the platform. Interested users can swipe through profiles and search for the perfect match. At the same time, Swipet adds value for existing dog owners: the app makes it easy to find other dog owners nearby and arrange \"walking dates\" together.",
      para3:
        "The MVP deliberately focuses on dogs \u2013 with plans to expand Swipet to other animal species in the future.",
    },
    screenshots: {
      heading: "Swipet in Action",
      subtext: "For dog seekers, dog owners and shelters.",
    },
    footer: {
      tagline: "Love at first sniff",
      copyright: "© 2026 Swipet. All rights reserved.",
      linkedinLabel: "LinkedIn",
    },
  },
};

export type Translations = (typeof translations)["de"];
