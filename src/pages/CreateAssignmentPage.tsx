import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../AuthProvider";

type FormFields = {
  title: string;
  description: string;
  dueDate: Date;
  startDate: Date;
};

const CreateAssignmentPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const { username, token } = useAuth();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const body = {
        title: data.title,
        description: data.description,
        dueDate: data.dueDate,
        startDate: data.startDate,
        username: username,
      };
      await axios.post("http://localhost:5073/api/assignments", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      window.location.href = "/assignments";
    } catch (error) {
      console.error("Create assignment error:", error);
    }
  };

  return (
    <div className="container">
      <h1>Create Assignment</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 8,
                message: "Title must be at least 8 characters",
              },
            })}
            type="text"
            className="form-control"
            placeholder="Title"
          />
          {errors.title && (
            <span className="text-danger">{errors.title.message}</span>
          )}
        </div>
        <div className="mb-3">
          <input
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 16,
                message: "Description must be at least 16 characters",
              },
            })}
            type="text"
            className="form-control"
            placeholder="Description"
          />
          {errors.description && (
            <span className="text-danger">{errors.description.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">
            Due Date
          </label>
          <input
            {...register("dueDate", {
              required: "Due date is required",
              min: {
                value: new Date().toISOString().split("T")[0],
                message: "Due date must be today or later",
              },
            })}
            type="date"
            className="form-control"
          />
          {errors.dueDate && (
            <span className="text-danger">{errors.dueDate.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">
            Start Date
          </label>
          <input
            {...register("startDate", {
              required: "Start date is required",
              min: {
                value: new Date().toISOString().split("T")[0],
                message: "Start date must be today or later",
              },
            })}
            type="date"
            className="form-control"
          />
          {errors.startDate && (
            <span className="text-danger">{errors.startDate.message}</span>
          )}
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="btn btn-primary"
        >
          {isSubmitting ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreateAssignmentPage;
