type WorkExperienceCardProps = {
  company: string;
  period: string;
  details: string[];
};

export default function WorkExperience({
  company,
  period,
  details,
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
      {/* 上方兩列：職稱 + 日期 */}
      <div className="flex justify-between items-start mb-3">
        {/* 公司名稱 */}
        <h3 className="text-lg font-medium text-black mb-1">{company}</h3>
        <span className="text-sm text-blue-600 bg-blue-100 rounded-lg px-3 py-1 font-bold inline-block">
          {period}
        </span>
      </div>

      {/* 詳細內容 */}
      <ol className="list-decimal list-inside space-y-3 text-gray-900 text-sm">
        {details.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
