import Personal from "./body-components/Personal.jsx";
import CV from "./body-components/CV.jsx";
import Education from "./body-components/Education.jsx";
import Experience from "./body-components/Experience.jsx";

export default function Body() {
  return (
    <>
      <main>
        <Personal></Personal>
        <Education></Education>
        <Experience></Experience>
        <CV></CV>
      </main>
    </>
  );
}
