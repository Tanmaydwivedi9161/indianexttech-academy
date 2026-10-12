import { site } from "../data/siteConfig";
import { whatsappLink } from "../utils/submitForm";
import { WhatsAppIcon, MailIcon } from "./Icons.jsx";
import "../styles/footer.css";

const socials = [
  { key: "github", label: "GitHub" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "instagram", label: "Instagram" },
  { key: "x", label: "X" },
];

export default function Footer() {
  const activeSocials = socials.filter((s) => site.social[s.key]);

  return (
    <footer className="footer" id="contact">
      <div className="container footer__grid">
        <div>
          <p className="footer__brand">{site.academyName}</p>
          <p className="footer__about">{site.about}</p>
        </div>

        <div>
          <h3 className="footer__title">Explore</h3>
          <ul className="footer__list">
            <li><a href="#courses">Courses</a></li>
            <li><a href="#notes">Free notes</a></li>
            <li><a href="#careers">Careers</a></li>
            <li>
              <a href={site.mainSite} target="_blank" rel="noopener noreferrer">
                Main website
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer__title">Contact</h3>
          <ul className="footer__list">
            <li>
              <a
                className="footer__contact"
                href={whatsappLink(site.whatsappNumber, "Hi, I want to know more about your courses.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon /> WhatsApp us
              </a>
            </li>
            {site.email && (
              <li>
                <a className="footer__contact" href={`mailto:${site.email}`}>
                  <MailIcon /> {site.email}
                </a>
              </li>
            )}
            {site.location && <li className="footer__place">{site.location}</li>}
          </ul>

          {activeSocials.length > 0 && (
            <ul className="footer__social">
              {activeSocials.map((s) => (
                <li key={s.key}>
                  <a href={site.social[s.key]} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="container footer__bottom">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
