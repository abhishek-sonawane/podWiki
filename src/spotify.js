const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = window.location.href;
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "user-read-playback-position",
  "user-library-read",
];

export const getTokenFromUrl = () => {
  const id = window.location.hash;
  return id.substring(id.indexOf("=") + 1, id.indexOf("&"));
};
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
