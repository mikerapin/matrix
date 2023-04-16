import { h } from "preact";
import style from "./style.css";
import { randomCharacter } from "./random";
import { Character } from "./Character/Character";

const Home = () => {
  return (
    <div class={style.home}>
      <Character />
    </div>
  );
};

export default Home;
