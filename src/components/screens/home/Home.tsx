import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Home.module.css";

const isSuccess = false;

interface IFormState {
  name: string;
  email: string;
}

function Home() {
  const { register, handleSubmit } = useForm<IFormState>();
  const onSubmit: SubmitHandler<IFormState> = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isSuccess ? (
          <div className={styles.success}>Данные отправлены</div>
        ) : (
          <>
            <h1>Hallo!</h1>
            <input type="name" placeholder="Имя" {...register("name")} />
            <input type="email" placeholder="E-mail" {...register("email")} />
            <button>Введите данные</button>
          </>
        )}
      </form>
    </div>
  );
}

export default Home;

//import Avatar_cat from "./Avatar_cat.png";
{
  /* <div>
        <div
          className={styles.item}
          // style={{ backgroundImage: "url(/fon.jpg)" }}
        >
          <div
            className={styles.image}
            // style={{ border: "1px solid #fff"}}
          >
            {/* <img
              //src="/Avatar_cat.png"
              alt=""
            /> */
}
{
  /*    <div className={styles.info}>
              <h2>Hallo!</h2>
              <p>Hallo!</p>
              <button>Hallo!</button>
            </div>
          </div>
        </div>
      </div> */
}
