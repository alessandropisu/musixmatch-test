import { SimpleGrid, Text, useTheme } from "@chakra-ui/react";
import useLocalStorage from "@rehooks/local-storage";
import Card from "../../components/Card";
import { USER_STORAGE } from "../../utils";

function User() {
  const [userLogged] = useLocalStorage(USER_STORAGE);
  const [users] = useLocalStorage<{
    [user: string]: { history: number[]; best: number };
  }>(`whosings.users`, {});

  const userInfo =
    userLogged && users[userLogged]
      ? users[userLogged]
      : { history: [], best: 0 };

  const { colors } = useTheme();

  return (
    <>
      {userInfo && (
        <>
          <Text textAlign="center" fontSize="4xl" mb={10} fontWeight={"bold"}>
            Hello {userLogged} 👋
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
            <Card
              title="Game played"
              value={userInfo.history.length}
              borderColor={colors.brandOrange}
              color={colors.brandOrange}
            />
            <Card
              title="Your best score"
              value={userInfo.best}
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
