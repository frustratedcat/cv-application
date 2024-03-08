export default function Experience() {
  return (
    <>
      <section>
        <h2>Experience</h2>
        <button type="button">Expand</button>
      </section>

      <section>
        <form>
          <fieldset>
            <label>Company</label>
            <input type="text" />

            <label>Position</label>
            <input type="text" />

            <label>Description</label>
            <input type="text" />

            <label>Start Date</label>
            <input type="date" />

            <label>End Date (If Not Current)</label>
            <input type="date" />

            <label>Location</label>
            <input type="text" />
          </fieldset>

          <button type="button">Delete</button>
          <button type="button">Cancel</button>
          <button type="button">Save</button>
        </form>

        <div className="experience-additions"></div>

        <button type="button">+ Experience</button>
      </section>
    </>
  );
}
