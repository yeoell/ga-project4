import "./Workflow.css";
import { Plan, Create, Build, Release, Support } from "./Stages";
import {
  PlanProcess,
  CreateProcess,
  BuildProcess,
  ReleaseProcess,
  SupportProcess,
} from "./Process";
import { useStickyBox } from "react-sticky-box";

const Sidebar = () => {
  const stickyRef = useStickyBox({ offsetTop: 20, offsetBottom: 20 });
  return (
    <div className="row">
      <aside ref={stickyRef}>
        <div>
          <ul className="sticky" style={{ listStyleType: "none", padding: 0 }}>
            <li>BDM</li>
            <li>ADM</li>
            <li>PM</li>
            <li>BAM</li>
            <li>MM</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

function Workflow() {
  return (
    <div>
      <header>
        <h1>workflow</h1>
      </header>
      <div className="process-flow">
        <Sidebar />
        <div className="container">
          <div className="stage">
            <Plan />
          </div>
          <div className="stage">
            <Create />
          </div>
          <div className="stage">
            <Build />
          </div>
          <div className="stage">
            <Release />
          </div>
          <div className="stage">
            <Support />
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
