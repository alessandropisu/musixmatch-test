import {
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { deleteFromStorage } from "@rehooks/local-storage";
import { USER_STORAGE } from "../utils";
import { BsFillTrophyFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";

function Navbar() {
  function handleLogout() {
    deleteFromStorage(USER_STORAGE);
  }

  return (
    <Flex p="3">
      <Flex alignItems="center">
        <Image src="logo.png" height="30px" />
        <Heading size="md" ml="2">
          Who Sings
        </Heading>
      </Flex>
      <Spacer />
      <ButtonGroup>
        <IconButton
          icon={<BsFillTrophyFill />}
          isRound
          aria-label="Show leaderboard"
        />
        <IconButton
          icon={<FaUserAlt />}
          isRound
          aria-label="Show user history"
        />
        <IconButton
          icon={<CgLogOut />}
          isRound
          aria-label="Logout"
          onClick={handleLogout}
        />
      </ButtonGroup>
    </Flex>
  );
}

export default Navbar;
