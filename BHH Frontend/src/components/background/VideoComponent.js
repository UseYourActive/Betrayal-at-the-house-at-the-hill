import bckgVideo from "./bckgvideo.mp4";
const VideoComponent = () => {
  return (
    <video autoPlay muted loop id="myVideo">
      <source src={bckgVideo} type="video/mp4" />
    </video>
  );
};

export default VideoComponent;
