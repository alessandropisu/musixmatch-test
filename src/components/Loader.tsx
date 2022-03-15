import { Center, Spinner } from "@chakra-ui/react";

function Loader() {
  return (
    <Center>
      <Spinner
        thickness="5px"
        speed="0.75s"
        emptyColor="#FB157E"
        color="#FB6038"
        w="110px"
        h="110px"
      />
    </Center>
  );
}

export default Loader;
