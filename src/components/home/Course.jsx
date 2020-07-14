import React from "react";
import {
  courseHeading,
} from "../../data/configurations.json";
import CloudComputing from "./Courses/CloudComputing";
import WBGoogle from "./Courses/WBGoogle";
import LetterHackify from "./Courses/LetterHackify";
import DeveloperLand from "./Courses/DeveloperLand";
import DWMobile from "./Courses/DWMobile";


const Course = () => {
  return (
    <div id="course" className="jumbotron jumbotron-fluid bg-transparent m-0">
        <div className="container container-fluid p-5">
          <h1 className="display-4 pb-5">{courseHeading}</h1>
          <div className="row">
           <CloudComputing />
           <WBGoogle />
           <LetterHackify />
           <DeveloperLand />
           <DWMobile/>
          </div>
        </div>

    </div>
  );
};

export default Course;
