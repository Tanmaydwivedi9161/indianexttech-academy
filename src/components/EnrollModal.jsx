import FormModal from "./FormModal.jsx";
import { site } from "../data/siteConfig";
import { courses, formatFee } from "../data/courses";

// The "Enroll now" popup. The course list comes from courses.js, so new
// courses show up here automatically.
export default function EnrollModal({ courseId, onClose }) {
  const selected = courses.find((c) => c.id === courseId);

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
      name: "course",
      label: "Course",
      type: "select",
      required: true,
      // value is the course title, so your Google Sheet shows the course name
      options: courses.map((c) => ({ value: c.title, label: `${c.title} (${formatFee(c.fee)})` })),
    },
  ];

  return (
    <FormModal
      title="Enroll now"
      description="Share your details. We will contact you on WhatsApp."
      fields={fields}
      initialValues={{ name: "", whatsapp: "", email: "", course: selected ? selected.title : "" }}
      formConfig={site.forms.enroll}
      buildWhatsappText={(v) =>
        `Hi, I want to enroll in ${v.course || "a course"}.\nName: ${v.name}\nWhatsApp: ${v.whatsapp}\nEmail: ${v.email}`
      }
      submitLabel="Enroll now"
      successText="Thanks. We will message you on WhatsApp soon with the next steps."
      onClose={onClose}
    />
  );
}
