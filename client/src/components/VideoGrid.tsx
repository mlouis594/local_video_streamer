import Card from "./Card";
import "./VideoGrid.css";

interface VideoGridProps {
  videoInfo: { title: string; fullPath: string }[];
}

//need to add onclick function for Card
export default function VideoGrid({ videoInfo }: VideoGridProps) {
  return (
    <div className="videoGrid">
      {videoInfo.map((video) => (
        <Card title={video.title} fullPath={video.fullPath} />
      ))}
    </div>
  );
}
