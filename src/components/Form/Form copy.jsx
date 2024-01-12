import React, { useState } from "react";
import classes from "./Form.module.css";
import { useAddCardMutation } from "../../services/cards/index.js";
import useInput from "../../hooks/useInput.jsx";
//Form: React.FC
export const Form = () => {
  const title = useInput("");
  const description = useInput("");
  const img = useInput("");
  const story = useInput("");

  // const [formData, setFormData] = useState({
  //   title: "1",
  //   description: "1",
  //   img: "1",
  //   story: "1",
  // });
  const formData = {
    title,
    description,
    img,
    story,
  };

  // console.log(formData);

  const [fetchAddCard] = useAddCardMutation();

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   console.log(name);

  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  // e: React.FormEvent<HTMLFormElement>
  const handleSubmit = (e) => {
    e.preventDefault;
    //fetchAddCard(formData);
    // setFormData({
    //   title: "2",
    //   description: "2",
    //   img: "2",
    //   story: "2",
    // });
  };

  return (
    <>
      <div>
        <input {...title} type="text" placeholder="title" />
        <input {...description} type="text" placeholder="description" />
        <button
          onClick={() => {
            console.log(title.value, description.value);
          }}
        >
          Click
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Имя героя"
          //  value={formData.title}
          // onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Описание"
          //  value={formData.description}
          // onChange={handleChange}
        />

        <textarea
          name="story"
          placeholder="История о персонаже"
          // value={formData.story}
          //  onChange={handleChange}
        />

        <input
          type="text"
          name="img"
          placeholder="Ссылка на изображение"
          // //   value={formData.img}
          //  onChange={handleChange}
        />

        <button type="submit">Отправить</button>
      </form>
    </>
  );
};
