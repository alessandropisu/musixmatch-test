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
      marginTop={5}
      flexDirection={{ base: "column", md: "row" }}
      spacing={{ base: 0, md: 5 }}
      rounded="xl"
    >
      {artists.map((artist, i) => (
        <MotionButton
          // Using index as key to mantain 'scale' effect on artists change on hovered button
          key={i}
          isFullWidth
          height="50px"
          marginTop={{ base: 4, md: 0 }}
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
