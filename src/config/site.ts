export const site = {
  name: "Adnan Iftikhar",
  initials: "AI",
  title: "Data Analyst & Sales Operational Analyst",
  location: "Dublin, Ireland",
  status: "Authorised to work in Ireland",
  email: "adnaniftikhar430@gmail.com",
  phone: "+353 83 849 1023",
  linkedin: "https://www.linkedin.com/in/adnaniftikhar",
  linkedinHandle: "in/adnaniftikhar",
  portrait: "/adnan.png",
  summary:
    "Business & Sales Operational Analyst with 3+ years of experience turning customer, operational, and commercial data into management reporting, forecasts, and actionable business insights. I use Advanced Excel, Power BI, and SQL to track performance, analyse trends, build reporting solutions, and support planning decisions across multiple stakeholder groups.",
  highlights: [
    { label: "Experience", value: "3+ years" },
    { label: "Focus", value: "Data & Sales Operations" },
    { label: "Based in", value: "Dublin, IE" },
  ],
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const experiences = [
  {
    title: "Sales Operational Analyst",
    company: "Eurasia Supermarket",
    period: "Oct 2025 – Present",
    highlights: [
      "Orchestrated regional performance reporting across 4 Dublin locations utilizing Power BI and Excel, tracking €12 million in revenue and key commercial metrics for executive leadership.",
      "Engineered forecasting and scenario models for pricing, promotions, and demand generation, driving data-backed strategic planning that increased margin visibility by 18%.",
      "Conducted advanced commercial and financial analysis on complex datasets, proactively identifying revenue risks and uncovering €450K in regional market opportunities.",
      "Streamlined customer and operational data architecture across Salesforce and enterprise reporting datasets, enhancing data integrity and reducing reporting turnaround time by 30%.",
      "Partnered with 5+ cross-functional stakeholders to translate KPI metrics into actionable business strategies, directly supporting regional growth initiatives."
    ],
  },
  {
    title: "Data Analyst",
    company: "Txend",
    period: "Dec 2021 – Aug 2024",
    highlights: [
      "Gathered requirements from 5 product and operations stakeholders, delivering scalable SQL and Power BI reporting across million-row datasets and reducing rework by 25%.",
      "Automated Snowflake and SQL Server reporting pipelines, eliminating manual data handling and improving enterprise reporting reliability across teams.",
      "Optimised ETL workflows end-to-end, reducing pipeline runtime by 60% and shortening analytics delivery windows from hours to minutes.",
      "Implemented data quality controls and monitoring across large-scale pipelines, reducing production data issues by 30% and improving auditability.",
      "Led User Acceptance Testing (UAT) across 3 product releases, identifying 5 critical defects per cycle and improving decision turnaround time by 18%."
    ],
  }
];

export const projects = [
  {
    title: "Multi-Store Commercial Performance & Pricing Analysis",
    subtitle: "Eurasia Supermarket",
    period: "Dublin, Ireland",
    description:
      "Core Tools: Power BI, SQL, Salesforce, Advanced Excel",
    highlights: [
      "Integrated sales, customer, and CRM data across 4 Dublin supermarkets, creating a consistent management view of revenue, margin, demand, and store performance.",
      "Built recurring Power BI and Excel reporting across 20+ categories, giving management clearer visibility of KPIs, trends, risks, and business opportunities.",
      "Analysed historical sales, customer activity, and promotional performance to support forecasting, scenario modelling, and short-term business planning.",
      "Validated Salesforce and reporting data against source records, improving consistency and reliability of management information used by stakeholders."
    ],
    tags: ["Power BI", "SQL", "Salesforce", "Excel"],
  },
  {
    title: "Customer & Business Performance Analysis",
    subtitle: "Txend / MyStudio Pro",
    period: "",
    description:
      "Core Tools: SQL, Power BI, Python, Excel",
    highlights: [
      "Consolidated customer, studio, and product-usage data from multiple business systems, creating a reliable dataset for customer and performance analysis.",
      "Analysed registrations, active users, and engagement trends to identify changes in customer behaviour and provide clearer business insights to Product and Operations teams.",
      "Applied SQL validation and reconciliation check to resolve duplicate, incomplete, and inconsistent records, strengthening data integrity and downstream reporting.",
      "Defined consistent customer and product KPIs for recurring dashboards, improving comparability and confidence in management reporting."
    ],
    tags: ["SQL", "Power BI", "Python", "Excel"],
  },
  {
    title: "Supplier Delivery Performance & Risk Analysis",
    subtitle: "National College of Ireland / TickPlunge",
    period: "",
    description:
      "Core Tools: PostgreSQL, Power BI, Python",
    highlights: [
      "Analysed supplier, delivery, and customer-complaint data to identify delay patterns, recurring performance issues, and higher-risk operational areas.",
      "Built Power BI reporting around 8+ performance indicators, giving stakeholders a clearer view of supplier performance, delays, and complaint trends.",
      "Developed a predictive model in Python to identify higher-risk delivery failures, achieving 81% accuracy and supporting more proactive planning.",
      "Translated the analysis into clear management insights, showing where performance issues were most likely to affect service delivery."
    ],
    tags: ["PostgreSQL", "Power BI", "Python"],
  }
];

export const skillCategories = [
  {
    title: "Core Competencies",
    skills: [
      "Business Analysis",
      "Data Analysis",
      "Complex Data Sets",
      "Key Metrics",
      "Requirements Gathering",
      "Problem-Solving",
    ],
  },
  {
    title: "Reporting & Planning",
    skills: [
      "Management Reporting",
      "Performance Reporting",
      "KPI Tracking",
      "Dashboard Development",
      "Forecasting",
      "Scenario Modelling",
    ],
  },
  {
    title: "Technical & Tools",
    skills: [
      "Advanced Excel",
      "Power BI",
      "Salesforce",
      "SQL",
      "Python",
      "PostgreSQL",
      "Snowflake"
    ],
  },
];

export const education = [
  {
    degree: "Master of Science (MSc) in Data Analytics",
    school: "National College of Ireland (NCI)",
    details: "Modules: Data Governance & Ethics, Business Intelligence, Machine Learning, Analytics Programming.",
    period: "2025",
  }
];

export const certificates = [
  {
    id: "cert-1",
    title: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    description:
      "In Progress",
  },
  {
    id: "cert-2",
    title: "MySQL for Data Analytics",
    description:
      "Analyst Builder",
  }
];
