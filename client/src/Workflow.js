import "./Workflow.css";
import {
  PlanProcess,
  CreateProcess,
  BuildProcess,
  ReleaseProcess,
  SupportProcess,
} from "./Process";
import { useStickyBox } from "react-sticky-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const stickyRef = useStickyBox({ offsetTop: 20, offsetBottom: 20 });
  return (
    <div className="row">
      <aside ref={stickyRef}>
        <div>
          <ul className="sticky" style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <FontAwesomeIcon icon={faUser} size="2x" /> <br />
              BDM
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} size="2x" /> <br />
              BAM
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} size="2x" /> <br />
              PM
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} size="2x" /> <br />
              ADM
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} size="2x" /> <br />
              MM
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

function Workflow() {
  return (
    <div>
      <Sidebar />
      <div className="process-flow">
        <div className="container">
          <div className="stage">
            <p>plan</p>
          </div>
          <div className="stage" style={{ backgroundColor: "#99ffbb" }}>
            <p>create</p>
          </div>
          <div className="stage">
            <p>build</p>
          </div>
          <div className="stage">
            <p>release</p>
          </div>
          <div className="stage">
            <p>support</p>
          </div>

          <div className="stage">
            <PlanProcess />
          </div>
          <div className="stage">
            <CreateProcess />
          </div>
          <div className="stage">
            <BuildProcess />
          </div>
          <div className="stage">
            <ReleaseProcess />
          </div>
          <div className="stage">
            <SupportProcess />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Workflow;

// Be primarily a React single-page-app (not server-generated HTML)
// Use at least 2 different URL paths to allow users to open 'pages' within the app (e.g. using ReactRouter)
// main page with game
// create account/login
//
// Allow users to add, share, modify or organise some kind of data for some useful purpose.
// add: create account
// Have passing tests for some core logic and/or components

// visual process workflow with integrated raci
// interactive sections
// components:
// workflow component to load process
// on click to show
