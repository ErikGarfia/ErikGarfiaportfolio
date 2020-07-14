import React from "react";

const DeveloperLand = () => {

  return (
    <div className="col-md-6">
      <div className="card shadow p-3 mb-5 bg-white rounded">
        {/* <img src="" className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5>Certificate of participation Developer Land</h5>
          <hr />
          <span className="card-text">Participation in the virtual event "Developer Land" organized by Talent Land where small talks were given about the technologies that are at the forefront of technology companies. </span>
          <hr/>
          <a
            href="https://drive.google.com/file/d/1csaCZKIdNfb3u_N-GQ5fiJ3WhuL5312_/view"
            target=" _blank"
            className="btn btn-outline-secondary"
          >
            <i class="fa fa-file" aria-hidden="true" /> Document
          </a>
        </div>
      </div>
    </div>
    
  );
};


export default DeveloperLand;
