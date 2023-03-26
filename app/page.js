import Video from "./Video.js";
import YouTube from "./YouTube.jsx";
import Premise from "./Premise.js";
import Crew from "./Crew.js";

export default function Site() {
  return (
    <>
      {/* <Video /> */}
      <YouTube videoId="UaP1C6Wuf9o" />
      {/* <Youtube
        video="UaP1C6Wuf9o"
        thumbnailQuality="hqdefault"
        width="600"
        height="400"
      /> */}

      <Premise />

      <Crew />
    </>
  );
}
