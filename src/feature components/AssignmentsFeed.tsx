import { useEffect, useState } from "react";
import axios from "axios";
import AssignmentCard from "./AssignmentCard";

interface Assignments {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  startTime: string;
  username: string;
}

const AssignmentsFeed = () => {
  const [assignments, setAssignments] = useState<Assignments[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchAssignments = async () => {
    try {
      const response = await axios.get("http://localhost:5073/api/assignments");
      const data = response.data;
      setAssignments(data);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchAssignments();
  }, []);
  return (
    <div className="container">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="d-flex flex-column gap-3">
          {assignments.map((assignment) => (
            <AssignmentCard assignment={assignment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AssignmentsFeed;
