import { SimpleGrid, Text, useTheme } from "@chakra-ui/react";
import Card from "../../components/Card";
import useStore from "../../store";
import { userInfoSelector } from "../../store/selectors";

function User() {
  const user = useStore(userInfoSelector);

  const { colors } = useTheme();

  return (
    <>
      {user && (
        <>
          <Text textAlign="center" fontSize="4xl" mb={10} fontWeight={"bold"}>
            Hello {user.name} 👋
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
            <Card
              title="Game played"
              value={user.history.length}
              borderColor={colors.brandOrange}
              color={colors.brandOrange}
            />
            <Card
              title="Your best score"
              value={user.best}
              borderColor={colors.brandPink}
              color={colors.brandPink}
            />
          </SimpleGrid>
        </>
      )}
    </>
  );
}

export default User;
