"use client";

import { useTranslation } from "react-i18next";
import IconBagde from "../../components/Icon-badge/IconBadge";
import { mainSkills } from "../../data/skills";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">{t("section_skills")}</h2>
      <div className="flex flex-wrap gap-4">
        {mainSkills.map((skill, index) => (
          <IconBagde key={index} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
