import { h } from "preact";
import styles from "./column.css";
import { randomCharacter } from "../../helpers/random";
import { Character } from "../Character/Character";

export const Column = () => {
  return (
    <div className={styles.column}>
      <Character baseCharacter={randomCharacter()} />
    </div>
  );
};
