import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";

import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiSass,
  SiVite,
  SiWebpack,
  SiNpm,
  SiYarn,
  SiEslint,
  SiPrettier,
  SiAxios,
  SiJsonwebtokens,
  SiJest,
  SiTestinglibrary,
  SiGoogleanalytics,
} from "react-icons/si";

type SkillProps = {
  icon: React.ReactNode; // icon 通常是 React 元素
  label: string;
};

const skills = [
  // 📄 核心技能
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <FaJs />, label: "JavaScript" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <FaGitAlt />, label: "Git" },

  // ⚛️ 框架 & 函式庫
  { icon: <SiReact />, label: "React" },
  { icon: <SiNextdotjs />, label: "Next.js" },
  { icon: <SiRedux />, label: "Redux" },

  // 🎨 樣式工具
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <SiSass />, label: "Sass/SCSS" },
  //   { icon: <SiStyledcomponents />, label: "Styled Components" },

  // 🛠️ 工具與平台
  { icon: <SiVite />, label: "Vite" },
  { icon: <SiWebpack />, label: "Webpack" },
  { icon: <SiNpm />, label: "npm" },
  { icon: <SiYarn />, label: "Yarn" },
  { icon: <SiEslint />, label: "ESLint" },
  { icon: <SiPrettier />, label: "Prettier" },

  // 🌐 網路與 API
  { icon: <SiAxios />, label: "Axios" },
  { icon: <SiJsonwebtokens />, label: "JWT" },
  //   { icon: <FaNodeJs />, label: "Node.js" },
  //   { icon: <SiExpress />, label: "Express" },

  // ☁️ DevOps & 部署
  //   { icon: <SiVercel />, label: "Vercel" },
  //   { icon: <SiGithubactions />, label: "GitHub Actions" },

  // 🔍 測試工具
  { icon: <SiJest />, label: "Jest" },
  { icon: <SiTestinglibrary />, label: "Testing Library" },

  // ♿ 加值技能
  { icon: <SiGoogleanalytics />, label: "Google Analytics" },
];

function Skill({ icon, label }: SkillProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow text-sm">
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

const Skills = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Skills & Technologies</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <Skill key={index} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
