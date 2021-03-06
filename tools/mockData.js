// All about courses and authors

const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Software Practices",
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture",
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 1,
    category: "Career",
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 1,
    category: "HTML5",
  },
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

// All About Migrations

const members = [
  {
    id: 1,
    name: "Shannon",
    sname: "S Pymen",
    initials: "S.P.",
    alias: "Vision",
    pic: "/src/images/Vision.svg",
    focus: false,
  },
  {
    id: 2,
    name: "Mike",
    sname: "M Rinnckle",
    initials: "M.R.",
    alias: "The Hulk",
    pic: "/src/images/Hulk.svg",
    focus: false,
  },
  {
    id: 3,
    name: "Jean",
    sname: "J Lsomtom",
    initials: "J.L.",
    alias: "Jean Grey",
    pic: "/src/images/Jean.svg",
    focus: false,
  },
  {
    id: 4,
    name: "Geraldine",
    sname: "G Monteyhoo",
    initials: "G.M.",
    alias: "Storm",
    pic: "/src/images/Storm.svg",
    focus: false,
  },
  {
    id: 5,
    name: "Justin",
    sname: "J Banquet",
    initials: "J.B.",
    alias: "Deadpool",
    pic: "/src/images/Deadpool.svg",
    focus: false,
  },
  {
    id: 6,
    name: "Christian",
    sname: "C Marchant",
    initials: "C.M.",
    alias: "Sunspot",
    pic: "/src/images/Sunspot.svg",
    focus: false,
  },
  {
    id: 7,
    name: "Lee",
    sname: "L Omsleyer",
    initials: "L.O.",
    alias: "Dr. Strange",
    pic: "/src/images/Strange.svg",
    focus: false,
  },
];

const stages = [
  {
    id: 1,
    stage: "Engage customer",
  },
  {
    id: 2,
    stage: "Request approval",
  },
  {
    id: 3,
    stage: "Request resources",
  },
  {
    id: 4,
    stage: "Configure resources",
  },
  {
    id: 5,
    stage: "Testing",
  },
  {
    id: 6,
    stage: "Cutover",
  },
  {
    id: 7,
    stage: "Closeout",
  },
];

