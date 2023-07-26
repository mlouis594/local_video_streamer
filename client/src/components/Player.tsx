import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

export default async function Player() {
  let { title } = useParams();
  let res = fetch(`http://localhost:5001/watch/${title}`, {
    headers: {
      range: `bytes=${0}`,
    },
  });

  (await res).json().then().catch();

  return (
    <>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Video Streaming With Node</title>
      </head>
      <body>
        <video id="videoPlayer" width="50%" controls muted={true} autoPlay>
          <source
            src={`http://localhost:5001/watch/${title}`}
            type="video/mp4"
          />
        </video>
      </body>
    </>

    //<ReactPlayer
    //  url={`http://localhost:5001/watch/${title}`} //"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" //"C:/Users/Master Oak/Videos/Captures/streaming1.mp4"
    //  width="100%"
    //  height="100%"
    //  controls
    ///>
  );
}
