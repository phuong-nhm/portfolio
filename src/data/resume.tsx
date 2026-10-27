import { Icons } from "@/components/icons";
import { FolderIcon, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Nguyễn Hải Minh Phương",
  initials: "PNHM",
  url: "https://phuong-portfolio.vercel.app", // sửa lại đúng domain sau khi deploy
  location: "Ho Chi Minh City, Vietnam",
  locationLink: "https://www.google.com/maps/place/ho+chi+minh+city",
  description: "Backend Developer",
  summary:
    "I'm a Backend Developer based in Ho Chi Minh City, Vietnam. I build web applications with ASP.NET Core, Spring Boot, and modern frontend stacks like ReactJS and Next.js. Focusing on clean architecture, database design, and real-world AWS deployment.\n\nDuring my internship, I independently built and deployed a full social networking platform on AWS (RDS, S3, Lambda, ECR/ECS, CloudFront). I'm now looking to grow further into DevOps and Cloud.\n\nCurrently open to Backend Developer roles, with a long-term goal of transitioning into DevOps/Cloud.",
  cvurl:
    "https://drive.google.com/file/d/1totp5BYRXEG2V9aM5It0qNKt5tIWeSyB/view?usp=drive_link", // dán link CV (Google Drive) của bạn vào đây
  certificationsFolderUrl:
    "https://drive.google.com/drive/folders/1pbwWWW5gaLGcK7h61jzTUn1S-K86zUx-?usp=drive_link",
  cvdownload: <Icons.download />,
  avatarUrl: "/avatars/avatar.webp",
  skills: [
    "C#",
    "ASP.NET Core",
    "EF Core",
    "ABP Framework",
    "Java",
    "Spring Boot",
    "Spring Data JPA",
    "ReactJS",
    "Next.js",
    "TypeScript",
    "MySQL",
    "SQL Server",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
    "Azure",
    "GitHub Actions",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: FolderIcon, label: "Projects" },
  ],
  contact: {
    email: "phongphuong22240@gmail.com",
    emailUrl: "mailto:phongphuong22240@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/phuong-nhm",
        icon: Icons.github,
        iconWebp: "/social-icons/github.webp",
        description: "@phuong-nhm",
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/minh-phuong-backend/",
        icon: Icons.linkedin,
        iconWebp: "/social-icons/linkedin.webp",
        description: "@minh-phuong-backend",
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "FACJ",
      href: "",
      badges: ["ASP.NET Core", "SQL Server", "SignalR", "AWS"],
      location: "Remote",
      title: "Backend Developer Intern",
      logoUrl: "",
      start: "Sep 2025",
      end: "Dec 2025",
      description: [
        "Independently architected and built a social networking web app from scratch using ASP.NET Core and SQL Server, including posts, login, comments, likes/reactions, groups, friend search/requests, and profile pages.",
        "Implemented real-time messaging using SignalR.",
        "Deployed the full stack on AWS: RDS for data, S3 for media and frontend hosting, Lambda, ECR + ECS for backend containers, and CloudFront as CDN.",
      ],
    },
  ],
  education: [
    {
      school: "Đại học Sài Gòn",
      href: "",
      degree: "Bachelor of Information Technology",
      logoUrl: "",
      start: "2021",
      end: "2026",
    },
  ],
  categories: ["Web App"],
  certifications: [
    {
      title: "Aptis English B2",
      issuer: "British Council",
      date: "2025",
      href: "",
      badge: "English B2",
    },
    {
      title: "Foundational C# with Microsoft",
      issuer: "freeCodeCamp",
      date: "2026",
      href: "https://www.freecodecamp.org/certification/mphuong/foundational-c-sharp-with-microsoft",
      badge: "C# Foundations",
    },
    {
      title: "Back-End Development with .NET",
      issuer: "Microsoft (Coursera)",
      date: "2026",
      href: "https://coursera.org/share/6feb027a67e8feace3490eadb41a0bce",
      badge: ".NET Backend",
    },
    {
      title: "Introduction to Programming With C#",
      issuer: "Microsoft (Coursera)",
      date: "2026",
      href: "https://coursera.org/share/f09eb3132fd22a792bc9b8daf5d002f3",
      badge: "C# Programming",
    },
    {
      title: "Database Integration and Management",
      issuer: "Microsoft (Coursera)",
      date: "2026",
      href: "https://coursera.org/share/948748db83c0c6e787a028772c4ff3c9",
      badge: "Database",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "2026",
      href: "https://learn.microsoft.com/api/credentials/share/en-us/MinhPhng-5305/5773C82F3BFAFD1A?sharingId=86018E48EE3EBBC4",
      badge: "Azure Fundamentals",
    },
  ],
  projects: [
    {
      title: "SpeakEasy - English Learning Web App",
      href: "https://github.com/phuong-nhm/SpeakEasy",
      dates: "",
      active: true,
      description:
        "Web app for practicing English grammar and sentence structure.",
      technologies: [
        "ASP.NET Core (ABP)",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
      ],
      category: ["Web App"],
      links: [
        {
          type: "Website",
          href: "https://english-learning-frontend-xi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/phuong-nhm/SpeakEasy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Social Media Platform",
      href: "https://github.com/phuong-nhm/Social-Media",
      dates: "",
      active: true,
      description:
        "Full social networking platform built solo during internship, deployed on AWS.",
      technologies: ["ASP.NET Core", "SQL Server", "SignalR", "AWS"],
      category: ["Web App"],
      links: [
        {
          type: "Source",
          href: "https://github.com/phuong-nhm/Social-Media",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      image2: "",
      video: "",
      design: "",
    },
    {
      title: "Clothes Store (E-commerce)",
      href: "https://github.com/phuong-nhm/Clothes_DOTNET",
      dates: "",
      active: true,
      description: "E-commerce web application for a clothing store.",
      technologies: ["ASP.NET", "SQL Server"],
      category: ["Web App"],
      links: [
        {
          type: "Source",
          href: "https://github.com/phuong-nhm/Clothes_DOTNET",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      image2: "",
      video: "",
      design: "",
    },
  ],
} as const;
