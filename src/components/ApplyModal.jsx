import FormModal from "./FormModal.jsx";
import { site } from "../data/siteConfig";
import { jobs } from "../data/jobs";

// The "Apply now" popup for internships. The role list comes from jobs.js.
export default function ApplyModal({ jobId, onClose }) {
  const openJobs = jobs.filter((job) => job.isOpen !== false);
  const selected = openJobs.find((j) => j.id === jobId);

  const fields = [
    { name: "name", label: "Full name", type: "text", required: true, autoComplete: "name" },
    {
      name: "whatsapp",
      label: "WhatsApp number",
      type: "tel",
      required: true,
      autoComplete: "tel-national",
      inputMode: "numeric",
      pattern: "[0-9]{10}",
      maxLength: 10,
      title: "Enter a 10 digit mobile number",
      placeholder: "10 digit number",
    },
    { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
    {
      name: "role",
      label: "Role",
      type: "select",
      required: true,
      options: openJobs.map((j) => ({ value: j.title, label: j.title })),
    },
    {
      name: "resume",
      label: "Resume link",
      type: "url",
      required: true,
      placeholder: "https://drive.google.com/...",
      hint: "Upload your resume to Google Drive, set sharing to Anyone with the link, and paste the link here.",
    },
  ];

  return (
    <FormModal
      title="Apply for an internship"
      description="Tell us about yourself. We will reach out if your profile fits."
      fields={fields}
      initialValues={{ name: "", whatsapp: "", email: "", role: selected ? selected.title : "", resume: "" }}
      formConfig={site.forms.apply}
      buildWhatsappText={(v) =>
        `Hi, I want to apply for ${v.role || "an internship"}.\nName: ${v.name}\nWhatsApp: ${v.whatsapp}\nEmail: ${v.email}\nResume: ${v.resume}`
      }
      submitLabel="Send application"
      successText="Thanks for applying. We will contact you if your profile matches."
      onClose={onClose}
    />
  );
}
