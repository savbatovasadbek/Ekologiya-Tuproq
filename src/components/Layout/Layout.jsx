import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
// import Nav from "./Nav";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
