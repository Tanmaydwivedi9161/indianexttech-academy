import { useEffect, useRef, useState } from "react";
import { site } from "../data/siteConfig";
import { isFormConfigured, sendToGoogleForm, whatsappLink } from "../utils/submitForm";
import { CloseIcon, CheckIcon } from "./Icons.jsx";
import "../styles/modal.css";

// One reusable popup form. EnrollModal and ApplyModal both use it.
//
// Props:
//  title, description   text at the top
//  fields               list of inputs (see EnrollModal.jsx for an example)
//  initialValues        starting values, e.g. { course: "React Mastery" }
//  formConfig           the Google Form settings from siteConfig.js
//  buildWhatsappText    function(values) -> message used when Google Form is not set up
//  submitLabel          text on the submit button
//  successText          message shown after sending
export default function FormModal({
  title,
  description,
  fields,
  initialValues,
  formConfig,
  buildWhatsappText,
  submitLabel = "Submit",
  successText,
  onClose,
}) {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | whatsapp | error
  const firstFieldRef = useRef(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  // Close on Escape, lock page scroll while open, focus first field
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeRef.current();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const whatsappUrl = () => whatsappLink(site.whatsappNumber, buildWhatsappText(values));

  async function handleSubmit(e) {
    e.preventDefault();

    if (isFormConfigured(formConfig)) {
      setStatus("sending");
      try {
        await sendToGoogleForm(formConfig, values);
        setStatus("sent");
      } catch {
        setStatus("error");
      }
    } else {
      // Google Form not connected yet: open WhatsApp with the details filled in
      window.open(whatsappUrl(), "_blank", "noopener");
      setStatus("whatsapp");
    }
  }

  const done = status === "sent" || status === "whatsapp";

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button type="button" className="icon-btn modal__close" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>

        {done ? (
          <div className="modal__done">
            <span className="modal__tick">
              <CheckIcon />
            </span>
            <h2 id="modal-title">{status === "sent" ? "Details received" : "One more step"}</h2>
            <p>
              {status === "sent"
                ? successText
                : "WhatsApp should have opened with your details. Press send there to finish."}
            </p>
            {status === "whatsapp" && (
              <a className="btn btn--secondary" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                Open WhatsApp again
              </a>
            )}
            <button type="button" className="btn btn--primary" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 id="modal-title" className="modal__title">
              {title}
            </h2>
            {description && <p className="modal__desc">{description}</p>}

            <form className="modal__form" onSubmit={handleSubmit}>
              {fields.map((field, index) => (
                <label className="field" key={field.name}>
                  <span className="field__label">{field.label}</span>

                  {field.type === "select" ? (
                    <select
                      name={field.name}
                      value={values[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      ref={index === 0 ? firstFieldRef : null}
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      {field.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      name={field.name}
                      type={field.type}
                      value={values[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      autoComplete={field.autoComplete}
                      inputMode={field.inputMode}
                      pattern={field.pattern}
                      maxLength={field.maxLength}
                      title={field.title}
                      placeholder={field.placeholder}
                      ref={index === 0 ? firstFieldRef : null}
                    />
                  )}

                  {field.hint && <span className="field__hint">{field.hint}</span>}
                </label>
              ))}

              {status === "error" && (
                <p className="modal__error" role="alert">
                  Could not send your details. Check your internet and try again, or{" "}
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                    message us on WhatsApp
                  </a>
                  .
                </p>
              )}

              <button type="submit" className="btn btn--primary btn--lg modal__submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : submitLabel}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
