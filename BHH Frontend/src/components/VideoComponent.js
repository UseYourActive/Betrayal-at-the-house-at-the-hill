import bckgVideo from "../assets/bckgvideo.mp4";
import LoginComponent from "./LoginComponent";

const VideoComponent = () => {
  return (
    <video autoPlay muted loop id="myVideo">
      <source src={bckgVideo} type="video/mp4" />
    </video>
  );
};

export default VideoComponent;
