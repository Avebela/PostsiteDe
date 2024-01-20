import { useNavigate, useLocation } from "react-router-dom";
import classes from "./Login.module.css";
import { useAuth } from "../../hook/useAuth";

const Loginpage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const fromPage = location.state?.from?.pathname || "/";
  // const { signin } = useAuth();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const user = form.username.value;

  //   signin(user, () => navigate(fromPage, { replace: true }));
  // };

  return (
    <section className={classes.login}>
      <div className="container">
        <form
        // onSubmit={handleSubmit}
        >
          <h1>Введите ваш логин</h1>
          <label>
            Имя: <input name="username" />
            <button type="submit">Войти</button>
          </label>
        </form>
      </div>
    </section>
  );
};

export { Loginpage };
