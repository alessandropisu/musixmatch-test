import axiosInstance from "./axios";

// https://developer.musixmatch.com/documentation/api-reference/track-chart-get
function getTracksApi(tracksNumber = 5) {
  const params = {
    chart_name: "top",
    page: "1",
    page_size: tracksNumber.toString(),
    f_has_lyrics: "1",
  };

  return axiosInstance.get("/chart.tracks.get", {
    params,
  });
}

// https://developer.musixmatch.com/documentation/api-reference/track-snippet-get
function getTrackSnippetApi(track_id: string) {
  return axiosInstance.get("/track.snippet.get", {
    params: {
      track_id,
    },
  });
}

export { getTracksApi, getTrackSnippetApi };
