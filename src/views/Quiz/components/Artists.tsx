import { Button, ButtonGroup } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ArtistsProps {
  artists: string[];
  onArtistClick: (artist: string) => void;
}

const MotionButton = motion(Button);

function Artists({ artists, onArtistClick }: ArtistsProps) {
  return (
    <ButtonGroup
      mt="5"
      flexDirection={{ base: "column", md: "row" }}
      spacing={{ base: 0, md: 5 }}
    >
      {artists.map((artist) => (
        <MotionButton
          key={artist}
          isFullWidth
          height="50px"
          mt={{ base: 4, md: 0 }}
          onClick={() => onArtistClick(artist)}
          whileHover={{ scale: 1.07 }}
        >
          {artist}
        </MotionButton>
      ))}
    </ButtonGroup>
  );
}

export default Artists;
