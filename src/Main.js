import React from "react";
import Fade from "react-reveal/Fade";
export default function Main() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <center>
        <Fade top>
          <h1 style={{ color: "#072a40", fontSize: "2rem" }}>
            Resume Parsing Using NLP
          </h1>
        </Fade>
      </center>
      <Fade top>
        <div
          style={{ width: "100%", textAlign: "center", marginBottom: "20px" }}
          className="style"
        >
          <div
          // style={{
          //   width: "100%",
          //   margin: "10px",
          //   padding: "10px",
          //   textAlign: "left",
          //   border: "1px solid #888888",
          //   boxShadow: "5px 2px 10px #888888",
          //   borderRadius: "10px"
          // }}
          >
            <center>
              <h2 style={{ color: "#ff5f00" }}>
                What is Natural Language Processing(NLP) ?
              </h2>
            </center>
            <p>
              Natural language processing (NLP) refers to the branch of computer
              science—and more specifically, the branch of artificial
              intelligence or AI—concerned with giving computers the ability to
              understand text and spoken words in much the same way human beings
              can.
            </p>
          </div>
        </div>
      </Fade>
      <Fade top>
        <div style={{ width: "100%", textAlign: "center" }} className="style">
          <div
          // style={{
          //   width: "100%",
          //   margin: "10px",
          //   padding: "10px",
          //   textAlign: "left",
          //   border: "1px solid #888888",
          //   boxShadow: "5px 2px 10px #888888",
          //   borderRadius: "10px"
          // }}
          >
            <center>
              <h2 style={{ color: "#ff5f00" }}>About Website</h2>
            </center>
            <p>
              This website is a dedicated website for resume scoring and parsing
              where resume would be taken as input and company can shortlist
              candidate by filtering and ranking the candidates on the basis of
              skills.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
