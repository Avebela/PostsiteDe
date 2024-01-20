export interface Card {
  id: string;
  title: string;
  description: string;
  img: string;
  story: string;
  updatedAt: string;
  createdAt: Date;
}

export type CardsResponse = Card[];

export type NewCard = {
  title: string;
  description: string;
  img: string;
  story: string;
  _id?: string;
};
