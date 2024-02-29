import { Link } from "react-router-dom";
import AssignmentsFeed from "../feature components/AssignmentsFeed";
import Button from "../ui components/Button";
import { useAuth } from "../AuthProvider";

const AssignmentsPage = () => {
  const { username } = useAuth();
  const isDisabled = username === null;
  return (
    <div className="container d-flex align-items-center flex-column gap-3">
      <AssignmentsFeed />
      <div style={{ width: "20%" }}>
        {isDisabled ? (
          <Button
            name="Log in to create a new assignment"
            color="btn-primary"
            disabled={isDisabled}
          />
        ) : (
          <Link to="/assignments/create">
            <Button
              name="Create new assignment"
              color="btn-primary"
              disabled={isDisabled}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default AssignmentsPage;
