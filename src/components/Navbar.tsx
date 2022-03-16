import {
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
  Image,
  IconButton,
  Tooltip,
  useTheme,
  IconButtonProps,
} from "@chakra-ui/react";
import { deleteFromStorage } from "@rehooks/local-storage";
import { USER_STORAGE } from "../utils";
import { BsFillTrophyFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import { Link } from "react-router-dom";
import { ReactElement } from "react";

interface NavButtonProps extends IconButtonProps {
  label: string;
  icon: ReactElement;
}

function NavButton({ label, icon, ...rest }: NavButtonProps) {
  return (
    <Tooltip label={label} rounded="md">
      <IconButton icon={icon} isRound variant="solid" color="white" {...rest} />
    </Tooltip>
  );
}

function Navbar() {
  const { colors } = useTheme();

  const routeButtons = [
    {
      icon: <BsFillTrophyFill />,
      label: "Show leaderboard",
      as: Link,
      to: "/leaderboard",
      bg: colors.brandOrange,
      _hover: { bg: colors.brandOrange },
      _active: { bg: colors.brandOrange },
    },
    {
      icon: <FaUserAlt />,
      label: "Show user history",
      as: Link,
      to: "/user",
      variant: "brand",
    },
    {
      icon: <CgLogOut />,
      label: "Logout",
      onClick: () => handleLogout(),
      bg: colors.brandPink,
      _hover: { bg: colors.brandPink },
      _active: { bg: colors.brandPink },
    },
  ];

  function handleLogout() {
    deleteFromStorage(USER_STORAGE);
  }

  return (
    <Flex p="3">
      <Flex alignItems="center">
        <Link to="/">
          <Image src="logo.png" height="30px" />
        </Link>
        <Heading size="md" ml="2">
          Who Sings
        </Heading>
      </Flex>
      <Spacer />
      <ButtonGroup>
        {routeButtons.map(({ label, icon, ...rest }) => (
          <NavButton
            key={label}
            label={label}
            icon={icon}
            aria-label={label}
            {...rest}
          />
        ))}
      </ButtonGroup>
    </Flex>
  );
}

export default Navbar;
