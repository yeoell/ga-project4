import {
  CreateStages,
  PlanStages,
  BuildStages,
  ReleaseStages,
  SupportStages,
} from "./ProcessStages";

function PlanProcess() {
  return (
    <div>
      <PlanStages />
    </div>
  );
}

function CreateProcess() {
  return (
    <div>
      <CreateStages />
    </div>
  );
}

function BuildProcess() {
  return (
    <div>
      <BuildStages />
    </div>
  );
}
function ReleaseProcess() {
  return (
    <div>
      <ReleaseStages />
    </div>
  );
}
function SupportProcess() {
  return (
    <div>
      <SupportStages />
    </div>
  );
}

export { PlanProcess, CreateProcess, BuildProcess, ReleaseProcess, SupportProcess };
