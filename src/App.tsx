import "./App.css";
import { FaGithub } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import WorkExperience from "./components/work-experience/WorkExperience";
import Skills from "./components/skills/Skills";

const details = [
  "Maintained a legacy codebase for over five years, successfully fixed numerous long-standing bugs, and gradually introduced unit testing and modular architecture, reducing maintenance costs and shortening subsequent development time by approximately 20%.",
  "Built a blockchain application on Polygon from scratch, integrated smart contracts, and implemented GitLab CI/CD automation. Successfully launched the product with the team within three months.",
  "Utilized AI tools such as GitHub Copilot and Claude to generate test code during project development and refactoring, reducing initial development time by around 30% and accelerating the refactoring cycle.",
  "Participated in a Cypress automation testing team, wrote and optimized test cases, effectively improving test coverage and maintenance efficiency across projects.",
];

const workDetails = [
  "Assisted in building an 人資雲系統 for the company, supporting talent development and helping the HR department calculate and distribute bonuses over four consecutive quarters.",
  "Developed reusable and customizable chart components, shared across multiple projects, significantly improving productivity and development efficiency.",
  "Designed efficient and scalable state management flows using Redux, solving issues related to data persistence across page transitions and permission handling.",
  "Utilized custom hooks to encapsulate business logic, reducing code duplication and increasing reusability.",
  "Built a component library using Storybook, creating highly reusable and easily maintainable React components to enhance cross-project and cross-team collaboration.",
  "Implemented automated testing for components, saving development and testing time while increasing component stability.",
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br text-gray-800">
      <header className="max-w-4xl mx-auto py-20 px-6">
        <div className="flex items-center space-x-6">
          {/* Avatar區塊：佔2份 */}
          <div className="basis-3/10 flex-shrink-0">
            <img
              src="/avatar_s.jpg" // 替換成你的頭像圖片路徑
              alt="Liu Chang Avatar"
              className="w-55 h-55 rounded-full object-cover shadow-md"
            />
          </div>

          {/* 文字區塊：佔8份 */}
          <div className="basis-7/10">
            <h1 className="text-4xl font-bold mb-2">Hi, I'm Liu Chang</h1>
            <h2 className="text-sm text-blue-600 mb-1 inline-block bg-blue-100 rounded-lg px-3 py-1 font-bold">
              Front-end Engineer
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              I'm a frontend engineer passionate about building fast, elegant,
              and accessible web experiences.
            </p>
            <div className="flex space-x-6 text-blue-500">
              <a
                href="mailto:changliu@example.com"
                className="w-6 h-6 hover:text-blue-700 transition-colors"
                aria-label="Email"
              >
                <MdEmail className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/changliu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 hover:text-blue-700 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://goo.gl/maps/some-location"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 hover:text-blue-700 transition-colors"
                aria-label="Location"
              >
                <MdLocationOn className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <Skills />
      </section>
      <section className="max-w-4xl mx-auto px-6 py-2">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <WorkExperience
          company="瑞嘉科技"
          period="2023/6-2025/3"
          details={details}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-2">
        <WorkExperience
          company="ADBERT 艾普特"
          period="2022/3-2023/5"
          details={workDetails}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Others</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProjectCard
            title="ClimbLog"
            desc="A minimal climbing log to record routes."
          />
          <ProjectCard
            title="My Portfolio"
            desc="This personal site you're looking at."
          />
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-10">
        <p>
          © 2025 Liu Chang •{" "}
          <a href="#" className="hover:underline">
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

type ProjectCardProps = {
  title: string;
  desc: string;
};

function ProjectCard({ title, desc }: ProjectCardProps) {
  return (
    <div className="p-4 rounded-xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out cursor-pointer">
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function Bolb() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-500 opacity-50 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-cyan-500 opacity-50 rounded-full blur-[100px]"></div>
    </div>
  );
}

function App() {
  return (
    <>
      <Bolb />
      <Portfolio />
    </>
  );
}

export default App;
