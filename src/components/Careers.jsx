import { jobs } from "../data/jobs";
import { site } from "../data/siteConfig";
import { whatsappLink } from "../utils/submitForm";
import JobCard from "./JobCard.jsx";
import "../styles/careers.css";

export default function Careers({ onApply }) {
  // A job is shown unless you set isOpen: false in jobs.js
  const openJobs = jobs.filter((job) => job.isOpen !== false);

  return (
    <section className="section" id="careers">
      <div className="container">
        <div className="section__head">
          <h2>Internships at {site.name}</h2>
          <p>Learn on real work. Pick a role and apply with a short form.</p>
        </div>

        {openJobs.length === 0 ? (
          <p className="empty">
            No openings right now. Send your resume on{" "}
            <a
              href={whatsappLink(site.whatsappNumber, "Hi, I want to work with IndiaNextTech.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>{" "}
            and we will keep it for the next round.
          </p>
        ) : (
          <ul className="jobs">
            {openJobs.map((job) => (
              <JobCard key={job.id} job={job} onApply={onApply} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
