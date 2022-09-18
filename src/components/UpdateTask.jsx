import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
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
        className="card p-4 shadow-lg mb-4"
        onSubmit={handleSubmit(elementos)}
      >
        <div className="text-center py-3">
          <h3>Update Task</h3>
        </div>
        <div className="form-floating">
          <input
            autoFocus
            type="text"
            className="form-control"
            placeholder="taks"
            {...register("task", {
              required: true,
              minLength: 5,
            })}
          />
          {errors.task?.type === "required" && (
            <span>El campo es requerido</span>
          )}
          {errors.task?.type === "minLength" && (
            <span>El campo debe tener al menos 5 caracteres</span>
          )}

          <label className="form-label">taks</label>
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
            <span>El campo es requerido</span>
          )}
          {errors.description?.type === "minLength" && (
            <span>El campo debe tener al menos 10 caracteres</span>
          )}
          <label>Write to description</label>
        </div>

        <div className="d-grid mt-4">
          <button type="submit" className="btn btn-primary">
            update task
          </button>
        </div>
      </form>
    </div>
  );
};
