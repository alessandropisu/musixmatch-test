import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "'Gloria Hallelujah', cursive",
      },
    },
    Button: {
      variants: {
        brand: {
          bgGradient: "linear(to-l, #ff6050,#ff0e83)",
          _hover: {
            _disabled: {
              bgGradient: "linear(to-l, #ff6050,#ff0e83)",
            },
            bgGradient: "linear(to-r, #ff6050,#ff0e83)",
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
