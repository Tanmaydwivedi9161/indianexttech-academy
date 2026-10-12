// =====================================================================
//  COURSES  -  course add / remove / edit karne ki ek hi jagah
//
//  ADD:    kisi ek { ... } block ko copy karke neeche paste karo, phir badlo.
//  REMOVE: us course ka poora { ... }, block delete kar do.
//  SYLLABUS: "syllabus" me module (title) aur uske topics likho.
//  FEE: number likho (499). Free course ke liye 0 likho.
//  track: "web", "ai" ya "placement" (neeche tracks me dekho)
// =====================================================================

export const tracks = [
  { id: "web", label: "Web Development", roadmap: true },
  { id: "ai", label: "Python & AI", roadmap: true },
  { id: "placement", label: "Placement Prep", roadmap: false },
];

export const courses = [
  // ---------------- WEB DEVELOPMENT ----------------
  {
    id: "web-foundations",
    track: "web",
    title: "Web Foundations",
    level: "Beginner",
    fee: 499,
    tagline: "Start from zero. Learn how the web works, then build your first pages.",
    learn: [
      "How the internet, DNS and HTTP work",
      "HTML5 structure and forms",
      "CSS layouts with Flexbox and Grid",
      "JavaScript basics and the DOM",
    ],
    syllabus: [
      {
        title: "Networking basics",
        topics: ["Client and server", "IP address and DNS", "HTTP and HTTPS", "How a browser loads a page"],
      },
      {
        title: "HTML",
        topics: ["Tags and semantic HTML", "Links, images and lists", "Tables and forms"],
      },
      {
        title: "CSS",
        topics: ["Selectors and the box model", "Flexbox", "Grid", "Responsive design"],
      },
      {
        title: "JavaScript",
        topics: ["Variables and data types", "Functions and loops", "DOM and events"],
      },
    ],
  },
  {
    id: "react-mastery",
    track: "web",
    title: "React Mastery",
    level: "Intermediate",
    fee: 799,
    tagline: "Build fast, interactive interfaces with the most popular front-end library.",
    learn: [
      "Components, props and state",
      "Hooks like useState and useEffect",
      "Routing and forms",
      "Fetching data from APIs",
    ],
    syllabus: [
      { title: "Getting started", topics: ["Vite setup", "JSX", "Components and props"] },
      { title: "State and hooks", topics: ["useState", "useEffect", "useRef", "Custom hooks"] },
      { title: "Routing and forms", topics: ["React Router", "Controlled inputs", "Validation"] },
      { title: "Working with APIs", topics: ["fetch", "Loading and error states", "Deploying a React app"] },
    ],
  },
  {
    id: "nodejs-backend",
    track: "web",
    title: "Node.js Backend",
    level: "Intermediate",
    fee: 799,
    tagline: "Build the server side: APIs, databases and secure logins.",
    learn: [
      "Node.js and Express basics",
      "Building REST APIs",
      "MongoDB for storing data",
      "Login with JWT authentication",
    ],
    syllabus: [
      { title: "Node basics", topics: ["How Node works", "npm and modules", "File system and async code"] },
      { title: "Express", topics: ["Routes and middleware", "REST API design", "Error handling"] },
      { title: "MongoDB", topics: ["Collections and documents", "Mongoose models", "CRUD operations"] },
      { title: "Authentication", topics: ["Password hashing", "JWT tokens", "Protected routes"] },
    ],
  },
  {
    id: "full-stack",
    track: "web",
    title: "Full Stack Developer Program",
    level: "Beginner to Advanced",
    fee: 1999,
    tagline: "The complete path: front end, back end and deployment in one program.",
    learn: [
      "Everything in Foundations, React and Node.js",
      "Git and GitHub workflow",
      "Next.js for production websites",
      "Putting your app online",
    ],
    syllabus: [
      { title: "Front end", topics: ["HTML, CSS and JavaScript", "React and state", "Responsive UI"] },
      { title: "Back end", topics: ["Node and Express", "MongoDB", "JWT authentication"] },
      { title: "Tools", topics: ["Git and GitHub", "Environment variables", "Debugging"] },
      { title: "Going live", topics: ["Next.js basics", "Deployment", "Domain and hosting setup"] },
    ],
  },

  // ---------------- PYTHON & AI ----------------
  {
    id: "python-programming",
    track: "ai",
    title: "Python Programming",
    level: "Beginner",
    fee: 499,
    tagline: "The easiest first language. Learn to think in code and automate small tasks.",
    learn: [
      "Variables, loops and functions",
      "Object-oriented programming",
      "File handling and error handling",
      "Writing small automation scripts",
    ],
    syllabus: [
      { title: "Basics", topics: ["Variables and data types", "Conditions and loops", "Input and output"] },
      { title: "Functions and data", topics: ["Functions", "Lists, tuples and dictionaries", "Strings"] },
      { title: "OOP", topics: ["Classes and objects", "Inheritance", "Modules"] },
      { title: "Files and errors", topics: ["Reading and writing files", "try and except", "Automation scripts"] },
    ],
  },
  {
    id: "numpy-pandas",
    track: "ai",
    title: "Python for Data: NumPy & Pandas",
    level: "Intermediate",
    fee: 599,
    tagline: "Learn the two libraries every data and ML person uses daily.",
    learn: [
      "NumPy arrays and fast maths",
      "Pandas Series and DataFrames",
      "Cleaning messy data",
      "Charts with Matplotlib",
    ],
    syllabus: [
      { title: "NumPy", topics: ["Arrays and indexing", "Broadcasting", "Mathematical functions"] },
      { title: "Pandas", topics: ["Series and DataFrames", "Selecting and filtering", "Grouping and merging"] },
      { title: "Data cleaning", topics: ["Missing values", "Duplicates", "Changing data types"] },
      { title: "Visualisation", topics: ["Line and bar charts", "Histograms", "Reading a chart"] },
    ],
  },
  {
    id: "maths-for-ml",
    track: "ai",
    title: "Mathematics for ML",
    level: "Intermediate",
    fee: 599,
    tagline: "The maths behind machine learning, explained with Python code.",
    learn: [
      "Vectors and matrices",
      "Derivatives and gradients",
      "Probability basics",
      "Statistics for data",
    ],
    syllabus: [
      { title: "Linear algebra", topics: ["Vectors", "Matrices", "Dot product", "Eigenvalues intro"] },
      { title: "Calculus", topics: ["Derivatives", "Partial derivatives", "Gradient descent"] },
      { title: "Probability", topics: ["Basic probability", "Distributions", "Bayes theorem"] },
      { title: "Statistics", topics: ["Mean, median and variance", "Correlation", "Hypothesis testing basics"] },
    ],
  },
  {
    id: "foundations-of-ai",
    track: "ai",
    title: "Foundations of AI",
    level: "Intermediate",
    fee: 999,
    tagline: "Understand how AI works, from simple models to ChatGPT-style systems.",
    learn: [
      "AI vs ML vs Deep Learning",
      "Supervised and unsupervised learning",
      "Building models with Scikit-learn",
      "How neural networks and LLMs work",
    ],
    syllabus: [
      { title: "AI basics", topics: ["What AI is", "ML vs Deep Learning", "Real-world uses"] },
      { title: "Machine learning", topics: ["Regression", "Classification", "Clustering"] },
      { title: "Scikit-learn", topics: ["Train and test split", "Model evaluation", "Overfitting"] },
      { title: "Neural networks and LLMs", topics: ["Neurons and layers", "How training works", "How ChatGPT-style models work"] },
    ],
  },

  // ---------------- PLACEMENT PREP ----------------
  {
    id: "aptitude-reasoning",
    track: "placement",
    title: "Aptitude & Logical Reasoning",
    level: "Beginner",
    fee: 499,
    tagline: "Get ready for the first round of most campus placements.",
    learn: [
      "Percentages, profit and loss, ratio",
      "Time, work and speed problems",
      "Series, puzzles and coding-decoding",
      "Placement-style practice questions",
    ],
    syllabus: [
      {
        title: "Quantitative aptitude",
        topics: ["Number system", "Percentages", "Profit and loss", "Ratio and proportion", "Time and work"],
      },
      {
        title: "Logical reasoning",
        topics: ["Number and letter series", "Coding-decoding", "Blood relations", "Seating arrangement", "Puzzles"],
      },
      { title: "Verbal ability", topics: ["Grammar basics", "Reading comprehension", "Synonyms and antonyms"] },
      { title: "Practice", topics: ["Placement-style question sets", "Shortcuts and tricks", "Time management in tests"] },
    ],
  },
];

// Shows "₹499", or "Free" when fee is 0
export const formatFee = (fee) => (fee === 0 ? "Free" : `₹${fee.toLocaleString("en-IN")}`);
