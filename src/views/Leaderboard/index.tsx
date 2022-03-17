import { Table, Thead, Tr, Th, Tbody, Td, Box } from "@chakra-ui/react";
import useStore from "../../store";
import { sortedUsersSelector } from "../../store/selectors";

function Leaderboard() {
  const sortedUsers = useStore(sortedUsersSelector);

  return (
    <Box rounded="lg" border="3px solid #ff6050" p={1}>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th isNumeric>Best score</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedUsers.map((user) => (
            <Tr key={user.name}>
              <Td>{user.name}</Td>
              <Td isNumeric>{user.best}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default Leaderboard;
