import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className=" d-flex flex-column align-items-center gap-2 vh-100">
      404 Not Found
      <Link to="/">Go to the home page</Link>
    </div>
  );
};

export default NotFoundPage;
