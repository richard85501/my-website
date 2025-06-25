import "./App.css";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiReact, SiMysql } from "react-icons/si";
import { MdEmail, MdLocationOn } from "react-icons/md";

function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br text-gray-800 font-sans">
      <header className="max-w-4xl mx-auto py-20 px-6">
        <div className="flex items-center space-x-6">
          {/* Avatar區塊：佔2份 */}
          <div className="basis-2/10 flex-shrink-0">
            <img
              src="/avatar_s.jpg" // 替換成你的頭像圖片路徑
              alt="Liu Chang Avatar"
              className="w-42 h-42 rounded-full object-cover shadow-md"
            />
          </div>

          {/* 文字區塊：佔8份 */}
          <div className="basis-8/10">
            <h1 className="text-4xl font-bold mb-2 font-roboto">
              Hi, I'm Liu Chang
            </h1>
            <h2 className="text-sm text-blue-600 mb-1 inline-block bg-blue-100 rounded-lg px-3 py-1 font-bold">
              Frontend Engineer
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              I'm a frontend engineer passionate about building fast, elegant,
              and accessible web experiences.
            </p>
            <div className="text-gray-600 space-y-3 text-sm">
              <p className="flex items-center space-x-2">
                <MdEmail className="text-blue-500 w-5 h-5" />
                <span>Email:</span>
                <a
                  href="mailto:changliu@example.com"
                  className="text-blue-600 hover:underline"
                >
                  changliu@example.com
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <FaGithub className="text-blue-500 w-5 h-5" />
                <span>GitHub:</span>
                <a
                  href="https://github.com/changliu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  github.com/changliu
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <MdLocationOn className="text-blue-500 w-5 h-5" />
                <span>Location:</span>
                <span>Taipei, Taiwan</span>
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-4">
          <Skill icon={<FaHtml5 />} label="HTML" />
          <Skill icon={<FaCss3Alt />} label="CSS" />
          <Skill icon={<FaJs />} label="JavaScript" />
          <Skill icon={<SiReact />} label="React" />
          <Skill icon={<SiTailwindcss />} label="Tailwind CSS" />
          <Skill icon={<FaNodeJs />} label="Node.js" />
          <Skill icon={<SiMongodb />} label="MongoDB" />
          <Skill icon={<SiMysql />} label="MySQL" />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
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

function Skill({ icon, label }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow text-sm">
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function ProjectCard({ title, desc }) {
  return (
    <div className="p-4 rounded-xl bg-white shadow hover:shadow-md transition">
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function Bolb() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
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
