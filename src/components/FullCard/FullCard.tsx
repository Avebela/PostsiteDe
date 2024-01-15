import { useState } from "react";
import { Navigate } from "react-router-dom";
import classes from "./FullCard.module.css";
import {
  useGetCardByIdQuery,
  useUpdateCardMutation,
  useDeleteCardMutation,
} from "../../services/cards";
import { Link } from "react-router-dom";
import { FC } from "react";
import { useParams } from "react-router-dom";

import { EditablePostName } from "../Form/EditForm/EditForm";

export const FullCard: FC = () => {
  const { id } = useParams();

  const [isEditing, setIsEditing] = useState(false);
  const {
    data: card,
    isLoading,
    isFetching,
    isError,
  } = useGetCardByIdQuery(id);

  const [updateCard, { isLoading: isUpdating }] = useUpdateCardMutation();
  const [deleteCard, { isLoading: isDeleting }] = useDeleteCardMutation();

  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    //console.log({ error });
    return <div>Error</div>;
  }

  if (!card) {
    return (
      <div>
        <Navigate to="/cards" />
      </div>
    );
  }
  return (
    <div className={classes.post_wrap}>
      {isEditing ? (
        <EditablePostName
          formData={card}
          // title={card.title}
          // onUpdate={(title: string) =>
          //   updateCard({ id, title })
          //  {title,
          //   description,
          //  img,
          //  story }
          onUpdate={(card) =>
            updateCard(card).then(() => {
              setIsEditing(false);
            })
          }
          onCancel={() => setIsEditing(false)}
          isLoading={isUpdating}
        />
      ) : (
        <div className={classes.post_item}>
          <div className={classes.item_content}>
            {/* <img src={card.img} alt={card.title} /> */}
            <div className={classes.item_body}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <p>_____________________</p>
              <p>{card.story}</p>

              <div className={classes.item_footer}>
                <div className={classes.link}>
                  {/* <span>Подробнее</span> */}
                  <button
                    onClick={() => setIsEditing(true)}
                    disabled={isDeleting || isUpdating}
                  >
                    {isUpdating ? "Updating..." : "Edit"}
                  </button>
                  <button onClick={() => deleteCard(id)} disabled={isDeleting}>
                    {isDeleting ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
