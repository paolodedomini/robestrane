import { useLottie, useLottieInteractivity } from "lottie-react";
import letteratura from "../../../public/data/letteratura.json";
import cinema from "../../../public/data/cinema.json";
import musica from "../../../public/data/musica.json";
import games from "../../../public/data/games.json";
import animationB from "../../../public/data/animationBackground.json";
const style = {
  width: "100%",
  height: "100%",
  zIndex: -1,
  top: 0,
  left: 0,
};

const data = [
  {
    id: "Letteratura",
    data: letteratura,
  },
  {
    id: "Cinema",
    data: cinema,
  },
  {
    id: "Musica",
    data: musica,
  },
  {
    id: "Games",
    data: games,
  },
];

const PlaySegmentsOnHover = ({ type }: { type: string | null }) => {
  const animationData = data.find((item) => item.id === type);

  const options = {
    animationData: animationData?.data || animationB,
    loop: false,
    autoplay: true,
  };
  const { View } = useLottie(options, style);
  return View;
};

export default PlaySegmentsOnHover;
