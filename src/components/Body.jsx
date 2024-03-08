import Personal from "./body-components/Personal.jsx";
import CV from "./body-components/CV.jsx";
import Education from "./body-components/Education.jsx";
import Experience from "./body-components/Experience.jsx";

export default function Body() {
  return (
    <>
      <div className="body-container">
        <main className="main-container">
          <Personal></Personal>
          <Education></Education>
          <Experience></Experience>
        </main>
        <section>
          <CV></CV>
        </section>
      </div>
    </>
  );
}
