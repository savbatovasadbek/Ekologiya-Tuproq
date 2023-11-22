import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Yerning_tuzilishi from "./components/Taqdimot/Yerning_tuzilishi/Yerning_tuzilishi";
import { useTranslation } from "react-i18next";
import { translationKey } from "./translation/translationKey/translationKey";
import "./App.css";

function App() {
  const { t } = useTranslation();

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route
          path={`/${t(translationKey["Presentation"])}`}
          element={<Yerning_tuzilishi />}
        ></Route>
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
