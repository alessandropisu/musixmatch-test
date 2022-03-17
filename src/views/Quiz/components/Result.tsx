import { ScaleFade, Box, Text, Button } from "@chakra-ui/react";
import Title from "../../../common/Title";
import { TRACKS_NUMBER } from "../../../constants";

interface ResultProps {
  points: number;
  onPlayAgain: () => void;
}

function Result({ points, onPlayAgain }: ResultProps) {
  function getResultLabel() {
    if (points === 0) {
      return "Soooo bad";
    } else if (points < 3) {
      return "Nice but you can do better";
    } else return <>You rock 🤘</>;
  }

  return (
    <ScaleFade initialScale={0.9} in>
      <Title>Quiz result 🥁</Title>

      <Box p="35px" rounded="xl" shadow="xl" textAlign="center">
        <Text fontSize="3xl" fontWeight="500">
          {getResultLabel()}
        </Text>

        <Text fontSize="2xl" fontWeight="700">
          {points}/{TRACKS_NUMBER}
        </Text>

        <Button textAlign="center" size="lg" mt={6} onClick={onPlayAgain}>
          Play again
        </Button>
      </Box>
    </ScaleFade>
  );
}

export default Result;
