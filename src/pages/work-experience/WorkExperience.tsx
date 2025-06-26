import React from "react";
import IconBagde from "../../components/Icon-badge/IconBadge";

type Skill = {
  icon: React.ReactNode;
  label: string;
};

type WorkExperienceCardProps = {
  company: string;
  period: string;
  details: string[];
  skills?: Skill[]; // ← 新增技能陣列
};

export default function WorkExperience({
  company,
  period,
  details,
  skills = [], // 預設空陣列，避免 undefined
}: WorkExperienceCardProps) {
  return (
    <div
      className="
        p-6 rounded-2xl 
        bg-white/60 backdrop-blur-md 
        shadow-2xl
        border border-white/30
      "
    >
      {/* 上方兩列：公司 + 日期 */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-medium text-black mb-1">{company}</h3>
        <span className="text-sm text-blue-600 bg-blue-100 rounded-lg px-3 py-1 font-bold inline-block">
          {period}
        </span>
      </div>

      {/* 詳細內容 */}
      <ol className="list-decimal list-inside space-y-3 text-gray-900 text-sm mb-4">
        {details.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ol>

      {/* 技能徽章區塊 */}
      {skills.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-2">
          {skills.map((skill, idx) => (
            <IconBagde key={idx} icon={skill.icon} label={skill.label} />
          ))}
        </div>
      )}
    </div>
  );
}
