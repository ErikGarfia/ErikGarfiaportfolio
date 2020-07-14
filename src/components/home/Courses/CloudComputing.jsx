import React from "react";

const CloudComputing = () => {

  return (
    <div className="col-md-6">
      <div className="card shadow p-3 mb-5 bg-white rounded">
        {/* <img src="" className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5>Cloud Computing</h5>
          <hr />
          <p className="card-text">Introduction to cloud computing, Basic learning about configuration, management and maintenance of tools used to implement cloud computing.</p>
          <hr/>
          <a
            href="https://drive.google.com/file/d/14RMnXu0LcYJW83l2wcNBMpCop2aeoHzK/view"
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


export default CloudComputing;
