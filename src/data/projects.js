export const projects = [
  {
    slug: "smart-tourism-guide",
    title: "Smart Tourism Guide",
    subtitle: "Full Stack · Travel",
    description:
      "Location-aware travel assistant with maps, destination data, and a Spring Boot API over MySQL.",
    image: "/projects/smart-tourism.png",
    tech: ["React.js", "Spring Boot", "MySQL", "REST API"],
    githubUrl: "https://github.com/JanmjayGit",
    liveUrl: "https://vaygoapp.vercel.app/",
    stars: null,
    outcome: "Shipped a public travel UI with live maps and persisted destination data.",
    problem:
      "Travelers land in a new city with fragmented information: maps in one app, listings in another, and no single place that ties location to practical tourism context.",
    constraints:
      "Had to stay cheap to host, keep map interactions smooth on mid-range phones, and store structured place data without a heavy GIS stack. Timeboxed around coursework.",
    architecture:
      "React SPA talks to Spring Boot REST endpoints. MySQL holds places, categories, and user-facing copy. The client renders an interactive map and detail views from those APIs.",
    results: [
      "Public demo live on Vercel (Vaygo).",
      "REST + MySQL persistence instead of mocked client state.",
      "Map + listing flow usable as a real travel assistant prototype.",
    ],
    lessons:
      "Map UIs fail when the API over-fetches. Paginate, cache place payloads, and keep markers dumb until the user asks for detail.",
  },
  {
    slug: "cloudshare",
    title: "CloudShare",
    subtitle: "Full Stack · Cloud",
    description:
      "Cloud storage product with auth, payments, and file metadata handled through webhooks.",
    image: "/projects/cloudshare.png",
    tech: ["React.js", "Spring Boot", "MongoDB", "Webhooks"],
    githubUrl: "https://github.com/JanmjayGit",
    liveUrl: "https://cloud-share-frontend-ashen.vercel.app/",
    stars: null,
    outcome: "End-to-end file product with Clerk auth and Razorpay checkout.",
    problem:
      "Personal file sharing still means either a consumer drive with no billing control or a raw S3 bucket with no product UX.",
    constraints:
      "Needed third-party auth and payments without building PCI or identity from scratch. File bytes and metadata had to stay consistent after async payment events.",
    architecture:
      "React frontend, Spring Boot API, MongoDB for file metadata and webhook event logs. Clerk handles sessions; Razorpay confirms plans via webhooks that update entitlements.",
    results: [
      "Auth + paid upgrade path in a single product flow.",
      "Webhook handlers keep metadata aligned with payment state.",
      "Responsive storage UI for upload and management.",
    ],
    lessons:
      "Treat webhooks as the source of truth. Idempotent event IDs in MongoDB save you when the provider retries.",
  },
  {
    slug: "moneymanager",
    title: "MoneyManager",
    subtitle: "Full Stack · Finance",
    description:
      "Income and expense tracker with REST APIs, analysis views, and a mobile-friendly UI.",
    image: "/projects/moneymanager.png",
    tech: ["React.js", "Spring Boot", "PostgreSQL", "REST API"],
    githubUrl: "https://github.com/JanmjayGit",
    liveUrl: "https://money-manager-frontend-virid.vercel.app/",
    stars: null,
    outcome: "About 30% faster after query and payload cleanup.",
    problem:
      "People track money in spreadsheets that do not work well on a phone and never produce a clean monthly picture.",
    constraints:
      "Had to feel native on a narrow screen, keep financial records consistent, and avoid a slow dashboard as rows grew.",
    architecture:
      "Spring Boot REST services persist income/expense records in PostgreSQL. React consumes aggregated endpoints for charts and lists rather than summing on the client.",
    results: [
      "Desktop and mobile layouts for the same API.",
      "Reported ~30% performance gain from query/code optimization.",
      "Clear split between write APIs and read/analysis endpoints.",
    ],
    lessons:
      "Dashboards die on N+1 summaries. Aggregate in SQL, not in the browser.",
  },
  {
    slug: "email-automation",
    title: "Email Automation System",
    subtitle: "AI/ML · Automation",
    description:
      "Inbox-to-reply pipeline using Spring AI to draft responses and cut handling time.",
    image: "/projects/email-automation.png",
    tech: ["React.js", "Spring Boot", "Spring AI", "AI/ML"],
    githubUrl: "https://github.com/JanmjayGit",
    liveUrl: "https://email-reply-fend.vercel.app/",
    stars: null,
    outcome: "About 40% less time spent processing routine email.",
    problem:
      "Support-style inboxes waste time on repetitive replies that still need a human to hit send.",
    constraints:
      "Model calls are slow and billable. The UI had to show a draft the user could edit, not a black-box auto-send. Prompt quality mattered more than fancy chrome.",
    architecture:
      "Frontend captures or displays a message. Spring Boot + Spring AI runs the generation pipeline and returns a draft. The user reviews before anything leaves the system.",
    results: [
      "End-to-end parse → draft → review flow.",
      "Reported ~40% reduction in processing time for routine mail.",
      "Human stays in the loop; the model does not send unsupervised.",
    ],
    lessons:
      "AI features are product features. Latency, empty states, and editability matter as much as the prompt.",
  },
  {
    slug: "patient-medicine-tracker",
    title: "Patient Medicine Tracker",
    subtitle: "Full Stack · Healthcare",
    description:
      "Appointments, medication reminders, and a simpler way to keep medical context in one place.",
    image: "/projects/patient-tracker.png",
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
    githubUrl: "https://github.com/JanmjayGit",
    liveUrl: "https://patient-medicine-appointment-tracki.vercel.app/",
    stars: null,
    outcome: "Centralized scheduling and reminder UX for patients.",
    problem:
      "Missed doses and lost appointment details are still a paper-and-WhatsApp problem for many patients.",
    constraints:
      "Healthcare UIs must stay readable and calm. This version focused on frontend flows rather than a full clinical backend.",
    architecture:
      "React UI for appointments, reminders, and record access patterns. Data is structured for a later API; the current ship is the interaction model.",
    results: [
      "Appointment + reminder flows in one interface.",
      "Emphasis on accessibility and a low-stress layout.",
      "Clear path to attach a secure API later.",
    ],
    lessons:
      "Health products should default to large type, obvious next actions, and no surprise navigation.",
  },
  {
    slug: "fitness-tracker",
    title: "Fitness Tracker",
    subtitle: "Frontend · Health",
    description:
      "Vanilla JS workout and calorie tracker that persists in local storage — no backend required.",
    image: "/projects/fitness-tracker.png",
    tech: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/JanmjayGit",
    liveUrl: "https://fitness-tracker-delta-eight.vercel.app/",
    stars: null,
    outcome: "Offline-friendly tracker that works without an account.",
    problem:
      "Simple workout logs should not require a signup wall or a server you have to keep alive.",
    constraints:
      "No backend, no build-time framework originally, and data had to survive a refresh on the same browser.",
    architecture:
      "Static HTML/CSS/JS with localStorage as the database. The UI reads and writes workout and calorie entries on the client.",
    results: [
      "Works without network after first load.",
      "Zero ops cost.",
      "Good baseline for later syncing to an API.",
    ],
    lessons:
      "localStorage is fine until you need multiple devices. Design the schema as if it will move to a server.",
  },
];
