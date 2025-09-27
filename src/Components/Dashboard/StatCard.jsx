export default function StatCard({ label, value, subtext, valueClass }) {
  return (
    <div className="border rounded-lg p-3">
      <p className="text-sm text-gray-500">{label}</p>
      <p className={`text-xl font-bold ${valueClass}`}>{value}</p>
      <p className="text-xs text-gray-400">{subtext}</p>
    </div>
  );
}
