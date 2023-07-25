import "./Card.css";

interface CardProps {
  title: string;
  duration: number;
}

//card will hold the video title and duration
export default function Card({ title, duration }: CardProps) {
  return (
    <div className="myCard">
      <h2>{title}</h2>
      <p>{`Duration: ${duration}`}</p>
    </div>
  );
}
