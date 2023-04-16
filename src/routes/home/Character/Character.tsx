import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { randomCharacter } from "../random";
import styles from "./character.css";

export const Character = () => {
  const [character, setCharacter] = useState<string>(randomCharacter());

  useEffect(() => {
    const interval = setInterval(() => {
      setCharacter(randomCharacter());
    }, 1000);

    // setTimeout(() => {});

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <span className={styles.character}>{character}</span>;
};
