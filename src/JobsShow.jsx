export function JobsShow({job, onUpdate}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log(params);
    onUpdate(params, job.id, () => event.target.reset());
  }
  // console.log("in show: " + job.date_time.slice(0, -8));
  return (
    <>
    <h3>{job.title}</h3>
        <p>{job.date_time}</p>
        <p>{job.duration}</p>
        <p>{job.details}</p>

    <form id="update-job" onSubmit={handleSubmit}>
      <label htmlFor="title">Job:</label>
      <input type="text" id="title-input" name="title" defaultValue={job.title}/><br />
      <label htmlFor="date-time">Start date:</label>
      <input type="datetime-local" id="date-time-input" name="date-time" defaultValue={job.date_time && job.date_time.slice(0, -8)}/><br />
      <label htmlFor="duration">Duration:</label>
      <input type="text" id="duration-input" name="duration" defaultValue={job.duration}/><br />
      <label htmlFor="details">Details:</label>
      <textarea id="details-input" name="details" defaultValue={job.details} rows="5"></textarea><br />
      <label htmlFor="user-id">user:</label>
      <input type="text" id="user-input" name="user-id" defaultValue={job.user_id} /><br />
      <button type="submit">Update</button>
    </form>
    </>
  );
}