const stages_tasks = [
  {
    stage_id: 1,
    stage: "Engage customer",
    tasks: [
      {
        id: 1,
        name: "S1_T1",
        task: "Create SSI ticket to track migration",
      },
      {
        id: 2,
        name: "S1_T2",
        task: "Kick off with customer",
      },
      {
        id: 3,
        name: "S1_T3",
        task: "Complete the Application Service Document (ASD)",
      },
      {
        id: 4,
        name: "S1_T4",
        task: "Request Public Affairs Office (PAO) approval email",
      },
      {
        id: 5,
        name: "S1_T5",
        task:
          "Request Impact Level Assessment and Information Survey Type be completed",
      },
      {
        id: 6,
        name: "S1_T6",
        task: "Request 508 scan compliance in a work order",
      },
      {
        id: 7,
        name: "S1_T7",
        task: "Request HPFortify scan on site",
      },
      {
        id: 8,
        name: "S1_T8",
        task: "Create diagram",
      },
      {
        id: 9,
        name: "S1_T9",
        task:
          "Fill out the (VM request - IaaS) or (Webapp request - PaaS) form based on your project type",
      },
    ],
  },
  {
    stage_id: 2,
    stage: "Request approval",
    tasks: [
      {
        id: 10,
        name: "S2_T1",
        task:
          "Request Cloud Service Program Management Office (CSPMO) approval",
      },
      {
        id: 11,
        name: "S2_T2",
        task: "Create work order",
      },
      {
        id: 12,
        name: "S2_T3",
        task: "Schedule meeting with engineering",
      },
      {
        id: 13,
        name: "S2_T4",
        task: "Include diagram and request worksheet",
      },
    ],
  },
  {
    stage_id: 3,
    stage: "Request resources",
    tasks: [
      {
        id: 14,
        name: "S3_T1",
        task:
          "Request resources provisioned ('VM', App server, database, webapp)",
      },
      {
        id: 15,
        name: "S3_T2",
        task: "Verify Windows/RHEL VM configuration",
      },
      {
        id: 16,
        task: "Confirm server in correct vnet/subnet",
      },
      {
        id: 17,
        name: "S3_T4",
        task: "Confirm tags are accurate",
      },
      {
        id: 18,
        name: "S3_T5",
        task: "Confirm/Request our group (- ????) is added to access server",
      },
      {
        id: 19,
        name: "S3_T6",
        task: "Confirm/Test login access to the server using RDP/SSH",
      },
      {
        id: 20,
        name: "S3_T7",
        task: "Confirm/Test access to server using SFTP",
      },
      {
        id: 21,
        name: "S3_T8",
        task: "Confirm that app storage is mounted",
      },
      {
        id: 22,
        name: "S3_T9",
        task: "Update ASD with server information",
      },
      {
        id: 23,
        name: "S3_T10",
        task: "Update Azure IL4 server spreadsheet",
      },
      {
        id: 24,
        name: "S3_T11",
        task: "Request HPFortify scan on new server",
      },
    ],
  },
  {
    stage_id: 4,
    stage: "Configure resources",
    tasks: [
      {
        id: 25,
        name: "S4_T1",
        task: "Configure database",
      },
      {
        id: 26,
        name: "S4_T2",
        task: "Configure staging server",
      },
      {
        id: 27,
        name: "S4_T3",
        task: "Configure website",
      },
      {
        id: 28,
        name: "S4_T4",
        task:
          "Confirm AD Group or LDAP Role is created (name of group or role)",
      },
      {
        id: 29,
        name: "S4_T5",
        task: "Create IIS config doc",
      },
      {
        id: 30,
        name: "S4_T6",
        task: "Configure app server",
      },
      {
        id: 31,
        name: "S4_T7",
        task: "Update ASD with applicable information",
      },
    ],
  },
  {
    stage_id: 5,
    stage: "Testing",
    tasks: [
      {
        id: 32,
        name: "S5_T1",
        task: "Request customer test app/site",
      },
      {
        id: 32,
        name: "S5_T2",
        task: "Notify customer that app/site configured",
        notes:
          "Isn't the site already configured since in previous we requested they test?",
      },
      {
        id: 33,
        name: "S5_T3",
        task: "Verify that customer can access the site",
        notes: "How is test app/site different from access site?",
      },
      {
        id: 34,
        name: "S5_T4",
        task: "Verify that customer can WinSCP to server and upload files",
      },
      {
        id: 35,
        name: "S5_T5",
        task: "Verify that automation of file transer is working for customer",
        notes: "Does this apply to only PaaS with it's staging?",
      },
    ],
  },
  {
    stage_id: 6,
    stage: "Cutover",
    tasks: [
      {
        id: 36,
        name: "S6_T1",
        task: "DNS update",
      },
    ],
  },
  {
    stage_id: 7,
    stage: "Closeout",
    tasks: [
      {
        id: 37,
        name: "S7_T1",
        task: "Email service owner and operations team",
      },
      {
        id: 38,
        name: "S7_T2",
        task: "Update the all sites (Core) list",
      },
    ],
  },
];

