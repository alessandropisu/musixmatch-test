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
import { BsFillTrophyFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import { Link } from "react-router-dom";
import { ReactElement } from "react";
import useStore from "store";

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
  const logout = useStore((state) => state.logout);

  const { colors } = useTheme();

  const routeButtons = [
    {
      icon: <FaUserAlt />,
      label: "Show user info",
      as: Link,
      to: "/user",
      bg: colors.brandOrange,
      _hover: { bg: colors.brandOrange },
      _active: { bg: colors.brandOrange },
    },
    {
      icon: <BsFillTrophyFill />,
      label: "Show leaderboard",
      as: Link,
      to: "/leaderboard",
      variant: "brand",
    },
    {
      icon: <CgLogOut />,
      label: "Logout",
      onClick: () => logout(),
      bg: colors.brandPink,
      _hover: { bg: colors.brandPink },
      _active: { bg: colors.brandPink },
    },
  ];

  return (
    <Flex padding={3}>
      <Link to="/">
        <Flex alignItems="center">
          <Image src="logo.png" height="30px" />

          <Heading size="lg" marginLeft={2}>
            Who Sings
          </Heading>
        </Flex>
      </Link>

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
