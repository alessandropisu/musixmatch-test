import { Button, ButtonGroup, Flex, Progress } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import Lyric from "../../components/Lyric";
import sample from "lodash.samplesize";
import shuffle from "lodash.shuffle";
import Loader from "../../components/Loader";
import { getTracksApi, getTrackSnippetApi } from "../../services/track";
import { useTimer } from "use-timer";
import Result from "../../components/Result";
import { motion } from "framer-motion";
import useStore from "../../store";

const songsNumber = 4;
const MotionButton = motion(Button);

interface Song {
  artist: string;
  snippet: string;
}

function Quiz() {
  const [points, setPoints] = useState(0);
  const [songIndex, setSongIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState<Song[]>([]);

  const addScore = useStore((state) => state.addScore);

  const { time, start, reset } = useTimer({
    initialTime: 5,
    endTime: 0,
    timerType: "DECREMENTAL",
    onTimeOver: () => {
      setSongIndex(songIndex + 1);

      reset();
      start();
    },
  });

  const currentSong = songs[songIndex];
  const isGameCompleted = songIndex === songsNumber;

  const artists = useMemo(() => {
    if (!currentSong) {
      return [];
    }

    let payload = [currentSong.artist];

    payload = [
      ...payload,
      ...sample(
        songs
          .filter((track) => track.artist !== currentSong.artist)
          .map((track) => track.artist),
        2
      ),
    ];

    return shuffle(payload);
  }, [songs, currentSong]);

  useEffect(() => {
    getTracksApi(songsNumber).then(async ({ data }) => {
      const trackList = data.message.body.track_list;

      const songs: Song[] = [];

      for (let i = 0; i < songsNumber; i++) {
        const trackId = trackList[i].track.track_id;
        const trackArtist = trackList[i].track.artist_name;

        const { data } = await getTrackSnippetApi(trackId);

        const snippet = data.message.body.snippet.snippet_body;

        songs.push({
          artist: trackArtist,
          snippet,
        });
      }

      setSongs(songs);
      setLoading(false);

      start();
    });
  }, []);

  useEffect(() => {
    if (isGameCompleted) {
      addScore(points);
    }
  }, [isGameCompleted, points]);

  function handleArtistClick(artist: string) {
    const newPoints = artist === currentSong.artist ? points + 1 : points;

    if (artist === currentSong.artist) {
      setPoints(newPoints);
    }

    setSongIndex(songIndex + 1);

    reset();
    start();
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Flex flexDirection="column">
          {isGameCompleted ? (
            <Result points={points} />
          ) : (
            <>
              <Lyric value={currentSong.snippet} />
              <Progress size="sm" min={0} max={5} value={time} />
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
                    onClick={() => handleArtistClick(artist)}
                    whileHover={{ scale: 1.07 }}
                  >
                    {artist}
                  </MotionButton>
                ))}
              </ButtonGroup>
            </>
          )}
        </Flex>
      )}
    </>
  );
}

export default Quiz;
