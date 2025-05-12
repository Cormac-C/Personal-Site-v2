import React from "react";

const LitePage: React.FC = () => {
  return (
    <div
      style={{
        padding: "1rem"
      }}
    >
      <h1>Cormac Cureton</h1>
      <p>AI Researcher | Engineer</p>
      <h2>About Me</h2>
      <p>
        M.Sc. Student in the {""}
        <a
          href="https://ismart.ece.mcgill.ca/"
          target="_blank"
          rel="noreferrer"
        >
          iSMART Lab
        </a>{" "}
        under the supervision of Prof. Narges Armanfard at McGill.
      </p>
      <p> Alum of Systems Design Engineering at University of Waterloo.</p>
      <div>
        Previously at
        <ul>
          <li>
            <a
              href="https://www.valencelabs.com/"
              target="_blank"
              rel="noreferrer"
            >
              Valence Labs
            </a>
          </li>
          <li>
            <a href="https://www.scispot.com/" target="_blank" rel="noreferrer">
              Scispot
            </a>
          </li>
          <li>
            <a href="https://www.xe.com/" target="_blank" rel="noreferrer">
              Xe
            </a>
          </li>
          <li>
            <a href="https://www.yuja.com/" target="_blank" rel="noreferrer">
              360 Education Labs Inc
            </a>
          </li>
        </ul>
      </div>
      {/* <h2>Publications</h2>
      <p>Coming Soon...</p> */}
      <h2>Contact</h2>
      <p>
        Email:{" "}
        <a
          href="mailto:cormaccureton@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          cormaccureton@gmail.com
        </a>
      </p>
      <p>
        Github:{" "}
        <a href="https://github.com/Cormac-C" target="_blank" rel="noreferrer">
          Cormac-C
        </a>
      </p>
      <p>
        Linkedin:{" "}
        <a
          href="https://www.linkedin.com/in/cormaccureton"
          target="_blank"
          rel="noreferrer"
        >
          Cormac Cureton
        </a>
      </p>
      <a href="/">Back to developer website</a>
    </div>
  );
};

export default LitePage;
