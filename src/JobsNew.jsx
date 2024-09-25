export function JobsNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log(params);
    props.onCreate(params, () => event.target.reset());
  }

  return (
    <>
    <form id="new-job" onSubmit={handleSubmit}>
      <label htmlFor="title">Job:</label>
      <input type="text" id="title-input" name="title" defaultValue={props.chosenTitle}/><br />
      <label htmlFor="date-time">Start date:</label>
      <input type="datetime-local" id="date-time-input" name="date-time" /><br />
      <label htmlFor="duration">Duration:</label>
      <input type="text" id="duration-input" name="duration"/><br />
      <label htmlFor="details">Details:</label>
      <textarea id="details-input" name="details" rows="5"></textarea><br />
      <label htmlFor="user-id">user:</label>
      <input type="text" id="user-input" name="user-id" /><br />
      <button type="submit">Submit</button>
    </form>
    </>
  );
}