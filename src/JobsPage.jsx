import {useState, useEffect} from 'react';
import axios from 'axios';
import {JobsIndex} from "./JobsIndex";
import {JobsNew} from "./JobsNew";
import {JobsList} from "./JobsList";
import {Modal} from "./Modal";
import { JobsShow } from './JobsShow';
export function JobsPage() {

  const[jobs, setJobs] = useState([]);
  const[modalVisible, setModalVisible] = useState(false);
  // const[jobTitle, setJobTitle] = useState("");
  // const[currentJob, setCurrentJob] = useState({});
  const[modalContent, setModalContent] = useState(<></>);

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
      handleCloseModal();
    })
  }

  const handleCloseModal = () => {
    setModalVisible(false);
  }

  const handleOpenNewJobModal = jobTitle => {
    // setJobTitle(jobTitle);
    setModalContent(< JobsNew onCreate={handleCreate} chosenTitle={jobTitle}/>);
    setModalVisible(true);
  }

  const handleUpdate = (params, id, successCallback) => {
    console.log("Update");
    axios.patch(`http://localhost:3000/jobs/${id}.json`, params).then(response => {
      console.log(response.data);
      setJobs(jobs.map(job => (id === job.id) ? response.data : job));
      successCallback();
      handleCloseModal();
    })
  }

  const handleShow = (job) => {
    // setCurrentJob(job);
    setModalContent(<JobsShow onUpdate={handleUpdate} job={job}/>);
    setModalVisible(true);
  }

  // const updateModalContent = content => {
  //   if (content === "newJob")
  //     setModalContent(< JobsNew onCreate={handleCreate} chosenTitle={jobTitle}/>);
  // }

  useEffect(handleIndex, []);

  // let modalFill;
  // if (true) {
  //  modalFill = < JobsNew onCreate={handleCreate} chosenTitle={jobTitle}/>;
  // }

  return (
    <main>
      <JobsList onJobSelect={handleOpenNewJobModal} />
      <JobsIndex jobs={jobs} onIndex={handleIndex} onShow={handleShow}/>
      <Modal openCreate={modalVisible} onClose={handleCloseModal}>
        {/* <JobsShow onUpdate={handleUpdate} job={currentJob}/> */}
        {modalContent}
        {/* {modalFill} */}
      </Modal>
    </main>
  )
}