import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Box,
} from "@chakra-ui/react";
import useLocalStorage from "@rehooks/local-storage";
import { useEffect, useMemo } from "react";

function Leaderboard() {
  const [users] = useLocalStorage<{
    [user: string]: { history: number[]; best: number };
  }>(`whosings.users`, {});

  const sortedUsers =
    users &&
    Object.fromEntries(
      Object.entries(users).sort(([, a], [, b]) => a.best - b.best)
    );

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
          {Object.entries(sortedUsers).map(([user, value]) => (
            <Tr key={user}>
              <Td>{user}</Td>
              <Td isNumeric>{value.best}</Td>
            </Tr>
          ))}

          {Object.keys(sortedUsers).length === 0 && (
            <Tr>
              <Td colSpan={2} textAlign="center">
                No results
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </Box>
  );
}

export default Leaderboard;
