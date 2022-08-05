const Roles = ["BDM", "BAM", "PM", "ADM", "MM"];

const PrePlanTasks = [
  {
    id: 1,
    task: "Consult on content pipeline",
    description: "lorem ipsum",
    responsible: "BDM",
  },
  {
    id: 2,
    task: "Create budget",
    description: "lorem ipsum",
    responsible: "PM",
  },
  {
    id: 3,
    task: "Create schedule and input into system",
    description: "lorem ipsum",
    responsible: "PM",
  },
];
const PlanTasks = [
  {
    id: 1,
    task: "Writer guidelines",
    description: "lorem ipsum",
    responsible: "ADM",
  },
  {
    id: 2,
    task: "Determine content requirements",
    description: "lorem ipsum",
    responsible: "ADM",
  },
  {
    id: 3,
    task: "Product proposal meeting",
    description: "lorem ipsum",
    responsible: "PM",
  },
];

const SourcingTasks = [
  {
    id: 1,
    task: "Writer/SME sourcing",
    description: "find writers for the project",
    responsible: "BAM",
  },
  {
    id: 2,
    task: "Contracts and SOWs",
    description: "define terms and payments, and milestones",
    responsible: "PM",
  },
  {
    id: 3,
    task: "Creating and archiving contracts",
    description: "lorem ipsum",
    responsible: "PM",
  },
  {
    id: 4,
    task: "Briefing and onboarding",
    description: "provide writers/SMEs with a project brief",
    responsible: "ADM",
  },
];
const CreateTasks = [
  {
    task: "Manage content delivery",
    description: "ensure delivery of assessment material to schedule",
    responsible: "PM",
  },
  {
    task: "Content review and assessment",
    description: "placeholder",
    responsible: "ADM",
  },
  {
    task: "Industry endorsement",
    description: "lorem ipsum",
    responsible: "BAM",
  },
  {
    task: "Finalise content",
    description: "sample text",
    responsible: "ADM",
  },
];

export { PrePlanTasks, PlanTasks, SourcingTasks, CreateTasks, Roles };
