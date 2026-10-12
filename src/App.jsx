import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Courses from "./components/Courses.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Notes from "./components/Notes.jsx";
import Careers from "./components/Careers.jsx";
import Footer from "./components/Footer.jsx";
import EnrollModal from "./components/EnrollModal.jsx";
import ApplyModal from "./components/ApplyModal.jsx";

// Page order = order of the sections below. Move or delete a line to change it.
export default function App() {
  // null, { type: "enroll", courseId } or { type: "apply", jobId }
  const [modal, setModal] = useState(null);
  const closeModal = () => setModal(null);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />

      <main id="main">
        <Hero />
        <Courses onEnroll={(courseId) => setModal({ type: "enroll", courseId })} />
        <HowItWorks />
        <Notes />
        <Careers onApply={(jobId) => setModal({ type: "apply", jobId })} />
      </main>

      <Footer />

      {modal?.type === "enroll" && <EnrollModal courseId={modal.courseId} onClose={closeModal} />}
      {modal?.type === "apply" && <ApplyModal jobId={modal.jobId} onClose={closeModal} />}
    </>
  );
}
