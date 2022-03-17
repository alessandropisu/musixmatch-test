import { SimpleGrid, useTheme } from "@chakra-ui/react";
import Card from "../../common/Card";
import Title from "../../common/Title";
import useStore from "../../store";
import { userInfoSelector } from "../../store/selectors";

function User() {
  const user = useStore(userInfoSelector);

  const { colors } = useTheme();

  function getLastScores() {
    if (user) {
      if (user.scores.length === 0) {
        return "No scores found";
      }

      // Check if scores count is greater of 3 to prevent allocation of extra 0 values
      const scoresCount = user.scores.length >= 3 ? 3 : user.scores.length;

      return user.scores.slice(0, scoresCount).toString();
    }
  }

  return (
    <>
      {user && (
        <>
          <Title> Hello {user.name} 👋</Title>

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 5, lg: 8 }}
            mb={5}
          >
            <Card
              title="Game played"
              value={user.scores.length}
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

          <Card
            title="Your last 3 quiz scores"
            value={getLastScores()}
            bgGradient={colors.brandGradient}
            bgClip="text"
            shadow="xl"
          />
        </>
      )}
    </>
  );
}

export default User;
