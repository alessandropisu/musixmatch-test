import { Stat, StatLabel, StatNumber, StatProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardProps extends StatProps {
  title: string;
  value: ReactNode;
}

function Card({ title, value, ...rest }: CardProps) {
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={5}
      shadow="xl"
      border="3px solid"
      rounded="xl"
      textAlign="center"
      {...rest}
    >
      <StatLabel fontWeight="500" fontSize="3xl">
        {title}
      </StatLabel>
      <StatNumber fontWeight="700" fontSize="6xl">
        {value}
      </StatNumber>
    </Stat>
  );
}

export default Card;
