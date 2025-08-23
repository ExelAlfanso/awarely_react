const YouTubeThumbnail = ({ videoUrl }: { videoUrl: string }) => {
  // Extract video ID from YouTube URL
  const getYouTubeID = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeID(videoUrl);
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : null;

  return (
    <div>
      {thumbnailUrl ? (
        <img
          src={thumbnailUrl}
          alt="YouTube thumbnail"
          className="rounded-t-2xl"
        />
      ) : (
        <p>Invalid YouTube URL</p>
      )}
    </div>
  );
};

export default YouTubeThumbnail;
