// Portfolio data store for Edwin Joe M
export const personalInfo = {
  "name": "EDWIN JOE M",
  "role": "Software Developer & AI/ML Engineer",
  "location": "Trichy, Tamil Nadu, India",
  "email": "edwinjoe550@gmail.com",
  "phone": "+91 94892 23155",
  "github": "https://github.com/Edwinjoe2006",
  "linkedin": "https://www.linkedin.com/in/edwin-joe-m-341208329?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  "education": {
    "degree": "B.Tech in Information Technology",
    "institution": "SRM Institute of Science and Technology",
    "cgpa": "9.35 / 10.0",
    "status": "Undergraduate",
    "highlight": "CGPA: 9.35 / 10.0 — Maintaining a strong academic foundation in Information Technology, with a focus on programming, AIML, web development, and core computer science concepts."
  },
  "bio": "Information Technology student interested in software development, artificial intelligence, machine learning, full-stack development, and data analysis. Experienced in building practical software projects involving ML, REST APIs, databases, dashboards, and web applications.",
  "aboutExtended": "I specialize in developing scalable software solutions and intelligent machine learning applications. From architecting end-to-end full-stack web platforms with robust relational databases to creating predictive ML models and clinical monitoring platforms, I focus on clean code, performance, and user-centric designs."
};

export const metrics = [
  {
    "label": "Academic CGPA",
    "value": "9.35",
    "suffix": "/ 10.0",
    "detail": "SRM Institute of Science & Technology"
  },
  {
    "label": "Featured Systems",
    "value": "4+",
    "suffix": "Shipped",
    "detail": "Full-Stack & ML Applications"
  },
  {
    "label": "Virtual Internship",
    "value": "1",
    "suffix": "Completed",
    "detail": "YuvaIntern (R Data Analytics)"
  },
  {
    "label": "Core Competencies",
    "value": "15+",
    "suffix": "Skills",
    "detail": "DSA, OOP, Full-Stack & ML"
  }
];

export const skillsData = {
  "Languages": [
    {
      "name": "Python",
      "level": 80,
      "icon": "Terminal",
      "highlight": "Backend development, ML models (Scikit-learn), Flask, and automation"
    },
    {
      "name": "Java",
      "level": 77,
      "icon": "Coffee",
      "highlight": "Object-oriented programming, data structures, and core software design"
    },
    {
      "name": "SQL",
      "level": 79,
      "icon": "Database",
      "highlight": "Relational queries, complex joins, table design, and indexing"
    },
    {
      "name": "HTML5 & CSS3",
      "level": 78,
      "icon": "Layout",
      "highlight": "Semantic web markup, responsive design, and modern UI styling"
    }
  ],
  "Core CS Fundamentals": [
    {
      "name": "Data Structures & Algorithms",
      "level": 80,
      "icon": "Binary",
      "highlight": "Arrays, trees, graphs, sorting, searching, and algorithmic optimization"
    },
    {
      "name": "Object-Oriented Programming (OOP)",
      "level": 79,
      "icon": "Boxes",
      "highlight": "Encapsulation, inheritance, polymorphism, abstraction, and modular code"
    },
    {
      "name": "Database Management Systems (DBMS)",
      "level": 78,
      "icon": "Database",
      "highlight": "ACID properties, relational modeling, normalization, and concurrency"
    },
    {
      "name": "Operating Systems",
      "level": 76,
      "icon": "Cpu",
      "highlight": "Process synchronization, memory management, scheduling, and system calls"
    },
    {
      "name": "Computer Networks",
      "level": 75,
      "icon": "Network",
      "highlight": "TCP/IP stack, HTTP protocols, network architectures, and sockets"
    }
  ],
  "Web & Frameworks": [
    {
      "name": "React.js",
      "level": 80,
      "icon": "Atom",
      "highlight": "Modular component architecture, hooks, state management, and modern UI"
    },
    {
      "name": "Node.js",
      "level": 77,
      "icon": "Server",
      "highlight": "Backend runtime, asynchronous programming, and server architecture"
    },
    {
      "name": "Express.js",
      "level": 78,
      "icon": "Layers",
      "highlight": "Web framework for routing, middleware management, and controllers"
    },
    {
      "name": "Flask",
      "level": 76,
      "icon": "Terminal",
      "highlight": "Micro web framework for machine learning model serving and backend services"
    }
  ],
  "Databases, AI & Tools": [
    {
      "name": "MySQL",
      "level": 79,
      "icon": "Database",
      "highlight": "Relational schema design, transactions, data integrity, and queries"
    },
    {
      "name": "SQLite",
      "level": 77,
      "icon": "Database",
      "highlight": "Lightweight embedded relational database for local workflows and prototyping"
    },
    {
      "name": "Machine Learning",
      "level": 78,
      "icon": "Brain",
      "highlight": "Supervised learning, classification algorithms with Scikit-learn, and model scoring"
    },
    {
      "name": "Git & GitHub",
      "level": 80,
      "icon": "GitBranch",
      "highlight": "Version control, repository management, branching, and collaboration"
    },
    {
      "name": "VS Code",
      "level": 80,
      "icon": "Code",
      "highlight": "Efficient code editing, debugging, environment customization, and tools"
    }
  ]
};

