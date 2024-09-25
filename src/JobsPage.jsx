import {useState, useEffect} from 'react';
import axios from 'axios';
import {JobsIndex} from "./JobsIndex";
export function JobsPage() {

  const[jobs, setJobs] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/jobs.json").then(response=> {
      setJobs(response.data);
    })
  }

  useEffect(handleIndex, []);

  return (
    <main>
      <JobsIndex jobs={jobs} onIndex={handleIndex}/>
    </main>
  )
}