import "./Workflow.css";
import { useState, useEffect } from "react";
import { Roles } from "./TaskDescriptions";
import {
  CreateStages,
  PlanStages,
  BuildStages,
  ReleaseStages,
  SupportStages,
} from "./ProcessStages";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Workflow() {
  const [roleSelect, setRoleSelect] = useState("");

  const [bdmHigh, setbdmHigh] = useState(false);
  const [bamHigh, setbamHigh] = useState(false);
  const [pmHigh, setpmHigh] = useState(false);
  const [admHigh, setadmHigh] = useState(false);
  const [mmHigh, setmmHigh] = useState(false);

  useEffect(() => {
    roleSelect === "BDM" ? setbdmHigh(true) : setbdmHigh(false);
    roleSelect === "BA" ? setbamHigh(true) : setbamHigh(false);
    roleSelect === "PM" ? setpmHigh(true) : setpmHigh(false);
    roleSelect === "ADM" ? setadmHigh(true) : setadmHigh(false);
    roleSelect === "MM" ? setmmHigh(true) : setmmHigh(false);
  }, [roleSelect]);

  const handleOnClick = (e) => {
    setRoleSelect(e.currentTarget.id);
    console.log(e.currentTarget.id);
  };

  // const renderResult = () => {
  //   let result;
  //   roleSelect === "" ? (result = "") : (result = roleSelect);
  //   return result;
  // };

  const Sidebar = () => {
    return (
      <div className="row" data-testid="content">
        <aside>
          <div>
            <ul id={roleSelect} className="sticky" style={{ listStyleType: "none", padding: 0 }}>
              {Roles.map((role, index) => {
                return (
                  <div>
                    <li id={role} key={index} className="role-icon" onClick={handleOnClick}>
                      <FontAwesomeIcon className="title" icon={faUser} size="2x" /> <br />
                      {role}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    );
  };

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
