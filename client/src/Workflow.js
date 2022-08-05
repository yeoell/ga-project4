import "./Workflow.css";
// import {
//   PlanProcess,
//   CreateProcess,
//   BuildProcess,
//   ReleaseProcess,
//   SupportProcess,
// } from "./Process";

import {
  CreateStages,
  PlanStages,
  BuildStages,
  ReleaseStages,
  SupportStages,
} from "./ProcessStages";

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
            <li className="role-icon">
              <FontAwesomeIcon className="role" icon={faUser} size="2x" /> <br />
              BDM
            </li>
            <li className="role-icon">
              <FontAwesomeIcon className="role" icon={faUser} size="2x" /> <br />
              BAM
            </li>
            <li className="role-icon">
              <FontAwesomeIcon className="role" icon={faUser} size="2x" /> <br />
              PM
            </li>
            <li className="role-icon">
              <FontAwesomeIcon className="role" icon={faUser} size="2x" /> <br />
              ADM
            </li>
            <li className="role-icon">
              <FontAwesomeIcon className="role" icon={faUser} size="2x" /> <br />
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
          <div></div>

          <div className="stage">
            <PlanStages />
          </div>
          <div className="stage">
            <CreateStages />
          </div>
          <div className="stage">
            <BuildStages />
          </div>
          <div className="stage">
            <ReleaseStages />
          </div>
          <div className="stage">
            <SupportStages />
          </div>
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workflow;
