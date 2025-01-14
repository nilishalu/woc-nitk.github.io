import React from "react";
import {Link} from 'react-router-dom';
import Timeline from "./Timeline";
import NITKLogo from '../../assets/NITK_Logo_1.png'

const timeline = [
  { event: "Deadline to submit project proposals by organizations in NITK. Submit by 30th September to get the project proposals reviewed!", date: "September 30" },
  { event: "List of selected projects released. Students start discussing project details with mentors", date: "October 5" },
  { event: "Students can start submitting project proposals", date: "October 15" },
  { event: "Last day for students to submit project proposals", date: "November 22" },
  { event: "List of selected students for projects released", date: "November 28" },
  { event: "Coding phase begins", date: "December 1" },
  { event: "Mid evaluation", date: "January 4" },
  { event: "Final evaluation", date: "February 3" }
]

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="text">
          <h1> <img src={NITKLogo} alt="NITK Logo"/><br />NITK Winter of Code</h1>
          <p>Kickstart your open source journey</p>
          {/* <Link to="/projects" role="button">View Projects</Link> */}
          {/* <a rel="noopener noreferrer" role="button" target="_blank" href="https://forms.gle/5kSa1WCYg2nikwCX9">Apply as mentor</a>
          <a rel="noopener noreferrer" role="button" target="_blank" href="https://forms.gle/QopXkFVpQH34AMuA9">Apply as a mentee</a> */}
          <Link to="/projects" role="button">View Projects and Selected Candidates</Link>
        </div>
      </div>
      <br />
      <h1 style={{ textAlign: "center", fontSize: "36px" }}>Timeline</h1>
      <Timeline timelines={timeline} />
    </>
  );
};

export default Home;
