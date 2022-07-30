import { TaskDescriptions } from "./TaskDescriptions";

function PlanStages() {
  return (
    <div>
      <h4>Product planning</h4>
      <p>Consult on content pipeline</p>
      <p>Create budget</p>
      <p>Create schedule and input into system</p>
      <h4>Content planning</h4>
      <p>Writer guidelines</p>
      <p>Determine content requirements</p>
      <p>Product proposal meeting</p>
    </div>
  );
}

function CreateStages() {
  return (
    <div>
      <h4>Sourcing</h4>
      <p>Writer/SME sourcing</p>
      <p>Define contract terms and SOWs</p>
      <p>Creating and archiving contracts</p>
      <p>Briefing and onboarding</p>
      <h4>Content creation</h4>
      <p>Manage content delivery</p>
      <p>Finalise content</p>
    </div>
  );
}

function BuildStages() {
  return (
    <div>
      <h4>Content composition</h4>
      <p>Copyedit, proofread, style assessment</p>
      <p>Artwork list creation</p>
      <p>Permissions acquision</p>
      <p>Full suite creation</p>
      <p>Post final assets for Marketing</p>
    </div>
  );
}

function ReleaseStages() {
  return (
    <div>
      <h4>Product training</h4>
      <p>Train tech support</p>
      <p>Train Marketing</p>
      <p>Train Sales</p>
      <p>Engage in sales efforts</p>
    </div>
  );
}

function SupportStages() {
  return (
    <div>
      <h4>Product selling</h4>
      <p>Market dev</p>
      <h4>Continuous improvement</h4>
      <p>Corrections</p>
      <p>Engage SME/writers review in Corrections</p>
      <p>Tech product issues</p>
    </div>
  );
}

export { CreateStages, PlanStages, BuildStages, ReleaseStages, SupportStages };
