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
          bgGradient: "linear(to-l, #FB157E,#FB6038)",
          _hover: {
            _disabled: {
              bgGradient: "linear(to-l, #FB157E,#FB6038)",
            },
            bgGradient: "linear(to-r, #FB157E,#FB6038)",
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
