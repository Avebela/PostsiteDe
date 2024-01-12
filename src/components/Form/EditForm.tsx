import React, { useState } from "react";
//import classes from "./Form.module.css";
//import { useAddCardMutation } from "../../services/cards/index.js";
// import { useParams } from "react-router-dom";
// import {
//   useGetCardByIdQuery,
//   useUpdateCardMutation,
//   useDeleteCardMutation,
// } from "../../services/cards";

export const EditablePostName = ({
  //title: initialName,
  formData: initialValue,
  onUpdate,
  onCancel,
  isLoading = false,
}: {
  //title: string;
  formData: { title: ""; description: ""; img: ""; story: "" };
  onUpdate: (formData: {}) => void;
  onCancel: () => void;
  isLoading?: boolean;
}) => {
 
  const [formData, setFormData] = useState(initialValue);

  // const [title, setName] = useState(initialName);

  // const handleChange = ({
  //   target: { value },
  // }: React.ChangeEvent<HTMLInputElement>) => setName(value);

  const handleUpdate = () => onUpdate(formData);
  const handleCancel = () => onCancel();

  // const { id } = useParams();
  // const [isEditing, setIsEditing] = useState(false);

  // const [updateCard, { isLoading: isUpdating }] = useUpdateCardMutation();
  // const [deleteCard, { isLoading: isDeleting }] = useDeleteCardMutation();

  //const initialValue = { title: "", description: "", img: "", story: "" };
  // //const [card, setCard] = useState(null);

  // const { data, isLoading } = useGetCardByIdQuery({ id });
  // useEffect(() => {
  //   // setCard(data);
  //   setFormData(data);
  // }, []);

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
    //   updateCard(formData);
    onUpdate(formData);
    //   setFormData(formData);
  };

  return (
    <>
      <div>
        <div>
          {/* <input
            type="text"
            onChange={handleChange}
            value={title}
            disabled={isLoading}
          /> */}
        </div>

        <div>
          <div>
            <button
              onClick={handleUpdate}
              // isLoading={isLoading}
            >
              Update
            </button>
            <button onClick={handleCancel} disabled={isLoading} />
          </div>
        </div>
      </div>

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
        // <button type="submit">Изменить</button>
      </form>
    </>
  );
};
