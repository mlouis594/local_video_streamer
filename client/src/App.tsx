import "./App.css";
import Card from "./components/Card";
import Player from "./components/Player";
import VideoGrid from "./components/VideoGrid";

function App() {
  const temp = [
    { title: "one", duration: 1 },
    { title: "two", duration: 2 },
    { title: "three", duration: 3 },
    { title: "four", duration: 4 },
    { title: "five", duration: 5 },
  ];

  return (
    <>
      <h1>Available Videos</h1>
      <VideoGrid videoInfo={temp} />
    </>
  );
}

export default App;
