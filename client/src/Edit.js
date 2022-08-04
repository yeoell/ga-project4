import { useState, useEffect } from "react";
import "./Workflow.css";
import { SourcingTasks } from "./TaskDescriptions";

function Edit() {
  const [editedSourcingTasks, setSourcingTasks] = useState([SourcingTasks]);
  const [isDeleted, setDeleted] = useState(false);

  const removeTask = (id) => {
    const newTasks = SourcingTasks.filter((job) => job.id !== id);
    // console.log(newTasks);
    setSourcingTasks(newTasks);
  };

  const handleClick = () => {
    setDeleted((current) => !current);
  };

  console.log(editedSourcingTasks);

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
                        handleClick();
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
          <div className="stage"></div>
          <div className="stage">
            <div>
              <h4>Sourcing</h4>
              <p>{}</p>
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
