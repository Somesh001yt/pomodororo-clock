import React, { useState, useEffect } from 'react';

const PomodoroClock = ({ cycleLimit }) => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [cycles, setCycles] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            handleCycleCompletion();
          }
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, minutes, seconds]);

  const handleCycleCompletion = () => {
    if (cycles + 1 === cycleLimit) {
      setIsRunning(false);
      setCycles(0);
    } else {
      if (cycles % 2 === 0) {
        setMinutes(5);
      } else {
        setMinutes(25);
      }

      setSeconds(0);
      setCycles(cycles + 1);
    }
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setMinutes(25);
    setSeconds(0);
    setCycles(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4">Pomodoro Clock</h2>
      <div className="text-6xl font-bold mb-4">
        <span>{formatTime(minutes)}</span>:
        <span>{formatTime(seconds)}</span>
      </div>
      <p className="text-lg">Cycles Completed: {cycles}</p>
      <div className="flex mt-8">
        {isRunning ? (
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mr-4"
            onClick={handleStop}
          >
            Stop
          </button>
        ) : (
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mr-4"
            onClick={handleStart}
          >
            Start
          </button>
        )}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroClock;
