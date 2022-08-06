import {
  PlanTasks,
  SourcingTasks,
  BuildTasks,
  ReleaseTasks,
  SupportTasks,
} from "./TaskDescriptions";
import { useState } from "react";
import Popup from "./Popup";
import "./Tasks.css";

function PlanStages() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="process-box">
      <h4>Product planning</h4>
      <ul>
        {PlanTasks.map((task, index) => {
          return (
            <div className="task-box" key={index} onClick={togglePopup}>
              <li className="task">{task.task}</li>
              {isOpen && (
                <Popup
                  content={
                    <div key={index}>
                      {console.log(index)}
                      <p>{task.description}</p>
                      <p>
                        <b>responsible:</b> {task.responsible}
                      </p>
                    </div>
                  }
                  handleClose={togglePopup}
                />
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

function CreateStages() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="process-box">
      <h4>Sourcing and creation</h4>
      <ul>
        {SourcingTasks.map((task, index) => {
          return (
            <div className="task-box" key={index} onClick={togglePopup}>
              <li className="task">{task.task}</li>
              {isOpen && (
                <Popup
                  content={
                    <div key={index}>
                      {console.log(index)}
                      <p>{task.description}</p>
                      <p>
                        <b>responsible:</b> {task.responsible}
                      </p>
                    </div>
                  }
                  handleClose={togglePopup}
                />
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

function BuildStages() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="process-box">
      <h4>Content composition</h4>
      <ul>
        {BuildTasks.map((task, index) => {
          return (
            <div className="task-box" key={index} onClick={togglePopup}>
              <li className="task">{task.task}</li>
              {isOpen && (
                <Popup
                  content={
                    <div key={index}>
                      {console.log(index)}
                      <p>{task.description}</p>
                      <p>
                        <b>responsible:</b> {task.responsible}
                      </p>
                    </div>
                  }
                  handleClose={togglePopup}
                />
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

function ReleaseStages() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="process-box">
      <h4>Release</h4>
      <ul>
        {ReleaseTasks.map((task, index) => {
          return (
            <div className="task-box" key={index} onClick={togglePopup}>
              <li className="task">{task.task}</li>
              {isOpen && (
                <Popup
                  content={
                    <div key={index}>
                      {console.log(index)}
                      <p>{task.description}</p>
                      <p>
                        <b>responsible:</b> {task.responsible}
                      </p>
                    </div>
                  }
                  handleClose={togglePopup}
                />
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

function SupportStages() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="process-box">
      <h4>Continuous improvement</h4>
      <ul>
        {SupportTasks.map((task, index) => {
          return (
            <div className="task-box" key={index} onClick={togglePopup}>
              <li className="task">{task.task}</li>
              {isOpen && (
                <Popup
                  content={
                    <div key={index}>
                      {console.log(index)}
                      <p>{task.description}</p>
                      <p>
                        <b>responsible:</b> {task.responsible}
                      </p>
                    </div>
                  }
                  handleClose={togglePopup}
                />
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export { CreateStages, PlanStages, BuildStages, ReleaseStages, SupportStages };