export const projects = [
  {
    "id": "fraud-detection",
    "title": "Graph-Based Financial Fraud Detection System",
    "tagline": "ML-based fraud detection engine powered by network centrality features and Flask APIs",
    "category": "AI & Machine Learning",
    "featured": true,
    "techStack": [
      "Python",
      "Flask",
      "NetworkX",
      "Scikit-learn",
      "NumPy",
      "Pandas"
    ],
    "githubUrl": "https://github.com/Edwinjoe2006",
    "liveDemo": null,
    "accentColor": "from-indigo-500 to-purple-600",
    "badge": "AI & Machine Learning",
    "overview": "A financial fraud detection system that constructs transaction networks between accounts to extract topological graph centrality metrics and feeds them into machine learning classifiers to identify anomalous transactions and potential fraud rings.",
    "highlights": [
      "Ingests financial records and models transactions as directed networks between accounts.",
      "Computes graph centrality features (Degree, Betweenness, PageRank) using NetworkX as ML inputs.",
      "Employs supervised ML classification (Scikit-learn) with precision-tuned decision thresholds.",
      "Exposes lightweight Flask endpoints for rapid fraud risk predictions upon incoming transaction payloads."
    ],
    "architecture": "Transaction Data -> Network Modeling (NetworkX) -> Centrality Feature Extraction -> ML Classifier (Scikit-Learn) -> Flask API Endpoint -> Prediction Output"
  },
  {
    "id": "patient-monitoring",
    "title": "Real-Time Multi-Patient Monitoring System",
    "tagline": "Real-time clinical monitoring platform with ML anomaly detection & alert automation",
    "category": "AI & Machine Learning",
    "featured": true,
    "techStack": [
      "Python",
      "Flask",
      "Machine Learning",
      "WebSocket",
      "SQLite"
    ],
    "githubUrl": "https://github.com/Edwinjoe2006",
    "liveDemo": null,
    "accentColor": "from-cyan-500 to-blue-600",
    "badge": "Healthcare Tech",
    "overview": "A medical telemetry platform designed to monitor multiple patients simultaneously, continuously evaluating vital signs telemetry (heart rate, SpO2, blood pressure) with ML anomaly detection to flag irregular patterns.",
    "highlights": [
      "Multi-stream telemetry ingestion designed for concurrent ward and patient vital signals.",
      "Integrated ML-driven anomaly detection models to detect irregular patterns ahead of conventional alarms.",
      "Interactive medical monitoring dashboard displaying vital charts, trends, and risk triage statuses.",
      "Automated alert dispatch pipeline triggering visual notifications for rapid clinical intervention."
    ],
    "architecture": "Telemetry Vitals Stream -> Flask Gateway -> ML Anomaly Scoring -> Live Medical Dashboard -> Automated Alert Notifications"
  },
  {
    "id": "hospital-management",
    "title": "Hospital Management System",
    "tagline": "Full-stack healthcare platform for appointments, patient records & role-based access",
    "category": "Full-Stack Web",
    "featured": true,
    "techStack": [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT"
    ],
    "githubUrl": "https://github.com/Edwinjoe2006",
    "liveDemo": null,
    "accentColor": "from-emerald-500 to-teal-600",
    "badge": "Full-Stack Web",
    "overview": "An enterprise hospital management platform engineered to coordinate appointments, maintain electronic health records (EHR), automate billing calculations, and enforce granular role-based access control for doctors, staff, and patients.",
    "highlights": [
      "Granular role-based access control (Doctor, Patient, Admin, Staff) with JWT authentication.",
      "Normalized relational database design in MySQL supporting transaction-safe appointments and records.",
      "Interactive React dashboard with appointment calendars, doctor slot scheduling, and prescription generation.",
      "Automated invoice creation, patient records tracking, and printable medical summary views."
    ],
    "architecture": "React.js Client -> Node.js / Express Gateway -> JWT Middleware -> Relational Services -> MySQL Database Cluster"
  },
  {
    "id": "ngo-student-portal",
    "title": "NGO Student Management Portal",
    "tagline": "Institutional management portal supporting 500+ student records & sponsorships",
    "category": "Full-Stack Web",
    "featured": true,
    "techStack": [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT"
    ],
    "githubUrl": "https://github.com/Edwinjoe2006",
    "liveDemo": null,
    "accentColor": "from-amber-500 to-orange-600",
    "badge": "500+ Records",
    "overview": "A social impact web portal designed for educational NGOs to maintain comprehensive student academic records, verify welfare sponsorships, organize mentor allocations, and streamline institutional administrative duties.",
    "highlights": [
      "Engineered to handle 500+ active student records with rapid search, multi-criteria filtering, and pagination.",
      "JWT-secured endpoints with role-based permissions for NGO coordinators and administrators.",
      "Interactive administrative overview providing visibility into student academic progress and sponsorship funds.",
      "Record management pipeline for student onboarding, academic reporting, and scholarship verification."
    ],
    "architecture": "React Frontend -> Express.js API Layer -> Authentication Guards -> Database Services"
  }
];

export const experiences = [
  {
    "id": "srm-ist",
    "type": "Education",
    "role": "B.Tech in Information Technology",
    "organization": "SRM Institute of Science and Technology",
    "location": "Trichy / Chennai, Tamil Nadu",
    "period": "Undergraduate Program",
    "grade": "CGPA: 9.35 / 10.0",
    "badge": "CGPA: 9.35 / 10.0",
    "description": "Maintaining a strong academic foundation in Information Technology, with a focus on programming, AIML, web development, and core computer science concepts.",
    "skills": [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Python & Java"
    ]
  },
  {
    "id": "yuva-intern",
    "type": "Virtual Internship",
    "role": "Virtual R Data Analyst Intern",
    "organization": "YuvaIntern",
    "location": "Virtual / Online",
    "period": "Virtual Internship Program",
    "grade": "Verified Credential",
    "badge": "Data Analytics",
    "description": "Conducted in-depth statistical data analysis, exploratory data analysis, hypothesis testing, and dynamic data visual representations using R programming and data science toolkits.",
    "skills": [
      "R Programming",
      "Statistical Data Analysis",
      "Data Cleaning & Wrangling",
      "Data Visualization",
      "Exploratory Analysis"
    ]
  }
];
