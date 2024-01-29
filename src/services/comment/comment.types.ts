export type Comment = {
  id: string;
  title: string;
  body: string;

  userId: string;
};

export type CommentsResponse = Comment[];

export type NewComment = {
  title: string;
  body: string;

  userId: string;
  _id?: string;
};
