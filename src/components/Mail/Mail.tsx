import { SubmitHandler, useForm } from "react-hook-form";
import classes from "./Mail.module.css";
import { useState } from "react";

//const isSuccess = false;

interface IFormState {
  name: string;
  email: string;
}

export function Mail() {
  const { register, handleSubmit, reset } = useForm<IFormState>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const onSubmit: SubmitHandler<IFormState> = (data) => {
    setIsLoading(true);
    fetch("http://localhost:5000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data) return;

        setIsSuccess(true);
        reset();
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <section className={classes.mail}>
      {/* <div className="container">
        <div className={classes.mail__content}> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {isSuccess ? (
          <h1>Вы подписаны на рассылку!</h1>
        ) : (
          // <div className={classes.success}>Данные отправлены</div>
          <>
            <h1>Хочу получать рассылку!</h1>
            <input type="name" placeholder="Имя" {...register("name")} />
            <input type="email" placeholder="E-mail" {...register("email")} />
            <button disabled={isLoading}>
              {isLoading ? "Загрузка....." : "Введите данные"}
            </button>
          </>
        )}
      </form>
      {/* </div>
      </div> */}
    </section>
  );
}

//import Avatar_cat from "./Avatar_cat.png";
{
  /* <div>
        <div
          className={classes.item}
          // style={{ backgroundImage: "url(/fon.jpg)" }}
        >
          <div
            className={classes.image}
            // style={{ border: "1px solid #fff"}}
          >
            {/* <img
              //src="/Avatar_cat.png"
              alt=""
            /> */
}
{
  /*    <div className={classes.info}>
              <h2>Hallo!</h2>
              <p>Hallo!</p>
              <button>Hallo!</button>
            </div>
          </div>
        </div>
      </div> */
}
