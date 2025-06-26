import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiSass,
  SiWebpack,
  SiAxios,
  SiJsonwebtokens,
  SiJest,
  SiReact,
  SiNpm,
} from "react-icons/si";

import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";

export const onelabSkills = [
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <SiJest />, label: "Cypress" },
];

export const adbertSkills = [
  { icon: <SiRedux />, label: "Redux" },
  { icon: <SiSass />, label: "Sass/SCSS" },
  { icon: <SiAxios />, label: "Axios" },
  { icon: <SiJsonwebtokens />, label: "JWT" },
];

export const mainSkills = [
  // 📄 核心技能
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <FaJs />, label: "JavaScript" },
  { icon: <FaGitAlt />, label: "Git" },

  // ⚛️ 框架 & 函式庫
  { icon: <SiReact />, label: "React" },

  // 🛠️ 工具與平台
  { icon: <SiWebpack />, label: "Webpack" },
  { icon: <SiNpm />, label: "npm" },
];
