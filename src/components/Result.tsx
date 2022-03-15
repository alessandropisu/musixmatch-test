import { ScaleFade, Box, Icon, Text } from "@chakra-ui/react";
import { BsFillTrophyFill } from "react-icons/bs";

function Result({ points }: { points: number }) {
  function getResultLabel() {
    if (points === 0) {
      return "Soooo bad";
    } else if (points < 3) {
      return "Nice but you can do better";
    } else return "You rock!";
  }

  return (
    <ScaleFade initialScale={0.9} in>
      <Box p="40px" mt="4" rounded="lg" shadow="lg" textAlign="center">
        <Icon as={BsFillTrophyFill} color="gold" fontSize="50px" />
        <Text fontSize="3xl" fontWeight="500">
          {getResultLabel()}
        </Text>
        <Text fontSize="2xl" fontWeight="700">
          {points}/4
        </Text>
      </Box>
    </ScaleFade>
  );
}

export default Result;
