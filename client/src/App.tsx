import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Player from "./components/Player";
import Home from "./components/Home";

function App() {
  //will write a query to API for list of avail movies

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="videos/:title" element={<Player />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
