import { ScaleFade, Box, Text } from "@chakra-ui/react";
import Title from "../../../common/Title";
import { SONGS_NUMBER } from "../../../constants";

function Result({ points }: { points: number }) {
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

      <Box p="40px" mt="4" rounded="lg" shadow="xl" textAlign="center">
        <Text fontSize="3xl" fontWeight="500">
          {getResultLabel()}
        </Text>

        <Text fontSize="2xl" fontWeight="700">
          {points}/{SONGS_NUMBER}
        </Text>
      </Box>
    </ScaleFade>
  );
}

export default Result;
