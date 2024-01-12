import { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  useGetCardByIdQuery,
  useUpdateCardMutation,
  useDeleteCardMutation,
} from "../../services/cards";

import { FC } from "react";
import { useParams } from "react-router-dom";

import { EditablePostName } from "../../components/Form/EditForm";

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
    <>
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
        <>
          <div>
            <img src={card.img} alt={card.title} />
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <h3>История</h3>
            <p>{card.story}</p>
          </div>
          <div />
          <div>
            <div>
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
        </>
      )}
    </>
  );
};
