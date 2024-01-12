import React, { useState, useEffect } from "react";
import classes from "./Form.module.css";
import { useAddCardMutation } from "../../services/cards/index.js";
import { useParams } from "react-router-dom";
import {
  useGetCardByIdQuery,
  useUpdateCardMutation,
} from "../../services/cards";

export const EditForm: React.FC = () => {
  const { id } = useParams();

  const [updateCard, { isLoading: isUpdating }] = useUpdateCardMutation();

  //const [card, setCard] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    img: "",
    story: "",

    // title: { title } || "",
    // description: { description } || "",
    // img: { img } || "",
    // story: { story } || "",
  });

  const { data, isLoading } = useGetCardByIdQuery({ id });
  useEffect(() => {
    // setCard(data);
    setFormData(data);
  }, []);

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
    updateCard(formData);
    setFormData(formData);
  };

  return (
    <>
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
          onChange={handleChange}
        />

        <button type="submit">Изменить</button>
      </form>
    </>
  );
};
