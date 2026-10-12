import { formatFee } from "../data/courses";
import { CheckIcon } from "./Icons.jsx";

export default function CourseCard({ course, track, onEnroll }) {
  return (
    <article className="course" data-track={course.track}>
      <div className="course__top">
        <span className="course__track">{track ? track.label : course.track}</span>
        <span className="chip">{course.level}</span>
      </div>

      <h3 className="course__title">{course.title}</h3>
      <p className="course__tagline">{course.tagline}</p>

      <ul className="course__learn">
        {course.learn.map((item) => (
          <li key={item}>
            <CheckIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <details className="disclosure">
        <summary>View syllabus</summary>
        <ol className="syllabus disclosure__body">
          {course.syllabus.map((module) => (
            <li key={module.title}>
              <strong>{module.title}</strong>
              <span>{module.topics.join(", ")}</span>
            </li>
          ))}
        </ol>
      </details>

      <div className="course__foot">
        <span className="course__fee">{formatFee(course.fee)}</span>
        <button type="button" className="btn btn--primary" onClick={() => onEnroll(course.id)}>
          Enroll now
        </button>
      </div>
    </article>
  );
}
