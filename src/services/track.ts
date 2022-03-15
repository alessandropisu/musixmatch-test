import axiosInstance from "./axios";

function getTracksApi(tracksNumber = 5) {
  return axiosInstance.get(
    `/chart.tracks.get?chart_name=top&page=1&page_size=${tracksNumber}&f_has_lyrics=1`
  );
}

function getTrackSnippetApi(trackId: string) {
  return axiosInstance.get(`/track.snippet.get?track_id=${trackId}`);
}

export { getTracksApi, getTrackSnippetApi };
