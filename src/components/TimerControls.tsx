import React from 'react';
import { Button } from "@/components/ui/button";
import { Play, Pause, StopCircle, Plus, Minus } from "lucide-react";

interface TimerControlsProps {
  isRunning: boolean;
  onStartStop: () => void;
  onReset: () => void;
  rounds: number;
  roundDuration: number;
  restDuration: number;
  onRoundsChange: (value: number) => void;
  onRoundDurationChange: (value: number) => void;
  onRestDurationChange: (value: number) => void;
}

const TimerControls = ({
  isRunning,
  onStartStop,
  onReset,
  rounds,
  roundDuration,
  restDuration,
  onRoundsChange,
  onRoundDurationChange,
  onRestDurationChange,
}: TimerControlsProps) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="flex flex-col items-center">
          <span className="text-sm font-semibold mb-2">Rounds</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onRoundsChange(Math.max(1, rounds - 1))}
              className="control-button bg-gray-200"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-bold">{rounds}</span>
            <button
              onClick={() => onRoundsChange(Math.min(12, rounds + 1))}
              className="control-button bg-gray-200"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-sm font-semibold mb-2">Round (min)</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onRoundDurationChange(Math.max(1, roundDuration - 1))}
              className="control-button bg-gray-200"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-bold">{roundDuration}</span>
            <button
              onClick={() => onRoundDurationChange(Math.min(5, roundDuration + 1))}
              className="control-button bg-gray-200"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-sm font-semibold mb-2">Rest (min)</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onRestDurationChange(Math.max(0.5, restDuration - 0.5))}
              className="control-button bg-gray-200"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-bold">{restDuration}</span>
            <button
              onClick={() => onRestDurationChange(Math.min(2, restDuration + 0.5))}
              className="control-button bg-gray-200"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <Button
          onClick={onStartStop}
          className={`boxing-button ${isRunning ? 'bg-training' : 'bg-rest'}`}
        >
          {isRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </Button>
        <Button
          onClick={onReset}
          variant="destructive"
          className="boxing-button"
        >
          <StopCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default TimerControls;