const migration_tasks = [
  {
    id: 1,
    stageId: 1,
    name: "S1_T1",
    task: "Create SSI ticket to track migration",
  },
  {
    id: 2,
    stageId: 1,
    name: "S1_T2",
    task: "Kick off with customer",
  },
  {
    id: 3,
    stageId: 1,
    name: "S1_T3",
    task: "Complete the Application Service Document (ASD)",
  },
  {
    id: 4,
    stageId: 1,
    name: "S1_T4",
    task: "Request Public Affairs Office (PAO) approval email",
  },
  {
    id: 5,
    stageId: 1,
    name: "S1_T5",
    task:
      "Request Impact Level Assessment and Information Survey Type be completed",
  },
  {
    id: 6,
    stageId: 1,
    name: "S1_T6",
    task: "Request 508 scan compliance in a work order",
  },
  {
    id: 7,
    stageId: 1,
    name: "S1_T7",
    task: "Request HPFortify scan on site",
  },
  {
    id: 8,
    stageId: 1,
    name: "S1_T8",
    task: "Create diagram",
  },
  {
    id: 9,
    stageId: 1,
    name: "S1_T9",
    task:
      "Fill out the (VM request - IaaS) or (Webapp request - PaaS) form based on your project type",
  },
  {
    id: 10,
    stageId: 2,
    name: "S2_T1",
    task: "Request Cloud Service Program Management Office (CSPMO) approval",
  },
  {
    id: 11,
    stageId: 2,
    name: "S2_T2",
    task: "Create work order",
  },
  {
    id: 12,
    stageId: 2,
    name: "S2_T3",
    task: "Schedule meeting with engineering",
  },
  {
    id: 13,
    stageId: 2,
    name: "S2_T4",
    task: "Include diagram and request worksheet",
  },
  {
    id: 14,
    stageId: 3,
    name: "S3_T1",
    task: "Request resources provisioned ('VM', App server, database, webapp)",
  },
  {
    id: 15,
    stageId: 3,
    name: "S3_T2",
    task: "Verify Windows/RHEL VM configuration",
  },
  {
    id: 16,
    stageId: 3,
    name: "S3_T3",
    task: "Confirm server in correct vnet/subnet",
  },
  {
    id: 17,
    stageId: 3,
    name: "S3_T4",
    task: "Confirm tags are accurate",
  },
  {
    id: 18,
    stageId: 3,
    name: "S3_T5",
    task: "Confirm/Request our group (- ????) is added to access server",
  },
  {
    id: 19,
    stageId: 3,
    name: "S3_T6",
    task: "Confirm/Test login access to the server using RDP/SSH",
  },
  {
    id: 20,
    stageId: 3,
    name: "S3_T7",
    task: "Confirm/Test access to server using SFTP",
  },
  {
    id: 21,
    stageId: 3,
    name: "S3_T8",
    task: "Confirm that app storage is mounted",
  },
  {
    id: 22,
    stageId: 3,
    name: "S3_T9",
    task: "Update ASD with server information",
  },
  {
    id: 23,
    stageId: 3,
    name: "S3_T10",
    task: "Update Azure IL4 server spreadsheet",
  },
  {
    id: 24,
    stageId: 3,
    name: "S3_T11",
    task: "Request HPFortify scan on new server",
  },
  {
    id: 25,
    stageId: 4,
    name: "S4_T1",
    task: "Configure database",
  },
  {
    id: 26,
    stageId: 4,
    name: "S4_T2",
    task: "Configure staging server",
  },
  {
    id: 27,
    stageId: 4,
    name: "S4_T3",
    task: "Configure website",
  },
  {
    id: 28,
    stageId: 4,
    name: "S4_T4",
    task: "Confirm AD Group or LDAP Role is created (name of group or role)",
  },
  {
    id: 29,
    stageId: 4,
    name: "S4_T5",
    task: "Create IIS config doc",
  },
  {
    id: 30,
    stageId: 4,
    name: "S4_T6",
    task: "Configure app server",
  },
  {
    id: 31,
    stageId: 4,
    name: "S4_T7",
    task: "Update ASD with applicable information",
  },
  {
    id: 32,
    stageId: 5,
    name: "S5_T1",
    task: "Request customer test app/site",
  },
  {
    id: 32,
    stageId: 5,
    name: "S5_T2",
    task: "Notify customer that app/site configured",
    notes:
      "Isn't the site already configured since in previous we requested they test?",
  },
  {
    id: 33,
    stageId: 5,
    name: "S5_T3",
    task: "Verify that customer can access the site",
    notes: "How is test app/site different from access site?",
  },
  {
    id: 34,
    stageId: 5,
    name: "S5_T4",
    task: "Verify that customer can WinSCP to server and upload files",
  },
  {
    id: 35,
    stageId: 5,
    name: "S5_T5",
    task: "Verify that automation of file transer is working for customer",
    notes: "Does this apply to only PaaS with it's staging?",
  },
  {
    id: 36,
    stageId: 6,
    name: "S6_T1",
    task: "DNS update",
  },
  {
    id: 37,
    stageId: 7,
    name: "S7_T1",
    task: "Email service owner and operations team",
  },
  {
    id: 38,
    stageId: 7,
    name: "S7_T2",
    task: "Update the all sites (Core) list",
  },
];

