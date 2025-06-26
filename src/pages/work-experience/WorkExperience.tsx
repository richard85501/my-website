import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import IconBagde from "../../components/Icon-badge/IconBadge";

type Skill = { icon: React.ReactNode; label: string };

interface ExperienceCardProps {
  companyName: string;
  companyLogo: string;
  period: string;
  details: string[];
  skills: Skill[];
}

export default function ExperienceCard({
  companyName,
  companyLogo,
  period,
  details,
  skills,
}: ExperienceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-md shadow-2xl border border-white/30">
      {/* Header：公司 + 日期 + 箭頭 */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          {/* 公司圖片 */}
          <img
            src={companyLogo}
            alt={`${companyName} logo`}
            className="w-12 h-5 rounded-full object-fill"
          />

          {/* 公司名 + 日期 */}
          <h3 className="text-lg font-medium text-black">{companyName}</h3>
          <span className="text-xs text-blue-600 bg-blue-100 rounded-lg px-2 py-0.5 font-bold inline-block">
            {period}
          </span>
        </div>

        {/* Arrow icon */}
        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          size={12}
        />
      </div>

      {/* 展開內容 */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <ol className="list-decimal list-inside space-y-3 text-gray-900 text-sm mb-4 mt-3">
          {details.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>

        {/* 技能徽章 */}
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-2">
            {skills.map((skill, idx) => (
              <IconBagde key={idx} icon={skill.icon} label={skill.label} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
