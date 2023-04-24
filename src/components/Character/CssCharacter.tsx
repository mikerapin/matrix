import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { allCharacters, random, randomMax } from '../../helpers/random';
import styles from './character.css';
import classNames from 'classnames';

const maxCount = randomMax();
const allChars = allCharacters();
const allCharsSize = allChars.length;

const getRandomCssYCoordinate = () => {
  return random(0, allCharsSize - 1) * 16;
};

interface CssCharacterProps {
  index: number;
  highlightIndex: number;
  clearIndex: number;
}

export const CssCharacter = ({
  highlightIndex,
  clearIndex,
  index,
}: CssCharacterProps) => {
  const [yCoord, setYCoord] = useState<number>(getRandomCssYCoordinate());
  const [count, setCount] = useState(0);
  const [hasPrinted, setHasPrinted] = useState(false);

  useEffect(() => {
    let timeout;
    const interval = setInterval(() => {
      setYCoord(getRandomCssYCoordinate());
    }, random(100, random(250, 5000)));

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    setCount(count + 1);
  }, [yCoord]);

  useEffect(() => {
    if (index === highlightIndex) {
      setHasPrinted(true);
    }
  }, [highlightIndex, index]);

  useEffect(() => {
    if (index === clearIndex) {
      setHasPrinted(false);
    }
  }, [clearIndex, index]);

  const renderCharacter = () => {
    if (hasPrinted || index === highlightIndex) {
      return allChars;
    }
  };

  return (
    <div
      className={classNames(styles.characterContainer)}
      data-highlight={highlightIndex}
      data-clear={clearIndex}
      data-index={index}
    >
      <div
        className={classNames(styles.characterCss, {
          [styles.highlight]: highlightIndex === index,
          [styles.fadeOut]: clearIndex === index,
        })}
        style={{ top: `-${yCoord}px` }}
      >
        {renderCharacter()}
      </div>
    </div>
  );
};
