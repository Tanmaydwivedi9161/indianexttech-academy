import { useState } from "react";
import { courses, tracks } from "../data/courses";
import CourseCard from "./CourseCard.jsx";
import "../styles/courses.css";

export default function Courses({ onEnroll }) {
  const [activeTrack, setActiveTrack] = useState("all");

  const filters = [{ id: "all", label: "All courses" }, ...tracks];
  const visible = activeTrack === "all" ? courses : courses.filter((c) => c.track === activeTrack);

  return (
    <section className="section" id="courses">
      <div className="container">
        <div className="section__head">
          <h2>Choose a course</h2>
          <p>
            Every course is online and priced low. Press Enroll now, fill a short form, and we will
            contact you on WhatsApp.
          </p>
        </div>

        <div className="filters" role="group" aria-label="Filter courses by track">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className="filter"
              aria-pressed={activeTrack === f.id}
              onClick={() => setActiveTrack(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="course-grid">
          {visible.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              track={tracks.find((t) => t.id === course.track)}
              onEnroll={onEnroll}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
