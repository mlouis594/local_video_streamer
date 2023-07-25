import Card from "./Card";
import "./VideoGrid.css";

interface VideoGridProps {
  videoInfo: { title: string; duration: number }[];
}

export default function VideoGrid({ videoInfo }: VideoGridProps) {
  return (
    <div className="videoGrid">
      {videoInfo.map((video) => (
        <Card title={video.title} duration={video.duration} />
      ))}
    </div>
  );
}
