import { Cards } from "../components/Cards/Cards";

import { Form } from "../components/Form/Form";
import { FullCard } from "../components/FullCard/FullCard";
import { Brands } from "../components/Brands/Brands";
import { Header } from "../components/Header/Header";
import { Promo } from "../components/Promo/Promo";

import { Video } from "../components/Video/Video";
import { Footer } from "../components/Footer/Footer";
import { Mail } from "../components/Mail/Mail";
import { Arrivals } from "../components/Arrivals/Arrivals";

//import { EditForm } from "../components/Form/EditForm";

import { ShowVideo } from "../components/Video/ShowVideo/ShowVideo";

export const Homepage = () => {
  return (
    <>
      <Promo />
      <Brands />
      <Cards />
      <Video />
      <Arrivals />
      <Mail />
    </>
  );
};
