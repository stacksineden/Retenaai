const DemoVideo = () => {
  return (
    <div className="w-full h-full my-6">
      <div className="w-full h-[600px]">
        <div className="max-w-6xl h-full bg-accent mx-auto rounded-3xl">
          <video
            src="/assets/demo.mp4"
            controls
            className="w-full aspect-video h-full rounded-3xl"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default DemoVideo;
