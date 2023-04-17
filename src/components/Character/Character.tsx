import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { random, randomCharacter, randomMax } from '../../helpers/random';
import styles from './character.css';
import classNames from 'classnames';

const maxCount = randomMax();

export const Character = ({ baseCharacter }: { baseCharacter: string }) => {
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

  return <span className={classNames(styles.character)}>{character}</span>;
};
