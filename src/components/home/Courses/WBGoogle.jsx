import React from "react";


const WBGoogle = () => {

  return (
    <div className="col-md-6">
      <div className="card shadow p-3 mb-5 bg-white rounded">
        {/* <img src="" className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5>Introduction to Web Development I, II by Google</h5>
          <hr />
         <p className="card-text">Learning on the basis of web development made up of theoretical and practical units. Handling of basic topics such as CSS and HTML.</p>
         <hr/>
          <a
            href="https://drive.google.com/file/d/1-Dti3887nYIr5sX7mSyniANU5lfaiMwq/view"
            target=" _blank"
            className="btn btn-outline-secondary"
          >
            <i class="fa fa-file" aria-hidden="true" /> Document I
          </a>
          &nbsp;&nbsp;&nbsp;
          <a
            href="https://drive.google.com/file/d/1hdcQFhE9mp-sJMoYs8sE6W5vTgeNOv_U/view"
            target=" _blank"
            className="btn btn-outline-secondary"
          >
            <i class="fa fa-file" aria-hidden="true" /> Document II
          </a>
        </div>
      </div>
    </div>
    
  );
};


export default WBGoogle;
