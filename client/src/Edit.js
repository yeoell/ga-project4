import { useState, useEffect } from "react";
import "./Workflow.css";
import { SourcingTasks } from "./TaskDescriptions";

function Edit() {
  //   const [editedSourcingTasks, setSourcingTasks] = useState([]);
  const [isDeleted, setDeleted] = useState(false);
  const [updatedSourcing, setUpdates] = useState([]);

  const removeTask = (id) => {
    const newTasks = SourcingTasks.filter((job) => job.id !== id);
    setUpdates(newTasks);
    console.log(updatedSourcing);
  };

  const handleClick = () => {
    setDeleted((current) => !current);
  };

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "justify-content: center", marginBottom: "15px" }}
      >
        <h3>suggest tasks to remove for process refinement</h3>
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
          <div className="stage"></div>
          <div className="stage">
            <div>
              <h4>Sourcing</h4>
              {SourcingTasks.map((task) => {
                return (
                  <div key={task.id}>
                    <p
                      className="remove"
                      onClick={() => {
                        removeTask(task.id);
                        // handleClick();
                      }}
                      style={{ textDecoration: isDeleted ? "line-through" : "" }}
                    >
                      {task.task}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="stage"></div>
          <div className="stage"></div>
          <div className="stage"></div>
          <div></div>
        </div>
        <div>
          <p>suggested refinement</p>
        </div>
        <div className="container">
          <div className="stage"></div>
          <div className="stage">
            <div>
              <h4>Sourcing</h4>
              {updatedSourcing.map((task) => {
                return (
                  <div key={task.id}>
                    <p>{task.task}</p>
                  </div>
                );
              })}
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
