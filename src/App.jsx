import { useState, useEffect } from 'react';
import TimerDisplay from './components/TimerDisplay';
import Controls from './components/Controls';
import MusicUploader from './components/MusicUploader';

const WORK_DURATION = 25 * 60;
const BREAK_DURATION = 5 * 60;

export default function App() {
  const [timeLeft, setTimeLeft] = useState(WORK_DURATION);
  const [isActive, setIsActive] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      setIsWorkSession(!isWorkSession);
      setTimeLeft(isWorkSession ? BREAK_DURATION : WORK_DURATION);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, isWorkSession]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsWorkSession(true);
    setTimeLeft(WORK_DURATION);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="bg-slate-900 h-screen flex justify-center items-center">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 flex flex-col gap-8">
        <TimerDisplay
          displayTime={formatTime(timeLeft)}
          isWorkSession={isWorkSession}
        />
        <Controls
          isActive={isActive}
          onToggle={toggleTimer}
          onReset={resetTimer}
        />
        <MusicUploader />
      </div>
    </div>
  );
}