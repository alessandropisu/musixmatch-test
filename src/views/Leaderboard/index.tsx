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
import useStore from "../../store";
import { sortedUsersSelector, userInfoSelector } from "../../store/selectors";

function Leaderboard() {
  const { colors } = useTheme();

  const currentUser = useStore(userInfoSelector);
  const sortedUsers = useStore(sortedUsersSelector);

  return (
    <Box rounded="md" borderWidth="3px" borderColor={colors.brandOrange} p={1}>
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
              backgroundColor={
                currentUser?.name === user.name
                  ? "rgba(255, 14, 131, 0.2)"
                  : "transparent"
              }
            >
              <Td>{user.name}</Td>
              <Td isNumeric fontWeight="700">
                {user.best}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default Leaderboard;
