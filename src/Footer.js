import React from "react";

export default function Footer() {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%", textAlign: "center" }}>
        All rights reserverd®️
      </div>
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "50%", textAlign: "center" }}>
          <div style={{ textAlign: "left", marginLeft: "10px" }}>
            <p>
              <b>Group Members:</b>
              <br />
              Nalin Agrawal (111915077)
              <br />
              Prerit Kumar Jha (111915095)
              <br />
              Vijay Joshi (111915137)
            </p>
          </div>
        </div>
        <div style={{ width: "50%", float: "right" }}>
          <p>
            <i>Information Retrival Project:</i>
            <center>
              <b>Resume Parsing Using NLP</b>
            </center>
          </p>
        </div>
      </div>
    </div>
  );
}
