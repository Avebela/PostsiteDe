// import classes from "./Cards.module.css";
import {
  useGetCardsQuery,
  //  useLazyGetCardsQuery
} from "../../services/cards";
import { Card } from "../Card/Card";
import { Form } from "../Form/Form";

export const Cards = () => {
  const { data = [], isError, isLoading } = useGetCardsQuery();
  //skip: false
  console.log(data);
  // const tr = useLazyGetCardsQuery({});
  // console.log(tr);
  // const handleClick = () => {
  //   trigger(null);
  //   console.log(data);
  // };
  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center">{isError}</p>;
  return (
    <div>
      <Form />
      {/* // <button onClick={handleClick}></button> */}
      Карточки
      {/* {data.map((card) => {
        <li key={card.id}>  {card.title}</li>

     })} */}
      {data?.map((card) => (
        <Card key={card.id} {...card} />
        // <li
        //   key={card.id}
        //   className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
        // >
        //   <Card {...card} />
        // </li>
      ))}
    </div>
  );
};

// const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
// // Individual hooks are also accessible under the generated endpoints:
// // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

// return (
//   <div className="App">
//     {error ? (
//       <>Oh no, there was an error</>
//     ) : isLoading ? (
//       <>Loading...</>
//     ) : data ? (
//       <>
//         <h3>{data.species.name}</h3>
//         <img src={data.sprites.front_shiny} alt={data.species.name} />
//       </>
//     ) : null}
//   </div>
