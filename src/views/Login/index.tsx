import { Box, Button, Flex, Heading, Image, Input } from "@chakra-ui/react";
import { writeStorage } from "@rehooks/local-storage";
import { useState } from "react";
import { USER_STORAGE } from "../../utils";

function Login() {
  const [username, setUsername] = useState("");

  function handleLogin() {
    writeStorage(USER_STORAGE, username);
  }

  return (
    <Flex alignItems="center" justifyContent="center" height="full">
      <Box width="350px" mx="auto" px={4} py={3} shadow="lg" rounded="md">
        <Flex justifyContent="center" alignItems="center" mb="4">
          <Image src="logo.png" h="80px" />
          <Heading ml="4">Who Sings</Heading>
        </Flex>

        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="filled"
          placeholder="Username"
          my="3"
        />

        <Button isFullWidth isDisabled={!username} onClick={handleLogin}>
          Enter
        </Button>
      </Box>
    </Flex>
  );
}

export default Login;
