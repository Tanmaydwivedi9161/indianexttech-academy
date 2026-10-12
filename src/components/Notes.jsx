import { useState } from "react";
import { notes } from "../data/notes";
import { FileIcon, DownloadIcon, SearchIcon } from "./Icons.jsx";
import "../styles/notes.css";

export default function Notes() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  // Filter buttons are built from the "category" of each note
  const categories = ["All", ...new Set(notes.map((n) => n.category))];

  const q = query.trim().toLowerCase();
  const visible = notes.filter((n) => {
    const matchesCategory = category === "All" || n.category === category;
    const matchesQuery = !q || `${n.title} ${n.description}`.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <section className="section section--tint" id="notes">
      <div className="container">
        <div className="section__head">
          <h2>Free notes</h2>
          <p>PDF notes you can download and keep. No sign up needed.</p>
        </div>

        <div className="notes__tools">
          <div className="filters" role="group" aria-label="Filter notes by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className="filter"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <label className="notes__search">
            <SearchIcon />
            <input
              type="search"
              placeholder="Search notes"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search notes"
            />
          </label>
        </div>

        {visible.length === 0 ? (
          <p className="empty">No notes found. Try another word or category.</p>
        ) : (
          <ul className="notes__grid">
            {visible.map((note) => (
              <li className="note" key={note.id}>
                <span className="note__icon">
                  <FileIcon />
                </span>
                <span className="chip">{note.category}</span>
                <h3 className="note__title">{note.title}</h3>
                <p className="note__text">{note.description}</p>
                <a
                  className="btn btn--secondary note__btn"
                  href={`${import.meta.env.BASE_URL}notes/${note.file}`}
                  download
                >
                  <DownloadIcon /> Download PDF
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
