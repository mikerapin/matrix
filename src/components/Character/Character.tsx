import { h, RefObject } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { random, randomCharacter, randomMax } from '../../helpers/random';
import styles from './character.css';
import classNames from 'classnames';

const maxCount = randomMax();

interface CharacterProps {
  baseCharacter: string;
  highlight: number;
  index: number;
}

export const Character = ({
  baseCharacter,
  highlight,
  index,
}: CharacterProps) => {
  const [character, setCharacter] = useState<string>(baseCharacter);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timeout;
    const interval = setInterval(() => {
      setCharacter(randomCharacter());
      setCount(count + 1);
    }, random(250, 5000));

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);
  if (count > maxCount) {
    return null;
  }
  console.log(highlight);

  return (
    <span
      className={classNames(styles.character, {
        [styles.highlight]: highlight === index,
      })}
    >
      {character}
    </span>
  );
};
