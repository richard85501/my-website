import "./App.css";
// import { FaGithub } from "react-icons/fa";
// import { MdEmail, MdLocationOn } from "react-icons/md";
import WorkExperience from "./pages/work-experience/WorkExperience";
import Skills from "./pages/skills/Skills";
import FloatingNav from "./components/floating-nav/FloatingNav";
import Bolb from "./pages/bolb/Bolb";
import {
  onelabDetails,
  adbertDetails,
  infopowerDetails,
} from "./data/experience";
import { onelabSkills, adbertSkills } from "./data/skills";
import LetsConnect from "./pages/lets-connect/letsConnect";

function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br text-gray-800">
      <header id="about" className="max-w-4xl mx-auto py-20 px-6">
        <div className="flex items-center space-x-6">
          {/* Avatar區塊：佔2份 */}
          <div className="basis-3/10 flex-shrink-0">
            <img
              src="/avatar_p.jpg" // 替換成你的頭像圖片路徑
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
              I love trying new things and the feeling of building something
              from scratch. I’ve found real joy in exploring blockchain,
              algorithmic trading, and web development. Outside the screen,
              climbing and traveling keep me grounded and inspired.
            </p>
            <div className="flex space-x-6 text-blue-500">
              {/* <a
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
              </a> */}
            </div>
          </div>
        </div>
      </header>
      <section className="max-w-4xl mx-auto px-6 py-10">
        <Skills />
      </section>
      <section id="experience" className="max-w-4xl mx-auto px-6 py-2">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <WorkExperience
          companyName="ONElab Technology Ltd"
          companyLogo="onelab.png"
          period="2023/6-2025/3"
          details={onelabDetails}
          skills={onelabSkills}
        />
      </section>
      <section className="max-w-4xl mx-auto px-6 py-2">
        <WorkExperience
          companyName="Adbert Tech Media Co.Ltd"
          companyLogo="adbert.png"
          period="2022/3-2023/5"
          details={adbertDetails}
          skills={adbertSkills}
        />
      </section>
      <section className="max-w-4xl mx-auto px-6 py-2">
        <WorkExperience
          companyName="InfoPower"
          companyLogo="infopower.png"
          period="2021/9-2022/1"
          details={infopowerDetails}
          skills={[]}
        />
      </section>
      {/* <section id="others" className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Others</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProjectCard
            title="ClimbLog"
            desc="A minimal climbing log to record routes."
          />
          <ProjectCard
            title="My Portfolio"
            desc="This personal site you're looking at."
          /> */}
      {/* <ProjectCard
            title="Programmatic trading of TAIEX Futures"
            desc="Built an automated trading system for TAIEX Futures."
          /> */}
      {/* </div>
      </section> */}
    </div>
  );
}

// type ProjectCardProps = {
//   title: string;
//   desc: string;
// };

// function ProjectCard({ title, desc }: ProjectCardProps) {
//   return (
//     <div className="p-4 rounded-xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out cursor-pointer">
//       <h3 className="text-lg font-medium mb-1">{title}</h3>
//       <p className="text-sm text-gray-600">{desc}</p>
//     </div>
//   );
// }

function App() {
  return (
    <>
      <Bolb />
      <Portfolio />
      <FloatingNav />
      <LetsConnect />
    </>
  );
}

export default App;
