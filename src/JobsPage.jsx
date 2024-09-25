import {useState, useEffect} from 'react';
import axios from 'axios';
import {JobsIndex} from "./JobsIndex";
import {JobsNew} from "./JobsNew";
import {JobsList} from "./JobsList";
import {Modal} from "./Modal";
export function JobsPage() {

  const[jobs, setJobs] = useState([]);
  const[modalVisible, setModalVisible] = useState(false);
  const[jobTitle, setJobTitle] = useState("");

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
      handleClose();
    })
  }

  const handleCloseModal = () => {
    setModalVisible(false);
  }

  const handleOpenNewJobModal = (jobTitle) => {
    console.log(jobTitle);
    console.log("open modal");
    setJobTitle(jobTitle);
    setModalVisible(true);
  }

  useEffect(handleIndex, []);



  return (
    <main>
      <JobsList onJobSelect={handleOpenNewJobModal}/>
      <JobsIndex jobs={jobs} onIndex={handleIndex}/>
      <Modal openCreate={modalVisible} onClose={handleCloseModal}>
        <h1>THIS IS WHERE TO MAKE A NEW JOB</h1>
      < JobsNew onCreate={handleCreate} chosenTitle={jobTitle}/>
      </Modal>
    </main>
  )
}