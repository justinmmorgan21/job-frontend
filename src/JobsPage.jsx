import {useState, useEffect} from 'react';
import axios from 'axios';
import {JobsIndex} from "./JobsIndex";
import {JobsNew} from "./JobsNew";
export function JobsPage() {

  const[jobs, setJobs] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/jobs.json").then(response=> {
      setJobs(response.data);
    })
  }

  const handleCreate = (params, successCallback) => {
    console.log("Create");
    axios.post("http://localhost:3000/jobs.json", params).then(response => {
      setJobs([...jobs, response.data]);
      successCallback();
    })
  }

  useEffect(handleIndex, []);

  return (
    <main>
      <JobsNew onCreate={handleCreate}/>
      <JobsIndex jobs={jobs} onIndex={handleIndex}/>
    </main>
  )
}