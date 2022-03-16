import { extendTheme } from "@chakra-ui/react";

const colors = {
  brandOrange: "#ff6050",
  brandPink: "#ff0e83",
  brandGradient: () =>
    `linear-gradient(to right, ${colors.brandOrange},${colors.brandPink})`,
};

const customTheme = extendTheme({
  colors,
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "'Gloria Hallelujah', cursive",
      },
    },
    Button: {
      variants: {
        brand: {
          bgGradient: colors.brandGradient,
          _hover: {
            _disabled: {
              bgGradient: colors.brandGradient,
            },
          },
          color: "white",
        },
      },
      defaultProps: {
        variant: "brand",
      },
    },
  },
});

export default customTheme;
