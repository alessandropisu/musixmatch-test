import { Box, Button, Flex, Heading, Image, Input } from "@chakra-ui/react";
import { useState } from "react";
import useStore from "../../store";

function Login() {
  const [username, setUsername] = useState("");

  const login = useStore((store) => store.login);

  function handleLogin() {
    login(username);
  }

  return (
    <Flex alignItems="center" justifyContent="center" height="full">
      <Box width="400px" mx="auto" px={4} py={3} shadow="xl" rounded="md">
        <Flex justifyContent="center" alignItems="center">
          <Image src="logo.png" h="80px" />
          <Heading ml="4" size="2xl">
            Who Sings
          </Heading>
        </Flex>

        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="filled"
          placeholder="Username"
          my={6}
        />

        <Button isFullWidth isDisabled={!username} onClick={handleLogin}>
          Enter
        </Button>
      </Box>
    </Flex>
  );
}

export default Login;
