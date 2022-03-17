import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TitleProps extends TextProps {
  children: ReactNode;
}

function Title({ children, ...rest }: TitleProps) {
  return (
    <Text textAlign="center" fontSize="4xl" fontWeight="bold" mb={8} {...rest}>
      {children}
    </Text>
  );
}

export default Title;
