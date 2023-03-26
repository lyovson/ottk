import ResponsiveYouTubeEmbed from "./Video.js";
import YouTube from "./YouTube.jsx";
import Premise from "./Premise.js";
import Crew from "./Crew.js";

export default function Site() {
  return (
    <>
      <YouTube videoId="UaP1C6Wuf9o" />

      <ResponsiveYouTubeEmbed
        videoId="UaP1C6Wuf9o"
        thumbnail="/images/yt3.png"
      />

      <Premise />

      <Crew />
    </>
  );
}
