// =====================================================================
//  SITE SETTINGS  -  yahin se brand, contact aur Google Form links badlo
// =====================================================================

export const site = {
  name: "IndiaNextTech",
  academyName: "IndiaNextTech Academy",
  about:
    "Affordable online courses, free notes and internships for students who want to build real tech skills.",

  // Your main website (shown in footer)
  mainSite: "https://www.indianexttech.com",

  // WhatsApp number with country code, no + or spaces
  whatsappNumber: "919161431883",

  // Leave "" to hide it in the footer
  email: "",
  location: "Uttar Pradesh, India",

  // Leave any of these "" to hide that icon
  social: {
    github: "",
    linkedin: "",
    instagram: "",
    x: "",
  },

  // -------------------------------------------------------------------
  //  GOOGLE FORMS
  //  Setup steps README.md me likhe hain ("Google Form connect karna").
  //  Jab tak actionUrl khali hai, form submit hone par WhatsApp khulega
  //  (message pehle se likha hua), isliye site kabhi "broken" nahi dikhegi.
  // -------------------------------------------------------------------
  forms: {
    // "Enroll now" form
    enroll: {
      actionUrl: "", // e.g. https://docs.google.com/forms/d/e/XXXX/formResponse
      fields: {
        name: "", // e.g. entry.1234567890
        whatsapp: "",
        email: "",
        course: "",
      },
    },
    // "Apply now" form for internships
    apply: {
      actionUrl: "",
      fields: {
        name: "",
        whatsapp: "",
        email: "",
        role: "",
        resume: "",
      },
    },
  },
};
