export function JobsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log(params);
    props.onUpdate(params, props.job.id, () => event.target.reset());
  }
  console.log("in show: " + props.job);
  return (
    <>
    <h3>{props.job.title}</h3>
        <p>{props.job.date_time}</p>
        <p>{props.job.duration}</p>
        <p>{props.job.details}</p>

    <form id="update-job" onSubmit={handleSubmit}>
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