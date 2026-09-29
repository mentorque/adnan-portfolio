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
  portrait: "/profile.jpeg",
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
    title: "Ireland Live Register Unemployment Analysis",
    subtitle: "CSO Open Data",
    period: "Jan 2022 – Jun 2026",
    description:
      "Core Tools: Excel, Power Query, Power BI, DAX, CSO PxStat",
    highlights: [
      "Analysed 12,600+ CSO Live Register records (PxStat LRM15, Jan 2022–Jun 2026) covering 26 counties, 2 age groups and both sexes. Cleaned and reshaped the raw export in Power Query and reconciled every age and sex breakdown against national totals to rule out double-counting.",
      "Used pivot analysis, SUMIFS and monthly-average normalisation to compare trends by county, age and sex. The average monthly register fell 7.2% (175.5k to 162.8k) between 2022 and 2025, then rose 3% year-on-year in H1 2026, the first sign of the trend reversing.",
      "Built an interactive Excel dashboard with 7 pivot tables, 3 synchronised slicers (year/month, age, sex) and dynamic KPI cards. GETPIVOTDATA, SUMIFS, RANK and INDEX/MATCH formulas recalculate year-on-year change and name the most-improved and highest-risk county for whichever year is selected.",
      "Found diverging trends under the national figure: Under-25 claimants rose 5.5% while the 25+ group fell 8.6%, taking the youth share from 10.0% to 12.0%. Regional counties recovered fastest (Cavan -20%, Clare -17%), while Dublin stayed flat and still accounts for 28% of the register. The male share also grew, from 53.5% to 56.4%.",
      "Found a July peak in the register every year, followed by a Sep–Nov low, which points to the end of the academic year feeding claimant numbers.",
      "Turned the findings into points for employment service planning: focus youth activation schemes on under 25s, direct Intreo resources to Dublin, Kildare and Limerick where numbers grew in 2025, and plan caseload capacity around the July peak.",
    ],
    tags: [
      "Excel",
      "Power Query",
      "Power BI",
      "DAX",
      "CSO PxStat",
      "Pivot Tables",
    ],
  },
  {
    title: "Customer & Digital Business Platform Performance Analysis",
    subtitle: "Txend / MyStudio Pro",
    period: "Txend",
    description:
      "Core Tools: Python, SQL, Power BI, Excel",
    highlights: [
      "Analysed 500K+ customer and engagement records across 20+ studios using SQL cohort analysis, segmentation and trend comparisons to track registration growth, active-user behaviour and studio-level adoption.",
      "Used the analysis to highlight studios with declining engagement and changes in customer activity, giving Product and Operations teams clearer areas to investigate during performance reviews.",
      "Combined customer, studio and product data from multiple sources, resolving duplicate and inconsistent records before they reached KPI reports and dashboards.",
      "Built Power BI dashboards covering 8+ customer and engagement KPIs, including registrations, active users, studio activity and usage trends, for recurring performance reviews.",
      "Standardised KPI definitions and reporting logic so customer and product metrics were measured consistently across dashboards and stakeholder reports.",
    ],
    tags: ["Python", "SQL", "Power BI", "Excel"],
  },
  {
    title: "Operational Delivery & Supplier Performance Analysis",
    subtitle: "Txend / Delivery Operations",
    period: "Txend",
    description:
      "Core Tools: PostgreSQL, Power BI, Python",
    highlights: [
      "Analysed 2M+ delivery, supplier and customer-complaint records across PostgreSQL and HubSpot CRM to identify delay patterns, supplier issues and recurring service failures.",
      "Used PostgreSQL and Python to compare supplier performance, complaint frequency, delivery delays and cost behaviour, helping isolate the main drivers behind operational problems.",
      "Built Power BI dashboards tracking 8+ operational KPIs, including on-time delivery, delay rate, supplier performance, complaint trends and cost efficiency for recurring management reviews.",
      "Developed a predictive model with 81% accuracy to flag higher-risk suppliers and potential delivery failures, supporting earlier intervention and more proactive operational planning.",
      "Combined delivery and complaint analysis to highlight where service issues were most likely to affect customers, giving Operations teams clearer priorities for supplier follow-up and corrective action.",
    ],
    tags: ["PostgreSQL", "Power BI", "Python", "HubSpot CRM"],
  },
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
