import { useState, useEffect } from "react";
import { SourcingTasks } from "./TaskDescriptions";
import "./Tasks.css";
import "./Workflow.css";

function Edit() {
  //   const [editedSourcingTasks, setSourcingTasks] = useState([]);
  const [isDeleted, setDeleted] = useState(false);
  const [updatedSourcing, setUpdates] = useState([]);

  const removeTask = (id) => {
    const newTasks = SourcingTasks.filter((job) => job.id !== id);
    setUpdates(newTasks);
    console.log(updatedSourcing);
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
          <div className="stage process-box"></div>
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
                          removeTask(task.id);
                        }}
                        style={{ textDecoration: isDeleted ? "line-through" : "" }}
                      >
                        {task.task}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="stage"></div>
          <div className="stage"></div>
          <div className="stage"></div>
          <div></div>
        </div>
        <div>
          <h3>suggested refinement</h3>
        </div>
        <div className="container">
          <div className="stage"></div>
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
          <div className="stage"></div>
          <div className="stage"></div>
          <div className="stage"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
