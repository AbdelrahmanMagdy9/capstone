export default function TimerDisplay({ displayTime, isWorkSession }) {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold text-slate-400 mb-2">
        {isWorkSession ? 'Work Session' : 'Break Time'}
      </h2>
      <p className="text-8xl font-bold text-white tracking-wider">{displayTime}</p>
    </div>
  );
}