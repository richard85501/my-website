type IconBagdeProps = {
  icon: React.ReactNode; // icon 通常是 React 元素
  label: string;
};

export default function IconBagde({ icon, label }: IconBagdeProps) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow text-xs">
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
