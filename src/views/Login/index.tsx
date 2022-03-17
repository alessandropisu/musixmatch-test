import { Box, Button, Flex, Heading, Image, Input } from "@chakra-ui/react";
import { useState } from "react";
import useStore from "store";

function Login() {
  const [username, setUsername] = useState("");

  const login = useStore((store) => store.login);

  function handleLogin() {
    login(username);
  }

  return (
    <Flex alignItems="center" justifyContent="center" height="full">
      <Box
        width="400px"
        mx="auto"
        paddingX={4}
        paddingY={3}
        shadow="xl"
        rounded="xl"
      >
        <Flex justifyContent="center" alignItems="center">
          <Image src="logo.png" height="80px" />
          <Heading marginLeft={4} size="2xl">
            Who Sings
          </Heading>
        </Flex>

        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="filled"
          placeholder="Username"
          marginY={6}
        />

        <Button isFullWidth isDisabled={!username} onClick={handleLogin}>
          Enter
        </Button>
      </Box>
    </Flex>
  );
}

export default Login;
