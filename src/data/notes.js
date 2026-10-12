// =====================================================================
//  FREE NOTES (PDF)
//
//  ADD:
//   1. Apni PDF file ko  public/notes/  folder me daalo.
//   2. Neeche ek naya { ... } block banao aur "file" me wahi file ka naam likho.
//  REMOVE: block delete karo (PDF bhi delete kar sakte ho).
//
//  category: kuch bhi likh sakte ho. Same naam wale notes automatically
//  ek filter button ke neeche aa jayenge.
// =====================================================================

export const notes = [
  {
    id: "python-basics",
    title: "Python Basics Notes",
    description: "Syntax, data types, loops and functions in one place.",
    category: "Python",
    file: "python-basics.pdf",
  },
  {
    id: "html-css-cheatsheet",
    title: "HTML & CSS Cheat Sheet",
    description: "Common tags, selectors and Flexbox or Grid patterns for quick revision.",
    category: "Web Development",
    file: "html-css-cheatsheet.pdf",
  },
  {
    id: "aptitude-formulas",
    title: "Aptitude Formula Sheet",
    description: "Important formulas and shortcuts for placement tests.",
    category: "Placement",
    file: "aptitude-formulas.pdf",
  },
];
