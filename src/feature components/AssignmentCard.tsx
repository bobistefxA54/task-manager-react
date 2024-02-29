import Button from "../ui components/Button";
import { Link } from "react-router-dom";

interface AssignmentCardProps {
  assignment: {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    startTime: string;
    username: string;
  };
}

const AssignmentCard = ({ assignment }: AssignmentCardProps) => {
  return (
    <div className="d-flex justify-content-between border border-dark rounded p-2">
      <div>
        <h4>{assignment.title}</h4>
        <p>{assignment.description}</p>
        <p>{assignment.username}</p>
      </div>
      <div>
        <p>Due Date: {assignment.dueDate}</p>
        <p>Start Date: {assignment.startTime}</p>
        <Link to={`/assignments/${assignment.id}`}>
          <Button name="Go to assignment" color="btn-primary" />
        </Link>
      </div>
    </div>
  );
};

export default AssignmentCard;