const operating_systems = [
  { id: 1, os: "Windows" },
  { id: 2, os: "Linux" },
];

const migration_types = [
  { id: 1, migration_type: "PaaS" },
  { id: 2, migration_type: "IaaS" },
];

const migrations = [
  {
    id: 1,
    migration_ownerId: 2,
    migration_type: "PaaS",
    os: null,
    app_name: "MOBB",
    status: "Blocked",
    S1_T1: "Complete",
    S1_T2: "Complete",
    S1_T3: "Complete",
    S1_T4: "Complete",
    S1_T5: "Complete",
    S1_T6: "Complete",
    S1_T7: "Complete",
    S1_T8: "Complete",
    S1_T9: "Complete",
    S1_T10: "Complete",
    S1_T11: "Complete",
    S2_T1: "Complete",
    S2_T2: "In-Progress",
    S2_T3: "Blocked",
    S2_T4: "In-Progress",
  },
  {
    id: 2,
    migration_ownerId: 2,
    migration_type: "PaaS",
    os: null,
    app_name: "W3.SPA",
    status: "Blocked",
    S1_T1: "Complete",
    S1_T2: "In-Progress",
    S1_T3: "In-Progress",
    S1_T4: "In-Progress",
    S1_T5: "Blocked",
  },
  {
    id: 3,
    migration_ownerId: 2,
    migration_type: "IaaS",
    os: "Linux",
    app_name: "SOOWEBCAMS",
    status: "In-Progress",
    S1_T1: "Complete",
    S1_T2: "Complete",
    S1_T3: "Complete",
    S1_T4: "Complete",
    S1_T5: "Complete",
    S1_T6: "Complete",
    S1_T7: "Complete",
    S1_T8: "Complete",
    S1_T9: "Complete",
    S1_T10: "Complete",
    S1_T11: "Complete",
    S2_T1: "Complete",
    S2_T2: "Complete",
    S2_T3: "Complete",
    S2_T4: "Complete",
    S2_T5: "Complete",
    S3_T1: "Complete",
    S3_T2: "In-Progress",
    S3_T3: "In-Progress",
  },
  {
    id: 4,
    migration_ownerId: 1,
    migration_type: "IaaS",
    os: "Windows",
    app_name: "WC.LRL",
    status: "In-Progress",
    S1_T1: "Complete",
    S1_T2: "In-Progress",
    S1_T3: "Not-Started",
    S1_T4: "Not-Started",
    S1_T5: "Not-Started",
    S1_T6: "Not-Started",
    S1_T7: "Not-Started",
    S1_T8: "Not-Started",
    S1_T9: "Not-Started",
    S1_T10: "Not-Started",
    S1_T11: "Not-Started",
    S2_T1: "Not-Started",
    S2_T2: "Not-Started",
    S2_T3: "Not-Started",
    S2_T4: "Not-Started",
    S2_T5: "Not-Started",
    S3_T1: "Not-Started",
    S3_T2: "Not-Started",
    S3_T3: "Not-Started",
    S3_T4: "Not-Started",
    S3_T5: "Not-Started",
    S3_T6: "Not-Started",
    S3_T7: "Not-Started",
    S3_T8: "Not-Started",
    S3_T9: "Not-Started",
    S3_T10: "Not-Started",
    S3_T11: "Not-Started",
  },
  {
    id: 5,
    migration_ownerId: 4,
    migration_type: "IaaS",
    os: "Linux",
    app_name: "ERD.RSM",
    status: "In-Progress",
    S1_T1: "Complete",
    S1_T2: "In-Progress",
    S1_T3: "In-Progress",
    S1_T4: "In-Progress",
    S1_T5: "In-Progress",
    S1_T6: "In-Progress",
  },
  {
    id: 6,
    migration_ownerId: 3,
    migration_type: "IaaS",
    os: "Windows",
    app_name: "ERD.CIRP",
    status: "Blocked",
    S1_T1: "Complete",
    S1_T2: "Complete",
    S1_T3: "Complete",
    S1_T4: "Complete",
    S1_T5: "Complete",
    S1_T6: "Complete",
    S1_T7: "Complete",
    S1_T8: "Complete",
    S1_T9: "Complete",
    S1_T10: "Complete",
    S1_T11: "Complete",
    S2_T1: "Complete",
    S2_T2: "Complete",
    S2_T3: "Complete",
    S2_T4: "Complete",
    S2_T5: "Complete",
    S3_T1: "In-Progress",
    S3_T2: "Blocked",
    S3_T3: "Blocked",
    S3_T4: "In-Progress",
  },
  {
    id: 7,
    migration_ownerId: 5,
    migration_type: "PaaS",
    os: null,
    app_name: "LRP.GEO",
    status: "In-Progress",
    S1_T1: "In-Progress",
    S1_T2: "In-Progress",
    S1_T3: "In-Progress",
    S1_T4: "In-Progress",
    S1_T5: "In-Progress",
    S1_T6: "In-Progress",
    S1_T7: "Complete",
  },
  {
    id: 8,
    migration_ownerId: 5,
    migration_type: "IaaS",
    os: "Windows",
    app_name: "G6.EFT",
    status: "Complete",
    S1_T1: "Complete",
    S1_T2: "Complete",
    S1_T3: "Complete",
    S1_T4: "Complete",
    S1_T5: "Complete",
    S1_T6: "Complete",
    S1_T7: "Complete",
    S1_T8: "Complete",
    S1_T9: "Complete",
    S1_T10: "Complete",
    S1_T11: "Complete",
    S2_T1: "Complete",
    S2_T2: "Complete",
    S2_T3: "Complete",
    S2_T4: "Complete",
    S2_T5: "Complete",
    S3_T1: "Complete",
    S3_T2: "Complete",
    S3_T3: "Complete",
    S3_T4: "Complete",
    S3_T5: "Complete",
    S3_T6: "Complete",
    S3_T7: "Complete",
    S3_T8: "Complete",
    S3_T9: "Complete",
    S3_T10: "Complete",
    S3_T11: "Complete",
  },
  {
    id: 9,
    migration_ownerId: 4,
    migration_type: "PaaS",
    os: null,
    app_name: "MOBBEY",
    status: "Blocked",
    S1_T1: "Complete",
    S1_T2: "Complete",
    S1_T3: "Complete",
    S1_T4: "Complete",
    S1_T5: "Complete",
    S1_T6: "Complete",
    S1_T7: "Complete",
    S1_T8: "Complete",
    S1_T9: "Complete",
    S1_T10: "Complete",
    S1_T11: "Complete",
    S2_T1: "Complete",
    S2_T2: "In-Progress",
    S2_T3: "Blocked",
    S2_T4: "In-Progress",
  },
  {
    id: 10,
    migration_ownerId: 2,
    migration_type: "PaaS",
    os: null,
    app_name: "CRABB",
    status: "In-Progress",
    S1_T1: "Complete",
    S1_T2: "Complete",
    S1_T3: "Complete",
    S1_T4: "Complete",
    S1_T5: "Complete",
    S1_T6: "Complete",
    S1_T7: "Complete",
    S1_T8: "Complete",
    S1_T9: "Complete",
    S1_T10: "Complete",
    S1_T11: "Complete",
    S2_T1: "Complete",
    S2_T2: "In-Progress",
    S2_T3: "In-Progress",
    S2_T4: "In-Progress",
  },
  {
    id: 11,
    migration_ownerId: 6,
    migration_type: "IaaS",
    os: null,
    app_name: "SIMPLE",
    status: "In-Progress",
    S1_T1: "Complete",
    S1_T2: "Complete",
    S1_T3: "Complete",
    S1_T4: "Complete",
    S1_T5: "Complete",
    S1_T6: "Complete",
    S1_T7: "Complete",
    S1_T8: "Complete",
    S1_T9: "Complete",
    S1_T10: "Complete",
    S1_T11: "Complete",
    S2_T1: "Complete",
    S2_T2: "In-Progress",
    S2_T3: "In-Progress",
    S2_T4: "In-Progress",
  },
  {
    id: 12,
    migration_ownerId: 6,
    migration_type: "IaaS",
    os: null,
    app_name: "CUP",
    status: "Not-Started",
    S1_T1: "Not-Started",
    S1_T2: "Not-Started",
    S1_T3: "Not-Started",
    S1_T4: "Not-Started",
    S1_T5: "Not-Started",
    S1_T6: "Not-Started",
    S1_T7: "Not-Started",
    S1_T8: "Not-Started",
    S1_T9: "Not-Started",
    S1_T10: "Not-Started",
    S1_T11: "Not-Started",
    S2_T1: "Not-Started",
    S2_T2: "Not-Started",
    S2_T3: "Not-Started",
    S2_T4: "Not-Started",
  },
];

