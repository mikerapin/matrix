import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { random, randomCharacter, randomMax } from '../../helpers/random';
import styles from './character.css';
import classNames from 'classnames';

interface CharacterProps {
  baseCharacter: string;
  clearIndex: number;
  highlightIndex: number;
  index: number;
}

export const Character = ({
  baseCharacter,
  clearIndex,
  highlightIndex,
  index,
}: CharacterProps) => {
  const [character, setCharacter] = useState<string>(baseCharacter);
  const [count, setCount] = useState(0);
  const [hasPrinted, setHasPrinted] = useState(false);

  useEffect(() => {
    let interval;
    if (hasPrinted) {
      interval = setInterval(() => {
        setCharacter(randomCharacter());
      }, random(250, 5000));
    }

    return () => {
      clearInterval(interval);
    };
  }, [hasPrinted]);

  useEffect(() => {
    setCount(count + 1);
  }, [character]);

  useEffect(() => {
    if (index === highlightIndex) {
      setHasPrinted(true);
    }
  }, [highlightIndex]);

  useEffect(() => {
    if (index === clearIndex) {
      setHasPrinted(false);
    }
  }, [clearIndex]);

  const renderCharacter = () => {
    if (hasPrinted || index === highlightIndex) {
      return character;
    }
  };

  return (
    <span
      className={classNames(styles.characterJs, {
        [styles.highlight]: highlightIndex === index,
        [styles.fadeOut]: clearIndex === index,
      })}
      data-count={count}
      data-highlight={highlightIndex}
      data-index={index}
    >
      {renderCharacter()}
    </span>
  );
};
