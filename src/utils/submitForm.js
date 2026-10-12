// Helpers for sending form data to Google Forms (or WhatsApp as a fallback)

// True only when the form's actionUrl and every entry id are filled in siteConfig.js
export function isFormConfigured(form) {
  return Boolean(form.actionUrl) && Object.values(form.fields).every(Boolean);
}

// Sends the values to Google Forms.
// "no-cors" means the browser cannot read the reply, so if fetch does not
// throw we treat it as sent. This is normal for Google Forms.
export async function sendToGoogleForm(form, values) {
  const body = new URLSearchParams();
  Object.entries(form.fields).forEach(([key, entryId]) => {
    body.append(entryId, values[key] ?? "");
  });
  await fetch(form.actionUrl, { method: "POST", mode: "no-cors", body });
}

export function whatsappLink(number, text) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
