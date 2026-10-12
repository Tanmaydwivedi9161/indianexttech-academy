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
      actionUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLScc8o0_fuyZ8txdNXh6d6uQetsixrDzFGWfr54pORADDihMlw/formResponse",
      fields: {
        name: "entry.673733712",
        whatsapp: "entry.929956249",
        email: "entry.777100734",
        course: "entry.537627584",
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
