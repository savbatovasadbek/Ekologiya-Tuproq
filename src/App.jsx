import "./App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Order from "./components/Order/Order";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/order" element={<Order />}></Route>
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
