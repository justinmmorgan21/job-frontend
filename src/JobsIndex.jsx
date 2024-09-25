export function JobsIndex(props) {
  return (
    <>
    <h1>All Jobs</h1>
    <div className="cards">
      {props.jobs.map(job => (
        <div className="card" key={job.id}>
        <h3>{job.title}</h3>
        <p>{job.date_time}</p>
        <p>{job.duration}</p>
        <p>{job.details}</p>
        <button onClick={() => props.onShow(job)}>More Info</button>
        </div>
      ))}
    </div>
      <br />
    </>
  );
}