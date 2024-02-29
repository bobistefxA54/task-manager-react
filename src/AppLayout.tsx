import { Outlet } from "react-router-dom";
import NavBar from "./feature components/NavBar";

const AppLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
