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

import { EditablePostName } from "./EditForm/EditForm";

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
    <div>
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
        <div className={classes.fullcard}>
          <form>
            <h1>{card.title}</h1>
            <hr />
            <p>{card.description}</p>
            <hr />
            <p>{card.story}</p>
            <hr />
            {/* <div className={classes.item_footer}> */}
            {/* <div className={classes.link}> */}
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
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
          </form>
        </div>
      )}
    </div>
  );
};
