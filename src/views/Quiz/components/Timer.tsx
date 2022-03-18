import { Progress } from "@chakra-ui/react";
import { useEffect } from "react";
import { useTimer } from "use-timer";

interface TimerProps {
  trackIndex: number;
  onTimeOver: () => void;
}

const seconds = 5;

function Timer({ trackIndex, onTimeOver }: TimerProps) {
  const { time, start, reset } = useTimer({
    initialTime: seconds,
    endTime: 0,
    timerType: "DECREMENTAL",
    onTimeOver: () => onTimeOver(),
  });

  useEffect(() => {
    reset();
    start();
  }, [trackIndex]);

  return (
    <Progress size="sm" min={0} max={seconds} value={time} colorScheme="cyan" />
  );
}

export default Timer;
