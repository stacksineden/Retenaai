const DemoVideo = ({ url }: { url: string }) => {
  // Ensure embed format
  const getEmbedUrl = (videoUrl: string) => {
    if (!videoUrl) return "https://www.youtube.com/embed/rGDPsrP18Go";

    // If it's already an embed URL, return it
    if (videoUrl.includes("embed")) return videoUrl;

    // Extract video ID from watch?v= or youtu.be
    const videoIdMatch = videoUrl.match(/(?:v=|youtu\.be\/)([^&]+)/);
    const videoId = videoIdMatch ? videoIdMatch[1] : "rGDPsrP18Go";

    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="w-full my-10 bg-black">
      <div className="w-full md:h-[600px] px-4 md:px-0">
        <div className="max-w-6xl h-full bg-accent mx-auto rounded-3xl">
          <iframe
            src={getEmbedUrl(url)}
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

