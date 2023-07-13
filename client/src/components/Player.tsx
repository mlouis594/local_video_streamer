import ReactPlayer from "react-player";

export default function Player() {
  return (
    <ReactPlayer
      url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      width="100%"
      height="100%"
      controls
    />
  );
}
