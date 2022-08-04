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
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workflow;
