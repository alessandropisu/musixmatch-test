import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
  useTheme,
} from "@chakra-ui/react";
import Title from "common/Title";
import useStore from "store";
import { sortedUsersSelector, userInfoSelector } from "store/selectors";

function Leaderboard() {
  const { colors } = useTheme();

  const currentUser = useStore(userInfoSelector);
  const sortedUsers = useStore(sortedUsersSelector);

  return (
    <>
      <Title>Leaderboard 🏅</Title>

      <Box shadow="xl" rounded="xl" padding={5}>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th isNumeric>Best score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedUsers.map((user) => (
              <Tr
                key={user.name}
                bgGradient={
                  currentUser?.name === user.name
                    ? colors.brandGradient
                    : "transparent"
                }
                color={currentUser?.name === user.name ? "white" : "black"}
              >
                <Td>{user.name}</Td>
                <Td isNumeric fontWeight={700}>
                  {user.best}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
}

export default Leaderboard;
