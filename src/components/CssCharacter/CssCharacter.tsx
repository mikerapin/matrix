import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import {allCharacters, random, randomCharacter, randomMax} from '../../helpers/random';
import styles from './character.css';
import classNames from 'classnames';

const maxCount = randomMax();
const allChars = allCharacters();
const allCharsSize = allChars.length;

const getRandomCssYCoordinate = () => {
  return random(0,allCharsSize-1) * 16;
};

export const CssCharacter = () => {
  const [yCoord, setYCoord] = useState<number>(getRandomCssYCoordinate());
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timeout;
    const interval = setInterval(() => {
      setYCoord(getRandomCssYCoordinate());
      setCount(count + 1);
    }, random(100, random(250,5000)));

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);
  if (count > maxCount) {
    return null;
  }

  return <div className={classNames(styles.characterContainer)}>
    <div className={styles.character} style={{top: `-${yCoord}px`}}>{allChars}</div>
  </div>;
};