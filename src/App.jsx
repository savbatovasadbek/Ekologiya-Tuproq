import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import "./App.css";
import { TabNavigation } from "./components/pages/Taqdimot/TabNavigation";
import ErrorPage from "./components/pages/Error/error";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path={`/Presentation`} element={<TabNavigation />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
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
