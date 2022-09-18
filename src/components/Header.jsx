import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";

export const Header = () => {
  const task = useSelector((store) => store.taks);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link className="text-success" to={"/"}>
          Tasks <i className="fa-solid fa-clipboard-list"></i>
        </Link>
      </div>
      <div className={styles.menu}>
        <button
          type="button"
          className="btn btn-light text-success position-relative"
        >
          <i className="fa-solid fa-list"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {task.length}
            <span className="visually-hidden"></span>
          </span>
        </button>
      </div>
    </div>
  );
};
