import React from "react";


const DWMobile = () => {

  return (
    <div className="col-md-6">
      <div className="card shadow p-3 mb-5 bg-white rounded">
        {/* <img src="" className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5>Certified in Websites Development and Mobile Apps</h5>
          <hr />
          <span className="card-text">Training in website and mobile application development through the virtual platform "capacitate para el empleo" covering topics such as server administration, front-end and back-end development and database management.</span>
          <hr/>
          <a
            href="https://drive.google.com/file/d/1snuplpg1mnqPzT3fUkKVDajUoqYcbXuM/view"
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


export default DWMobile;
