import { extendTheme } from "@chakra-ui/react";

const colors = {
  brandOrange: "#ff6050",
  brandPink: "#ff0e83",
  brandDeepPink: "#ff236a",
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
          bgGradient: `linear(to-r, ${colors.brandOrange},${colors.brandPink})`,
          _hover: {
            _disabled: {
              bgGradient: `linear(to-r, ${colors.brandOrange},${colors.brandPink})`,
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