const newMigration = {
  id: null,
  ownerId: null,
  migrationTypeId: null,
  os: null,
  app_name: "",
  status: "Not-Started",
  stages: [
    {
      stage_Id: 1,
      description: "Engage customer",
      status: "Not-Started",
      tasks: [
        {
          id: 1,
          stageId: 1,
          name: "S1_T1",
          task: "Create SSI ticket to track migration",
          status: "Not-Started",
        },
        {
          id: 2,
          stageId: 1,
          name: "S1_T2",
          task: "Kick off with customer",
          status: "Not-Started",
        },
        {
          id: 3,
          stageId: 1,
          name: "S1_T3",
          task: "Complete the Application Service Document (ASD)",
          status: "Not-Started",
        },
        {
          id: 4,
          stageId: 1,
          name: "S1_T4",
          task: "Request Public Affairs Office (PAO) approval email",
          status: "Not-Started",
        },
        {
          id: 5,
          stageId: 1,
          name: "S1_T5",
          task:
            "Request Impact Level Assessment and Information Survey Type be completed",
          status: "Not-Started",
        },
        {
          id: 6,
          stageId: 1,
          name: "S1_T6",
          task: "Request 508 scan compliance in a work order",
          status: "Not-Started",
        },
        {
          id: 7,
          stageId: 1,
          name: "S1_T7",
          task: "Request HPFortify scan on site",
          status: "Not-Started",
        },
        {
          id: 8,
          stageId: 1,
          name: "S1_T8",
          task: "Create diagram",
          status: "Not-Started",
        },
        {
          id: 9,
          stageId: 1,
          name: "S1_T9",
          task:
            "Fill out the (VM request - IaaS) or (Webapp request - PaaS) form based on your project type",
          status: "Not-Started",
        },
      ],
    },
    {
      stage_id: 2,
      stage: "Request approval",
      status: "Not-Started",
      tasks: [
        {
          id: 10,
          stageId: 2,
          name: "S2_T1",
          task:
            "Request Cloud Service Program Management Office (CSPMO) approval",
          status: "Not-Started",
        },
        {
          id: 11,
          stageId: 2,
          name: "S2_T2",
          task: "Create work order",
          status: "Not-Started",
        },
        {
          id: 12,
          stageId: 2,
          name: "S2_T3",
          task: "Schedule meeting with engineering",
          status: "Not-Started",
        },
        {
          id: 13,
          stageId: 2,
          name: "S2_T4",
          task: "Include diagram and request worksheet",
          status: "Not-Started",
        },
      ],
    },
    {
      stage_id: 3,
      stage: "Request resources",
      status: "Not-Started",
      tasks: [
        {
          id: 14,
          stageId: 3,
          name: "S3_T1",
          task:
            "Request resources provisioned ('VM', App server, database, webapp)",
          status: "Not-Started",
        },
        {
          id: 15,
          stageId: 3,
          name: "S3_T2",
          task: "Verify Windows/RHEL VM configuration",
          status: "Not-Started",
        },
        {
          id: 16,
          stageId: 3,
          name: "S3_T3",
          task: "Confirm server in correct vnet/subnet",
          status: "Not-Started",
        },
        {
          id: 17,
          stageId: 3,
          name: "S3_T4",
          task: "Confirm tags are accurate",
          status: "Not-Started",
        },
        {
          id: 18,
          stageId: 3,
          name: "S3_T5",
          task: "Confirm/Request our group (- ????) is added to access server",
          status: "Not-Started",
        },
        {
          id: 19,
          stageId: 3,
          name: "S3_T6",
          task: "Confirm/Test login access to the server using RDP/SSH",
          status: "Not-Started",
        },
        {
          id: 20,
          stageId: 3,
          name: "S3_T7",
          task: "Confirm/Test access to server using SFTP",
          status: "Not-Started",
        },
        {
          id: 21,
          stageId: 3,
          name: "S3_T8",
          task: "Confirm that app storage is mounted",
          status: "Not-Started",
        },
        {
          id: 22,
          stageId: 3,
          name: "S3_T9",
          task: "Update ASD with server information",
          status: "Not-Started",
        },
        {
          id: 23,
          stageId: 3,
          name: "S3_T10",
          task: "Update Azure IL4 server spreadsheet",
          status: "Not-Started",
        },
        {
          id: 24,
          stageId: 3,
          name: "S3_T11",
          task: "Request HPFortify scan on new server",
          status: "Not-Started",
        },
      ],
    },
    {
      stage_id: 4,
      stage: "Configure resources",
      status: "Not-Started",
      tasks: [
        {
          id: 25,
          stageId: 4,
          name: "S4_T1",
          task: "Configure database",
          status: "Not-Started",
        },
        {
          id: 26,
          stageId: 4,
          name: "S4_T2",
          task: "Configure staging server",
          status: "Not-Started",
        },
        {
          id: 27,
          stageId: 4,
          name: "S4_T3",
          task: "Configure website",
          status: "Not-Started",
        },
        {
          id: 28,
          stageId: 4,
          name: "S4_T4",
          task:
            "Confirm AD Group or LDAP Role is created (name of group or role)",
          status: "Not-Started",
        },
        {
          id: 29,
          stageId: 4,
          name: "S4_T5",
          task: "Create IIS config doc",
          status: "Not-Started",
        },
        {
          id: 30,
          stageId: 4,
          name: "S4_T6",
          task: "Configure app server",
          status: "Not-Started",
        },
        {
          id: 31,
          stageId: 4,
          name: "S4_T7",
          task: "Update ASD with applicable information",
          status: "Not-Started",
        },
      ],
    },
    {
      stage_id: 5,
      stage: "Testing",
      status: "Not-Started",
      tasks: [
        {
          id: 32,
          stageId: 5,
          name: "S5_T1",
          task: "Request customer test app/site",
          status: "Not-Started",
        },
        {
          id: 32,
          stageId: 5,
          name: "S5_T2",
          task: "Notify customer that app/site configured",
          status: "Not-Started",
          notes:
            "Isn't the site already configured since in previous we requested they test?",
        },
        {
          id: 33,
          stageId: 5,
          name: "S5_T3",
          task: "Verify that customer can access the site",
          status: "Not-Started",
          notes: "How is test app/site different from access site?",
        },
        {
          id: 34,
          stageId: 5,
          name: "S5_T4",
          task: "Verify that customer can WinSCP to server and upload files",
          status: "Not-Started",
        },
        {
          id: 35,
          stageId: 5,
          name: "S5_T5",
          task:
            "Verify that automation of file transer is working for customer",
          status: "Not-Started",
          notes: "Does this apply to only PaaS with it's staging?",
        },
      ],
    },
    {
      stage_id: 6,
      stage: "Cutover",
      status: "Not-Started",
      tasks: [
        {
          id: 36,
          stageId: 6,
          name: "S6_T1",
          task: "DNS update",
          status: "Not-Started",
        },
      ],
    },
    {
      stage_id: 7,
      stage: "Closeout",
      status: "Not-Started",
      tasks: [
        {
          id: 37,
          stageId: 7,
          name: "S7_T1",
          task: "Email service owner and operations team",
          status: "Not-Started",
        },
        {
          id: 38,
          stageId: 7,
          name: "S7_T2",
          task: "Update the all sites (Core) list",
          status: "Not-Started",
        },
      ],
    },
  ],
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
  newMigration,
  members,
  stages,
  stages_tasks,
  migration_tasks,
  operating_systems,
  migration_types,
  migrations,
};
