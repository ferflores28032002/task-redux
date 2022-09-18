import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../features/Slices/TaksSlices";

export const UpdateTask = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const datos = useSelector((store) => store.taks);
  const navigate = useNavigate();

  const { task, description } = datos.find((dato) => dato.id === id);
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      task,
      description,
    },
  });

  const elementos = (data) => {
    dispatch(updateTask({ id, ...data }));
    reset();
    navigate("/");
  };

  return (
    <div className="container py-5">
      <form
        className="card p-4 shadow-lg mb-4 update"
        onSubmit={handleSubmit(elementos)}
      >
        <div className="text-center py-3">
          <h3>Update Tasks</h3>
        </div>
        <div className="form-floating">
          <input
            autoFocus
            type="text"
            className="form-control"
            placeholder="Task"
            {...register("task", {
              required: true,
              minLength: 5,
            })}
          />
          {errors.task?.type === "required" && (
            <span className="place" >the field is required</span>
          )}
          {errors.task?.type === "minLength" && (
            <span className="place">the field must have at least 3 characters</span>
          )}

          <label className="form-label">Task</label>
        </div>
        <div className="form-floating mt-4">
          <textarea
            className="form-control"
            placeholder="Write to description"
            style={{ height: "100px" }}
            {...register("description", {
              required: true,
              minLength: 10,
            })}
          ></textarea>

          {errors.description?.type === "required" && (
            <span className="place">the field is required</span>
          )}
          {errors.description?.type === "minLength" && (
            <span className="place">the field must have at least 3 characters</span>
          )}
          <label>Write a description</label>
        </div>

        <div className="d-grid mt-4">
          <button type="submit" className="btn btn-primary">
            update the Task
          </button>
        </div>
      </form>
    </div>
  );
};
