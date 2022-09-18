import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addTaks, deleTask, updateState } from "../features/Slices/TaksSlices";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export const Taks = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const task = useSelector((store) => store.taks);

  const elementos = (data) => {
    reset();
    let id = uuidv4();
    let nuevo = { id, ...data };

    toast.success("¡ task added successfully !", {
      position: "top-left",
    });
    dispatch(addTaks(nuevo));
  };

  return (
    <>
      <div className="container py-5">
        <div className="text-center">
          <h3 className="fw-bold text-success">
            Control of your Tasks
            <i className=" mx-2 fa-solid fa-list-ol text-success"></i>
          </h3>
          <hr />
        </div>

        <div className="row">
          <div className="col-md-5">
            <form
              className="card p-4 shadow-lg mb-4"
              onSubmit={handleSubmit(elementos)}
            >
              <div className="text-center py-3 ">
                <h3>Create Task</h3>
              </div>
              <div className="form-floating">
                <input
                  autoFocus
                  type="text"
                  className="form-control"
                  placeholder="Task"
                  {...register("task", {
                    required: true,
                    minLength: 3,
                  })}
                />
                {errors.task?.type === "required" && (
                  <span className="place">the field is required</span>
                )}
                {errors.task?.type === "minLength" && (
                  <span className="place">
                    the field must have at least 3 characters
                  </span>
                )}

                <label className="form-label">Task</label>
              </div>
              <div className="form-floating mt-4">
                <textarea
                  className="form-control"
                  placeholder="write a description"
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
                  <span className="place">
                    the field must have at least 10 characters
                  </span>
                )}
                <label>write a description</label>
              </div>

              <div className="d-grid mt-4">
                <button type="submit" className="btn btn-success">
                  Add new Task
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-7">
            {task.map((tarea) => (
              <div key={tarea.id} className="card shadow-lg mb-4">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div className="px-3">
                      <h4 className="card-title">{tarea.task}</h4>
                      <p className="card-text">{tarea.description}</p>
                    </div>
                    <div>
                      <button
                      id="boton"
                        onClick={() => dispatch(updateState(tarea.id))}
                        className={
                          tarea.stateTask === "false"
                            ? "btn btn-outline-primary"
                            : "btn btn-success"
                        }
                      >
                        {tarea.stateTask === "false" ? (
                          "mark as complete"
                        ) : (
                          <span>
                            <i className="fa-solid fa-check"></i> Completed
                          </span>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="p-3 gap-1 d-flex">
                    <button
                      onClick={() => dispatch(deleTask(tarea.id))}
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                    <Link to={"/updateTask/" + tarea.id}>
                      {" "}
                      <button className="btn btn-warning">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
