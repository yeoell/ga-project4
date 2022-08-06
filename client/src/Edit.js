import { useState, useEffect } from "react";
import {
  PlanTasks,
  SourcingTasks,
  BuildTasks,
  ReleaseTasks,
  SupportTasks,
} from "./TaskDescriptions";
import "./Tasks.css";
import "./Workflow.css";

function Edit() {
  //plan
  const [isUpdatedPlan, setPlanDeleted] = useState(false);
  const [updatedPlan, setPlanUpdates] = useState([]);
  const removePlanTask = (id) => {
    const newTasks = PlanTasks.filter((job) => job.id !== id);
    setPlanUpdates(newTasks);
  };
  const handlePlanClick = () => {
    setPlanDeleted((current) => !current);
  };

  //create
  const [isUpdatedSource, setSourceDeleted] = useState(false);
  const [updatedSourcing, setUpdates] = useState([]);
  const removeSourceTask = (id) => {
    const newTasks = SourcingTasks.filter((job) => job.id !== id);
    setUpdates(newTasks);
  };
  const handleSourceClick = () => {
    setSourceDeleted((current) => !current);
  };

  //build
  const [isUpdatedBuild, setBuildDeleted] = useState(false);
  const [updatedBuild, setBuildUpdates] = useState([]);
  const removeBuildTask = (id) => {
    const newTasks = BuildTasks.filter((job) => job.id !== id);
    setBuildUpdates(newTasks);
  };
  const handleBuildClick = () => {
    setBuildDeleted((current) => !current);
  };

  //release
  const [isUpdatedRelease, setReleaseDeleted] = useState(false);
  const [updatedRelease, setReleaseUpdates] = useState([]);
  const removeReleaseTask = (id) => {
    const newTasks = ReleaseTasks.filter((job) => job.id !== id);
    setReleaseUpdates(newTasks);
  };
  const handleReleaseClick = () => {
    setReleaseDeleted((current) => !current);
  };

  //support
  const [isUpdatedSupport, setSupportDeleted] = useState(false);
  const [updatedSupport, setSupportUpdates] = useState([]);
  const removeSupportTask = (id) => {
    const newTasks = SupportTasks.filter((job) => job.id !== id);
    setSupportUpdates(newTasks);
  };
  const handleSupportClick = () => {
    setSupportDeleted((current) => !current);
  };

  return (
    <div>
      <div>
        <h2 className="subhead">suggest tasks to remove for process refinement</h2>
      </div>

      <div className="process-flow">
        <div className="container">
          <div className="stage">
            <em>plan</em>
          </div>
          <div className="stage">
            <em>create</em>
          </div>
          <div className="stage">
            <em>build</em>
          </div>
          <div className="stage">
            <em>release</em>
          </div>
          <div className="stage">
            <em>support</em>
          </div>
          <div></div>
          <div className="stage process-box">
            <div>
              <h4>Product planning</h4>
              <ul>
                {PlanTasks.map((task) => {
                  return (
                    <div key={task.id} className="task-box">
                      <li
                        className="remove"
                        onClick={() => {
                          removePlanTask(task.id);
                          handlePlanClick();
                        }}
                        style={{ textDecoration: isUpdatedPlan ? "line-through" : "" }}
                      >
                        {task.task}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="stage process-box">
            <div>
              <h4>Sourcing</h4>
              <ul>
                {SourcingTasks.map((task) => {
                  return (
                    <div key={task.id} className="task-box">
                      <li
                        className="remove"
                        onClick={() => {
                          removeSourceTask(task.id);
                          handleSourceClick();
                        }}
                        style={{ textDecoration: isUpdatedSource ? "line-through" : "" }}
                      >
                        {task.task}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="stage process-box">
            <div>
              <h4>Content composition</h4>
              <ul>
                {BuildTasks.map((task) => {
                  return (
                    <div key={task.id} className="task-box">
                      <li
                        className="remove"
                        onClick={() => {
                          removeBuildTask(task.id);
                          handleBuildClick();
                        }}
                        style={{ textDecoration: isUpdatedBuild ? "line-through" : "" }}
                      >
                        {task.task}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="stage process-box">
            <div>
              <h4>Release</h4>
              <ul>
                {ReleaseTasks.map((task) => {
                  return (
                    <div key={task.id} className="task-box">
                      <li
                        className="remove"
                        onClick={() => {
                          removeReleaseTask(task.id);
                          handleReleaseClick();
                        }}
                        style={{ textDecoration: isUpdatedRelease ? "line-through" : "" }}
                      >
                        {task.task}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="stage process-box">
            <div>
              <h4>Continuous improvement</h4>
              <ul>
                {SupportTasks.map((task) => {
                  return (
                    <div key={task.id} className="task-box">
                      <li
                        className="remove"
                        onClick={() => {
                          removeSupportTask(task.id);
                          handleSupportClick();
                        }}
                        style={{ textDecoration: isUpdatedSupport ? "line-through" : "" }}
                      >
                        {task.task}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div></div>
        </div>
        <div>
          <h3>suggested refinement</h3>
        </div>
        <div className="container">
          <div className="stage process-box">
            <div>
              <h4>Sourcing</h4>
              <ul>
                {updatedPlan.map((task) => {
                  return (
                    <div key={task.id} className="task-box">
                      <li>{task.task}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="stage process-box">
            <div>
              <h4>Sourcing</h4>
              <ul>
                {updatedSourcing.map((task) => {
                  return (
                    <div key={task.id} className="task-box">
                      <li>{task.task}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="stage process-box">
            <div>
              <h4>Sourcing</h4>
              <ul>
                {updatedBuild.map((task) => {
                  return (
                    <div key={task.id} className="task-box">
                      <li>{task.task}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="stage">
            <div>
              <h4>Release</h4>
              <ul>
                {updatedRelease.map((task) => {
                  return (
                    <div key={task.id} className="task-box">
                      <li>{task.task}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="stage">
            <div>
              <h4>Continuous improvement</h4>
              <ul>
                {updatedSupport.map((task) => {
                  return (
                    <div key={task.id} className="task-box">
                      <li>{task.task}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
