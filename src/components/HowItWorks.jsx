import { site } from "../data/siteConfig";
import { whatsappLink } from "../utils/submitForm";
import { WhatsAppIcon } from "./Icons.jsx";
import "../styles/howitworks.css";

// Edit the three steps here.
const steps = [
  { title: "Pick a course", text: "Press Enroll now on the course you like." },
  { title: "Fill the short form", text: "Add your name, WhatsApp number and email." },
  { title: "We contact you", text: "We message you on WhatsApp with the start details and how to pay." },
];

export default function HowItWorks() {
  return (
    <section className="section how" aria-labelledby="how-title">
      <div className="container how__inner">
        <div>
          <h2 id="how-title">How enrolling works</h2>
          <p className="how__lead">No login and no payment on this page. You only share your details.</p>
          <a
            className="btn btn--secondary how__ask"
            href={whatsappLink(site.whatsappNumber, "Hi, I have a question about your courses.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> Ask a question on WhatsApp
          </a>
        </div>

        <ol className="how__steps">
          {steps.map((step, i) => (
            <li key={step.title}>
              <span className="how__num">{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
