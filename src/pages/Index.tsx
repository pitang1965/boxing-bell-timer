import React, { useState, useEffect, useCallback } from 'react';
import { useToast } from "@/components/ui/use-toast";
import TimerDisplay from '@/components/TimerDisplay';
import TimerControls from '@/components/TimerControls';

const Index = () => {
  const { toast } = useToast();
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(180); // 3 minutes in seconds
  const [isResting, setIsResting] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [rounds, setRounds] = useState(3);
  const [roundDuration, setRoundDuration] = useState(3);
  const [restDuration, setRestDuration] = useState(1);

  const bellSound = new Audio('/bell.mp3');
  const warningSound = new Audio('/warning.mp3');

  const resetTimer = useCallback(() => {
    setTime(roundDuration * 60);
    setIsResting(false);
    setCurrentRound(1);
    setIsRunning(false);
  }, [roundDuration]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
    if (!isRunning && time === roundDuration * 60) {
      bellSound.play();
    }
  };

  const handleReset = () => {
    resetTimer();
    toast({
      title: "Timer Reset",
      description: "Ready for a new workout!",
    });
  };

  useEffect(() => {
    let interval: number;

    if (isRunning) {
      interval = window.setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 31) {
            warningSound.play();
          }
          
          if (prevTime <= 1) {
            bellSound.play();
            
            if (isResting) {
              if (currentRound < rounds) {
                setCurrentRound(prev => prev + 1);
                setIsResting(false);
                return roundDuration * 60;
              } else {
                setIsRunning(false);
                toast({
                  title: "Workout Complete!",
                  description: "Great job! You've finished all rounds.",
                });
                return 0;
              }
            } else {
              setIsResting(true);
              return restDuration * 60;
            }
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, isResting, currentRound, rounds, roundDuration, restDuration, bellSound, warningSound, toast]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center">Boxing Timer</h1>
        
        <TimerDisplay
          minutes={Math.floor(time / 60)}
          seconds={time % 60}
          isResting={isResting}
          currentRound={currentRound}
          totalRounds={rounds}
        />

        <TimerControls
          isRunning={isRunning}
          onStartStop={handleStartStop}
          onReset={handleReset}
          rounds={rounds}
          roundDuration={roundDuration}
          restDuration={restDuration}
          onRoundsChange={setRounds}
          onRoundDurationChange={setRoundDuration}
          onRestDurationChange={setRestDuration}
        />
      </div>
    </div>
  );
};

export default Index;