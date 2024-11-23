import React from 'react';
import { cn } from "@/lib/utils";

interface TimerDisplayProps {
  minutes: number;
  seconds: number;
  isResting: boolean;
  currentRound: number;
  totalRounds: number;
}

const TimerDisplay = ({
  minutes,
  seconds,
  isResting,
  currentRound,
  totalRounds,
}: TimerDisplayProps) => {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center p-8 rounded-2xl shadow-2xl transition-colors duration-500",
      isResting ? "bg-rest/10" : "bg-training/10"
    )}>
      <div className="text-2xl font-bold mb-4">
        Round {currentRound} of {totalRounds}
      </div>
      <div className={cn(
        "timer-display text-8xl md:text-9xl font-display transition-colors duration-500",
        isResting ? "text-rest" : "text-training"
      )}>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className={cn(
        "mt-4 text-xl font-bold animate-pulse-slow",
        isResting ? "text-rest" : "text-training"
      )}>
        {isResting ? "REST" : "TRAINING"}
      </div>
    </div>
  );
};

export default TimerDisplay;