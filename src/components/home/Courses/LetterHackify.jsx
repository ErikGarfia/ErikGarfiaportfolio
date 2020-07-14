import React from "react";


const Hackify = () => {

  return (
    <div className="col-md-6">
      <div className="card shadow p-3 mb-5 bg-white rounded">
        {/* <img src="" className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5>Letter of recommendation Hackify</h5>
          <hr />
          <span className="card-text">Participation in a virtual hackaton organized by Hackify to solve small problems within the areas of business administration, entertainment and personnel management.</span>
          <hr/>
          <a
            href="https://drive.google.com/file/d/1BMO_ujyOe9JoPv8gA-i6wGVizdJc-iNj/view"
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


export default Hackify;
