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
      heading: "Hunde verbinden. Menschen begeistern.",
      subtext:
        "Swipet bringt zusammen, was zusammengehört — Hunde, die ein Zuhause suchen, Besitzer, die Abenteuer teilen wollen, und Tierheime, die endlich sichtbar werden.",
      features: [
        {
          icon: "🏠",
          title: "Hunde adoptieren",
          text: "Tierheime stellen ihre Hunde vor. Du findest deinen Traumhund — so einfach wie Swipe, so bedeutsam wie Liebe auf den ersten Blick.",
        },
        {
          icon: "🐕",
          title: "Gassi-Dates",
          text: "Finde Hundebesitzer in deiner Nähe und verabrede gemeinsame Spaziergänge. Für Hunde, die spielen wollen — und Menschen, die Gleichgesinnte suchen.",
        },
        {
          icon: "❤️",
          title: "Matches, die zählen",
          text: "Kein endloses Scrollen, kein Zufall. Swipet verbindet auf Basis von Persönlichkeit, Standort und Lebensweise — für Begegnungen, die wirklich passen.",
        },
      ],
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
      heading: "Connecting dogs. Inspiring people.",
      subtext:
        "Swipet brings together what belongs together — dogs looking for a home, owners who want to share adventures, and shelters that finally get the visibility they deserve.",
      features: [
        {
          icon: "🏠",
          title: "Adopt a dog",
          text: "Shelters showcase their dogs. You find your perfect match — as easy as a swipe, as meaningful as love at first sight.",
        },
        {
          icon: "🐕",
          title: "Walking dates",
          text: "Find dog owners near you and arrange walks together. For dogs that want to play — and people who want to find their tribe.",
        },
        {
          icon: "❤️",
          title: "Matches that matter",
          text: "No endless scrolling, no guesswork. Swipet matches based on personality, location and lifestyle — for connections that truly fit.",
        },
      ],
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
