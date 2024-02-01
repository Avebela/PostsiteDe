import React, { useState } from "react";
import classes from "./Form.module.css";
import { useAddCardMutation } from "../../services/cards/index.js";
import { Navigate, useNavigate } from "react-router-dom";
export const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    img: "",
    story: "",
  });
  const navigate = useNavigate();
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault;
      await fetchAddCard(formData);
      setFormData({
        title: "",
        description: "",
        img: "",
        story: "",
      });
      navigate("/cards");
    } catch (e) {
      console.log("Ошибка"!);
    }
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
