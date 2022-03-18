import { ScaleFade, Box, Text, Button } from "@chakra-ui/react";
import Title from "common/Title";
import { TRACKS_NUMBER } from "../../../constants";

interface ResultProps {
  points: number;
  onPlayAgain: () => void;
}

function Result({ points, onPlayAgain }: ResultProps) {
  function getResultLabel() {
    if (points === 0) {
      return "So baaaad";
    } else if (points < 3) {
      return "Nice but you can do better";
    } else return <>You rock 🤘</>;
  }

  return (
    <ScaleFade initialScale={0.9} in>
      <Title>Quiz result 🥁</Title>

      <Box padding={8} rounded="xl" shadow="2xl" textAlign="center">
        <Text fontSize="4xl">{getResultLabel()}</Text>

        <Text fontSize="3xl" fontWeight={700} marginY={2}>
          {points}/{TRACKS_NUMBER}
        </Text>

        <Button
          textAlign="center"
          size="lg"
          marginTop={6}
          onClick={onPlayAgain}
        >
          Play again!
        </Button>
      </Box>
    </ScaleFade>
  );
}

export default Result;
