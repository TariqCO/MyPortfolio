export default function VolumeBtn() {
  return (
    <button className="bg-neutral-900 p-3 rounded-xl">
      <div className="flex items-end gap-1 ">
        {[0, 150, 300, 450].map((delay, i) => (
          <span
            key={i}
            className="w-1 bg-green-500 rounded-md animate-volume"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
    </button>
  );
}
