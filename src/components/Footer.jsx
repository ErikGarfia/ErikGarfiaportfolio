import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
      {/* <strong> &copy; 2019 </strong>*/}
      {" "}
      <a
        className="badge badge-danger"
        rel="noopener"
        href="https://github.com/ErikGarfia"
        aria-label="My GitHub"
      >
        Erik Garfia Acevedo
      </a>{" "}
    </footer>
  );
};

export default Footer;
