import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../ui components/Button";

interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  startDate: string;
  username: string;
}

const AssignmentPage = () => {
  const params = useParams<{ assignmentId: string }>();
  const [assignment, setAssignment] = useState<Assignment | undefined>();
  const [loading, setLoading] = useState(true);

  const fetchAssignment = async () => {
    const response = await axios.get(
      `http://localhost:5073/api/assignments/${params.assignmentId}`
    );
    const data = response.data;
    setAssignment(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchAssignment();
  }, [params.assignmentId]);

  const handleClick = async () => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this assignment?"
      );

      if (confirmed) {
        await axios.delete(
          `http://localhost:5073/api/assignments/${params.assignmentId}`
        );
        window.location.href = "/assignments";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="d-flex justify-content-between border border-dark rounded p-3">
          <div>
            <h2>{assignment?.title}</h2>
            <p>{assignment?.description}</p>
            <p>{assignment?.username}</p>
            <Button name="Delete" color="btn-danger" onClick={handleClick} />
          </div>

          <div>
            <p>Due Date: {assignment?.dueDate}</p>
            <p>Start Date: {assignment?.startDate}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentPage;
