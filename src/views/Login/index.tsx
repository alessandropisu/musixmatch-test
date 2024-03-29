import { Box, Button, Flex, Heading, Image, Input } from "@chakra-ui/react";
import { useState } from "react";
import useStore from "store";

function Login() {
  const [username, setUsername] = useState("");

  const login = useStore((store) => store.login);

  function handleLogin() {
    login(username.trim());
  }

  return (
    <Flex alignItems="center" justifyContent="center" height="full">
      <Box
        width="400px"
        marginX="auto"
        paddingX={5}
        paddingY={4}
        shadow="2xl"
        rounded="xl"
      >
        <Flex justifyContent="center" alignItems="center" marginBottom={8}>
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
          marginBottom={4}
        />

        <Button isFullWidth isDisabled={!username.trim()} onClick={handleLogin}>
          Log In
        </Button>
      </Box>
    </Flex>
  );
}

export default Login;
