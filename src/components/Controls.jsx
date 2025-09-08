export default function Controls({ isActive, onToggle, onReset }) {
  return (
    <div className="flex justify-center items-center gap-4">
      <button
        onClick={onToggle}
        className={`text-white font-bold py-3 px-8 rounded-lg text-lg ${
          isActive
            ? 'bg-orange-500 hover:bg-orange-600'
            : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button
        onClick={onReset}
        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg"
      >
        Reset
      </button>
    </div>
  );
}