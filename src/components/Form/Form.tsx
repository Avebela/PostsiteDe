import React, { useState } from "react";
import classes from "./Form.module.css";
import { useAddCardMutation } from "../../services/cards/index.js";
import { Navigate } from "react-router-dom";
export const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    img: "",
    story: "",
  });

  const [fetchAddCard] = useAddCardMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    fetchAddCard(formData);
    setFormData({
      title: "",
      description: "",
      img: "",
      story: "",
    });
  };

  const handleCancel = () => {
    return (
      <div>
        <Navigate to="/cards" />
      </div>
    );
  };
  return (
    <section className={classes.newform}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Имя героя"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Описание"
          value={formData.description}
          onChange={handleChange}
        />

        <textarea
          name="story"
          placeholder="История о персонаже"
          value={formData.story}
          onChange={handleChange}
        />

        <input
          type="text"
          name="img"
          placeholder="Ссылка на изображение"
          value={formData.img}
          onChange={() => handleCancel()}
        />

        <button type="submit">Сохранить</button>

        <button onClick={handleCancel}>Отменить</button>
      </form>
    </section>
  );
};
