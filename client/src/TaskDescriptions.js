const Roles = ["BDM", "BAM", "PM", "ADM", "MM"];

const PlanTasks = [
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
  {
    id: 4,
    task: "Writer guidelines",
    description: "lorem ipsum",
    responsible: "ADM",
  },
  {
    id: 5,
    task: "Determine content requirements",
    description: "lorem ipsum",
    responsible: "ADM",
  },
  {
    id: 6,
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
  {
    id: 5,
    task: "Manage content delivery",
    description: "ensure delivery of assessment material to schedule",
    responsible: "PM",
  },
  {
    id: 6,
    task: "Content review and assessment",
    description: "placeholder",
    responsible: "ADM",
  },
  {
    id: 7,
    task: "Industry endorsement",
    description: "lorem ipsum",
    responsible: "BAM",
  },
  {
    id: 8,
    task: "Finalise content",
    description: "sample text",
    responsible: "ADM",
  },
];

const BuildTasks = [
  {
    id: 1,
    task: "Copyedit, proofread, style",
    description: "placeholder",
    responsible: "PM",
  },
  {
    id: 2,
    task: "Artwork list creation",
    description: "placeholder",
    responsible: "PM",
  },
  {
    id: 3,
    task: "Permissions acquision",
    description: "lorem ipsum",
    responsible: "PM",
  },
  {
    id: 4,
    task: "Full suite creation",
    description: "placeholder",
    responsible: "PM",
  },
  {
    id: 5,
    task: "Post final assets for Marketing",
    description: "placeholder",
    responsible: "PM",
  },
];
const ReleaseTasks = [
  {
    id: 1,
    task: "Train tech support",
    description: "placeholder",
    responsible: "ADM",
  },
  {
    id: 2,
    task: "Engage Marketing",
    description: "placeholder",
    responsible: "BAM",
  },
  {
    id: 3,
    task: "Train Sales",
    description: "lorem ipsum",
    responsible: "BAM",
  },
  {
    id: 4,
    task: "Engage in sales efforts",
    description: "placeholder",
    responsible: "BAM",
  },

  {
    id: 5,
    task: "Market development",
    description: "placeholder",
    responsible: "BAM",
  },
];
const SupportTasks = [
  {
    id: 1,
    task: "Corrections",
    description: "placeholder",
    responsible: "PM",
  },
  {
    id: 2,
    task: "Engage SME/writer review in corrections",
    description: "placeholder",
    responsible: "ADM",
  },
  {
    id: 3,
    task: "Digital product issues",
    description: "placeholder",
    responsible: "ADM",
  },
];

export { PlanTasks, SourcingTasks, BuildTasks, ReleaseTasks, SupportTasks, Roles };
