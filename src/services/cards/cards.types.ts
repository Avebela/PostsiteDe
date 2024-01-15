export interface Card {
  id: string;
  title: string;
  description: string;
  img: string;
  story: string;
}

export type CardsResponse = Card[];

export type NewCard = {
  title: string;
  description: string;
  img: string;
  story: string;
  _id?: string;
};
