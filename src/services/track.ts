import axiosInstance from "./axios";

// https://developer.musixmatch.com/documentation/api-reference/track-chart-get
function getTracksApi(tracksNumber = 5) {
  return axiosInstance.get(
    `/chart.tracks.get?chart_name=top&page=1&page_size=${tracksNumber}&f_has_lyrics=1`
  );
}
// https://developer.musixmatch.com/documentation/api-reference/track-snippet-get
function getTrackSnippetApi(trackId: string) {
  return axiosInstance.get(`/track.snippet.get?track_id=${trackId}`);
}

export { getTracksApi, getTrackSnippetApi };
