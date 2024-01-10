import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Tz-Shiuan Peng",
  initials: "TZ",
  location: "Tempe, Arizona, United States",
  locationLink: "https://www.google.com/maps/place/Tempe",
  about:
    "UX Researcher and Interaction Designer, excelling in Unity and data-driven user experiences.",
  summary:
    "As an Interaction Designer and User Researcher, I create interactive prototypes and perform mixed methods research to empower data-driven decision making. I lead teams effectively, ensuring an agile and scalable workflow with detailed deliverables. Currently, I work mostly with Figma, UserTesting, TypeScript, and Unity. I am currently located in Arizona but I'm ready to relocate anywhere in the US.",
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
      company: "ASU Learning Enterprise",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "User Experience Assistant",
      logo: ParabolLogo,
      start: "Nov 2022",
      end: "Apr 2023",
      description:
        "Conducted over 50 user interviews using mixed methods, analyzed data from 100+ surveys to identify user pain points, utilized UserTesting and Airtable for feedback analysis, led cross-functional teams in presenting research findings, and influenced the adoption of new technology in products.",
    },
    {
      company: "Ultracombos",
      link: "https://clevertech.biz",
      badges: ["On Site"],
      title: "Interaction Design Intern",
      logo: ClevertechLogo,
      start: "Feb 2020",
      end: "Aug 2020",
      description:
        "Created a data collection system employing Unity and AR Kit, enhancing visitor engagement with an interactive cycling culture experience. Spearheaded the creation of Unity and Intel RealSense-based interactive installations, immersing 2.5 million visitors in a blend of design and local cultural elements.",
    },
  ],
  skills: [
    "User Centered Design",
    "Figma",
    "Information Architecture",
    "Usability testing",
    "Mixed Methods Research",
    "C#",
    "Next.js",
    "Unity",
    "Python",
  ],
  projects: [
    {
      title: "Philips Website",
      techStack: ["Figma", "UX", "Design", "Information Architecture"],
      description:
        "Optimized information architecture and improved design",
      logo: JarockiMeLogo,
      link: {
        label: "Philips website",
        href: "https://thisistz.notion.site/Philips-Website-UX-study-784f7a897121468ebd08d79d4ad83733",
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
      title: "GIANT Museum",
      techStack: ["Unity", "Interaction Design", "Shaders", "Augmented Reality"],
      description:
        "Data collection system and interactive AR installation",
      link: {
        label: "GIANT",
        href: "https://thisistz.notion.site/Giant-Cycling-Culture-Museum-7fe29bd822bc47ddb658f5f3edd4211f",
      },
    },
  ],
} as const;
