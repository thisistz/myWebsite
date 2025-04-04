import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  UltracombosLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  UISLogo,
  ASULogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

type WorkDescription = string | string[];

export const RESUME_DATA = {
  name: "Tz-Shiuan Peng",
  initials: "TZ",
  location: "Tempe, Arizona, United States",
  locationLink: "https://www.google.com/maps/place/Tempe",
  about:
    "UX Researcher and Interaction Engineer, excelling in data-driven user experiences.",
  summary:
    "As a User Researcher and Interaction Engineer, I create interactive prototypes and perform mixed methods research to empower data-driven decision making. I lead teams effectively, ensuring an agile and scalable workflow with detailed deliverables. Currently, I work mostly with Figma, UserTesting, TypeScript, and Unity. I am currently located in Arizona but I'm ready to relocate anywhere in the US.",
  avatarUrl: "https://avatars.githubusercontent.com/u/24285735?s=400&u=bfca72b9b9b815b1d88fe734196a7526af4a11e6&v=4",
  personalWebsiteUrl: "https://this-is-tz.super.site",
  contact: {
    email: "peng86david@gmail.com",
    tel: "+19169074960",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tz-peng/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/thisis_tz",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Arizona State University",
      degree: "Master's Degree in User Experience",
      start: "2021",
      end: "2023",
      achievement1: "Assembly AI award for ASU ML Hackathon - 2022", 
      achievement2:  "NAmU University Scholarship - 2021",
    },
    {
      school: "Shih Hsin University",
      degree: "Bachelor's Degree in Digital Multimedia",
      start: "2016",
      end: "2020",
      achievement1: "Bronze award for interaction design - 2020",
      achievement2: "Silver award for interaction design - 2019",
    },
  ],
  work: [
    {
      company: "United Integrated Services",
      link: "https://uisusacorp.com",
      badges: ["On Site"],
      title: "Project Engineer",
      logo: UISLogo,
      start: "Aug 2024",
      end: "Current",
      description: [
        "Spearheaded the handover of control systems at TSMC FAB 21, ensuring factory control systems met production efficiency requirements.",
        "Managed cross-functional coordination between automation, engineering, and operations teams, optimizing system integration and efficiency.",
        "Led logistics procurement and supply chain optimization, ensuring efficient resource allocation."
      ],
    },
    {
      company: "ASU Learning Enterprise",
      link: "https://learning.asu.edu",
      badges: ["Remote"],
      title: "User Experience Researcher",
      logo: ASULogo,
      start: "Nov 2022",
      end: "Apr 2023",
      description:[
        "Developed an automated data collection framework, structuring insights into a scalable database.",
        "Conducted data-driven UX research, analyzing 100+ user interactions to identify process inefficiencies and optimize decision-making.",
      ]
    },
    {
      company: "Ultracombos",
      link: "https://www.ultracombos.com/en-us",
      badges: ["On Site"],
      title: "Interaction Engineer",
      logo: UltracombosLogo,
      start: "Feb 2020",
      end: "Aug 2020",
      description:[
        "Collected and analyzed real-time movement data to optimize visualization systems, improving UX for 2.5M+ users",
        "Worked with cross-disciplinary teams to bridge data visualization and human-machine interaction, applicable to infotainment UI/UX."
      ]
    },
  ],
  skills: [
    "User Research",
    "Data Visualization",
    "Information Architecture",
    "Usability testing",
    "Rapid Prototyping",
    "Figma",
    "Unity",
    "C#",
    "Python",
    "Next.js",
  ],
  projects: [
    {
      title: "Philips Website",
      techStack: ["Figma", "UX", "Design", "Information Architecture"],
      description:
        "Optimized information architecture and improved design",
      
      link: {
        label: "Philips website",
        href: "https://thisistz.notion.site/Philips-Website-UX-study-784f7a897121468ebd08d79d4ad83733",
      },
    },
    {
      title: "GIANT Museum",
      techStack: ["Unity", "Interaction Design", "Shaders", "Augmented Reality"],
      description:
        "Data collection system and interactive AR installation",
      link: {
        label: "GIANT",
        href: "https://thisistz.notion.site/Giant-Cycling-Culture-Museum-7fe29bd822bc47ddb658f5f3edd4211f",
      },
    },
    {
      title: "Virtual training for machinery",
      techStack: ["UX", "Research",],
      description:
        "Research and proposal on education solutions",
      logo: Minimal,
      link: {
        label: "machinery",
        href: "https://thisistz.notion.site/Virtual-training-for-machinery-e3d4942ba9504da9ac7bbc8154551eac",
      },
    },
    {
      title: "Taiwan Design Expo",
      techStack: ["Unity", "Interaction Design", "VFX", "Mixed Reality"],
      description:
        "Entrance installation using motion data",
      link: {
        label: "Taiwan Design Expo",
        href: "https://thisistz.notion.site/Taiwan-Design-Expo-bb998769c23747d69b8f61220b2c0eab",
      },
    },
    {
      title: "Uniqlo website",
      techStack: ["Figma", "UX", "Design"],
      description:
        "Improved design and navigation for a smoother checkout process",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://thisistz.notion.site/Uniqlo-website-UX-study-11e828022ef648009d54457b021eb2c4",
      },
    },
    {
      title: "Hidden Dusk",
      techStack: [
        "Unity",
        "C#",
        "UI Design",
        "Interaction Design",
      ],
      description: "A party game with indirect visual feedback",
      link: {
        label: "Hidden Dusk",
        href: "https://thisistz.notion.site/Hidden-Dusk-b472ef7ff37f46929e2655a20b909976",
      },
    },
  ],
} as const;
