const DemoVideo = () => {
  return (
    <div className="w-full h-full my-6">
      <div className="w-full md:h-[600px] px-4 md:px-0">
        <div className="max-w-6xl h-full bg-accent mx-auto rounded-3xl">
          <iframe
            src="https://www.youtube.com/embed/rGDPsrP18Go"
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video h-full rounded-3xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DemoVideo;
