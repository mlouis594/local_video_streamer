import "./Card.css";
import Player from "./Player";
import { useNavigate } from "react-router-dom";

interface CardProps {
  title: string;
  fullPath: string;
}

//card will hold the video title and duration
export default function Card({ title, fullPath }: CardProps) {
  const navigate = useNavigate();
  return (
    <div className="myCard" onClick={() => navigate(`videos/${title}`)}>
      <h2>{title}</h2>
    </div>
  );
}
