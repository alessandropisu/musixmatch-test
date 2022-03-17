import { Flex, Progress } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import Lyric from "./components/Lyric";
import sample from "lodash.samplesize";
import shuffle from "lodash.shuffle";
import Loader from "../../common/Loader";
import { getTracksApi, getTrackSnippetApi } from "../../services/track";
import { useTimer } from "use-timer";
import Result from "./components/Result";
import useStore from "../../store";
import Artists from "./components/Artists";
import { TRACKS_NUMBER } from "../../constants";

interface Track {
  artist: string;
  snippet: string;
}

function Quiz() {
  const [points, setPoints] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [tracks, setTracks] = useState<Track[]>([]);

  const addScore = useStore((state) => state.addScore);

  const { time, start, reset } = useTimer({
    initialTime: 5,
    endTime: 0,
    timerType: "DECREMENTAL",
    onTimeOver: () => {
      if (isGameCompleted) return;
      setTrackIndex(trackIndex + 1);

      restartTimer();
    },
  });

  function restartTimer() {
    reset();
    start();
  }

  const currentTrack = tracks[trackIndex];
  const isGameCompleted = trackIndex === TRACKS_NUMBER;

  const artists = useMemo(() => {
    if (!currentTrack) {
      return [];
    }

    let payload = [currentTrack.artist];

    payload = [
      ...payload,
      ...sample(
        tracks
          .filter((track) => track.artist !== currentTrack.artist)
          .map((track) => track.artist),
        2
      ),
    ];

    return shuffle(payload);
  }, [tracks, currentTrack]);

  useEffect(() => {
    getTracksApi(TRACKS_NUMBER).then(async ({ data }) => {
      const trackList = data.message.body.track_list;

      const tracks: Track[] = [];

      for (let i = 0; i < TRACKS_NUMBER; i++) {
        const trackId = trackList[i].track.track_id;
        const trackArtist = trackList[i].track.artist_name;

        // Retrieve snippet for every track
        const { data } = await getTrackSnippetApi(trackId);

        const snippet = data.message.body.snippet.snippet_body;

        tracks.push({
          artist: trackArtist,
          snippet,
        });
      }

      setTracks(tracks);
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
    const newPoints = artist === currentTrack.artist ? points + 1 : points;

    if (artist === currentTrack.artist) {
      setPoints(newPoints);
    }

    setTrackIndex(trackIndex + 1);
    restartTimer();
  }

  function handlePlayAgain() {
    setTrackIndex(0);
    setPoints(0);

    restartTimer();
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Flex flexDirection="column">
          {isGameCompleted ? (
            <Result points={points} onPlayAgain={handlePlayAgain} />
          ) : (
            <>
              <Lyric value={currentTrack.snippet} />
              <Progress
                size="sm"
                min={0}
                max={5}
                value={time}
                colorScheme="cyan"
              />
              <Artists artists={artists} onArtistClick={handleArtistClick} />
            </>
          )}
        </Flex>
      )}
    </>
  );
}

export default Quiz;
