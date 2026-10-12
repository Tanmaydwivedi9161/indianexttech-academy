import { courses, tracks, formatFee } from "../data/courses";
import "../styles/hero.css";

// The "Pick a path" card is built from courses.js, so it updates by itself
// when you add, remove or reorder courses. Tracks with roadmap: true show up.
export default function Hero() {
  const roadmapTracks = tracks.filter((t) => t.roadmap);
  const lowestFee = Math.min(...courses.map((c) => c.fee));

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1>From your first line of HTML to your first job.</h1>
          <p className="hero__lead">
            Online courses in web development, Python, AI and placement prep. Priced for students and
            taught step by step.
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary btn--lg" href="#courses">
              Browse courses
            </a>
            <a className="btn btn--secondary btn--lg" href="#notes">
              Get free notes
            </a>
          </div>

          <ul className="hero__facts">
            <li>
              <strong>{courses.length}</strong> courses
            </li>
            <li>
              <strong>100%</strong> online
            </li>
            <li>
              Fees from <strong>{formatFee(lowestFee)}</strong>
            </li>
          </ul>
        </div>

        <aside className="path" aria-label="Learning paths">
          <h2 className="path__title">Pick a path</h2>
          <div className="path__tracks">
            {roadmapTracks.map((track, trackIndex) => (
              <div key={track.id} data-track={track.id}>
                <h3 className="path__track">{track.label}</h3>
                <ol className="path__steps">
                  {courses
                    .filter((c) => c.track === track.id)
                    .map((course, i) => (
                      <li key={course.id} className="path__step" style={{ "--i": trackIndex * 4 + i }}>
                        <span className="path__dot">{i + 1}</span>
                        <div>
                          <span className="path__name">{course.title}</span>
                          <span className="path__level">{course.level}</span>
                        </div>
                      </li>
                    ))}
                </ol>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
