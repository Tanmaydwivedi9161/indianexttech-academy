export default function JobCard({ job, onApply }) {
  return (
    <li className="job">
      <div className="job__main">
        <h3 className="job__title">{job.title}</h3>
        <div className="job__meta">
          <span className="chip">{job.type}</span>
          <span className="chip">{job.mode}</span>
          {job.stipend && <span className="chip">{job.stipend}</span>}
        </div>

        <p className="job__about">{job.about}</p>

        <ul className="job__skills" aria-label="Skills">
          {job.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <details className="disclosure">
          <summary>Role details</summary>
          <div className="disclosure__body">
            <h4 className="job__sub">What you will do</h4>
            <ul className="job__tasks">
              {job.responsibilities.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>
        </details>
      </div>

      <button type="button" className="btn btn--primary job__apply" onClick={() => onApply(job.id)}>
        Apply now
      </button>
    </li>
  );
}
