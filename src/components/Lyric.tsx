import { Box, Text } from "@chakra-ui/react";

function Lyric({ value }: { value: string }) {
  return (
    <Box
      p="20px"
      border="5px solid"
      borderWidth="5px"
      style={{
        borderImageSlice: 1,
        borderImageSource: "linear-gradient(to left, #FB157E, #FB6038)",
      }}
      textAlign="center"
    >
      <Text as="q" fontWeight="700" fontSize="2xl">
        {value}
      </Text>
    </Box>
  );
}

export default Lyric;
