import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Yerning_tuzilishi from "./components/pages/Taqdimot/Yerning_tuzilishi/Yerning_tuzilishi";
import "./App.css";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path={`/Presentation`} element={<Yerning_tuzilishi />}></Route>
      </Route>
    )
  );

  return (
    <div id="app">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
