import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";

export const job_openings = [
  {
    active: true,
    route: "content_writer",
    title: "Content Writer",
    department: "Cybersecurity",
    location: "Remote or On-site (Global)",
    type: "Part-Time",
    description: "Create thoughtful and engaging content ",
    responsibilities: [
      "Write original content on a variety of topics with thorough research for the website, blogs, social posts, and banners mostly based in the field of IT and cybersecurity. ",
      "Ensure content meets the requirements provided. ",
      "Plan and create a list of topics to be covered for a specific topic. ",
      "Support the marketing team and provide content and copy as needed for the website, blogs, email, social, and more ",
      "Stay current with trends and best practices in the cybersecurity industry to identify relevant topics, fact-check, and analyse sources to generate compelling and contextualized content ",
      "Create, maintain, and promote advertisements on social media and other places ",
      "Other tasks and responsibilities as assigned ",
    ],
    qualifications: [
      "Fluent in written English ",
      "Should be able to write articles that are free from grammatical errors and plagiarism ",
      "Should be able to research white paper, academic source, website, and craft an article based on these ",
      "Should be able to write a top-notch introduction to catch the attention of the readers ",
      "Interested in IT and topics related to it ",
    ],
    benefits: ["Competitive salary and bonuses.", "Flexible working hours."],
  },
  {
    route: "penetration_tester",
    title: "Penetration Tester",
    department: "Cybersecurity",
    location: "Remote or On-site (Global)",
    type: "Full-Time",
    description:
      "Conduct vulnerability assessments and penetration tests to identify security risks.",
    responsibilities: [
      "Perform security assessments of networks, applications, and systems.",
      "Generate detailed reports with actionable recommendations.",
      "Simulate cyberattacks to test security defenses.",
      "Collaborate with development teams to remediate vulnerabilities.",
    ],
    qualifications: [
      "Proven experience in penetration testing.",
      "Familiarity with tools like Metasploit, Burp Suite, and Nessus.",
      "Strong knowledge of OWASP and common vulnerabilities.",
      "Certifications like CEH, OSCP, or similar are a plus.",
    ],
    benefits: [
      "Access to state-of-the-art tools and labs.",
      "Opportunities for continuous learning and certifications.",
      "Work with a team of cybersecurity experts.",
    ],
  },
  {
    route: "software_developer",
    title: "Software Developer",
    department: "Product Development",
    location: "Remote or On-site (Global)",
    type: "Full-Time",
    description:
      "Develop and maintain secure software solutions for clients and internal systems.",
    responsibilities: [
      "Write clean, efficient, and secure code.",
      "Collaborate with cross-functional teams to design new features.",
      "Perform code reviews to ensure quality and security.",
      "Debug and resolve technical issues promptly.",
    ],
    qualifications: [
      "Proficiency in programming languages (Python, Java, C++).",
      "Experience in secure coding practices.",
      "Familiarity with cybersecurity principles.",
      "Knowledge of frameworks and APIs relevant to cybersecurity.",
    ],
    benefits: [
      "Competitive salary and stock options.",
      "Opportunity to work on cutting-edge cybersecurity products.",
      "Training programs and professional development.",
    ],
  },
  {
    route: "security_analyst",
    title: "Security Analyst",
    department: "Threat Intelligence",
    location: "Remote or On-site (Global)",
    type: "Full-Time",
    description: "Monitor, analyze, and respond to cybersecurity incidents.",
    responsibilities: [
      "Investigate and respond to security incidents.",
      "Analyze logs and alerts for potential threats.",
      "Develop threat models and simulate attack scenarios.",
      "Maintain up-to-date knowledge of cybersecurity threats and trends.",
    ],
    qualifications: [
      "Experience with SIEM tools (Splunk, ELK).",
      "Understanding of network security and threat intelligence.",
      "Certifications like CompTIA Security+, CISSP, or equivalent.",
      "Strong analytical and problem-solving skills.",
    ],
    benefits: [
      "Comprehensive health insurance.",
      "Flexible work arrangements.",
      "Continuous learning opportunities.",
    ],
  },
];
export const reach_out = [
  {
    name: "Email",
    description: "jobs@threatnix.io",
    icon: <HiOutlineMail color="white" size={26} />,
  },
  {
    name: "Location",
    description: "Kandevta Sthaan 10, Kupondole Lalitpur, Nepal",
    icon: <CiLocationOn color="white" size={26} />,
  },
];
