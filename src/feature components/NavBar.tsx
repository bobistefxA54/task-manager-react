import { Link } from "react-router-dom";
import { useAuth } from "../AuthProvider";
import Button from "../ui components/Button";

const NavBar = () => {
  const { username, removeToken, removeUsername } = useAuth();
  const handleLogout = () => {
    removeToken();
    removeUsername();
  };

  return (
    <div className="d-flex justify-content-center gap-3 bg-light p-4">
      <Link to="/">Home</Link>
      <Link to="/assignments">Assignments</Link>
      {username === null ? (
        <Link to="/login">Login</Link>
      ) : (
        <div className="d-flex gap-3">
          <span className="">{username}</span>
          <Button name="Logout" color="btn-danger" onClick={handleLogout} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
