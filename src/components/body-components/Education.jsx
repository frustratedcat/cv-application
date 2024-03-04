export default function Education() {
  return (
    <>
      <section>
        <h2>Education</h2>
        <button type="button">Expand</button>
      </section>

      <section>
        <form>
          <fieldset>
            <label>School</label>
            <input type="text" />

            <label>Degree</label>
            <input type="text" />

            <label>Date</label>
            <input type="date" />
          </fieldset>

          <button type="button">Delete</button>
          <button type="button">Cancel</button>
          <button type="button">Save</button>
        </form>

        <button type="button">+ Educaiton</button>
      </section>
    </>
  );
}
