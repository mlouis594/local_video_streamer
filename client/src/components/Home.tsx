import { useEffect, useState } from "react";
import "./Home.css";
import VideoGrid from "./VideoGrid";
import { useNavigate } from "react-router-dom";

export default function Home() {
  //will write a query to API for list of avail movies

  const [video, setVideos] = useState([{ title: "", fullPath: "" }]);
  const navigate = useNavigate();

  const getVids = async () => {
    let res = await fetch("http://localhost:5001/videos");
    let vids: { title: string; fullPath: string }[] = await res.json();
    return vids;
  };

  function fetchVids() {
    let temp: { title: string; fullPath: string }[] = [];
    getVids().then((res) => {
      res.forEach((el) =>
        temp.push({ title: el.title, fullPath: el.fullPath })
      );
      setVideos(temp);
    });
  }

  //when the dependency array is empty the function in the useEffect will only run when the component is mounted and unmounted
  //will run the first function when mounted and the return function when unmounted
  //typically state variables go in the dependency array
  useEffect(() => {
    console.log("mount");

    fetchVids();
    return () => {
      console.log("Cleanup");
    };
  }, []);

  return (
    <>
      <h1>Available Videos</h1>
      <VideoGrid videoInfo={video} />
    </>
  );
}
