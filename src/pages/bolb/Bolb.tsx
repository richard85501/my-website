export default function Bolb() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gray-50">
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-500 opacity-50 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-cyan-500 opacity-50 rounded-full blur-[100px]"></div>
    </div>
  );
}
