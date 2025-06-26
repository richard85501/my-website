type IconBagdeProps = {
  icon: React.ReactNode;
  label: string;
};

export default function IconBagde({ icon, label }: IconBagdeProps) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black rounded-md shadow text-xs font-bold text-white">
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
