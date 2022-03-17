import { Box, Text, useTheme } from "@chakra-ui/react";

function Lyric({ value }: { value: string }) {
  const { colors } = useTheme();

  return (
    <Box
      p={5}
      borderWidth="5px"
      style={{
        borderImageSlice: 1,
        borderImageSource: colors.brandGradient(),
      }}
      textAlign="center"
    >
      <Text as="q" fontWeight={700} fontSize="2xl">
        {value}
      </Text>
    </Box>
  );
}

export default Lyric;
