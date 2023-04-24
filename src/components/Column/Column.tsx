import { h } from 'preact';
import styles from './column.css';
import { random, randomCharacter } from '../../helpers/random';
import { Character } from '../Character/Character';
import { useRows } from '../../hooks/resize';
import { CssCharacter } from '../Character/CssCharacter';
import { useCallback, useEffect, useState } from 'preact/hooks';

export const Column = ({ useCss }: { useCss?: boolean }) => {
  const rows = useRows();
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [clearIndex, setClearIndex] = useState(-1);

  useEffect(() => {
    let interval;

    const timeoutTime = random(0, 10000);
    const erasureTime = random(timeoutTime + 2000, timeoutTime + 10000);

    const timeout = setTimeout(() => {
      let highlightNumber = random(0, rows);
      let highlightNumberEnd = random(highlightNumber, rows);
      setHighlightIndex(highlightNumber);
      interval = setInterval(() => {
        highlightNumber = highlightNumber + 1;
        if (highlightNumberEnd === highlightNumber) {
          highlightNumber = random(0, rows);
          highlightNumberEnd = random(highlightNumber, rows);
        }
        setHighlightIndex(highlightNumber);
      }, 100);
    }, timeoutTime);

    const erase = setInterval(() => {
      let clearNumber = random(0, rows);
      setClearIndex(clearNumber);
      interval = setInterval(() => {
        clearNumber = clearNumber + 1;
        if (clearNumber === rows) {
          clearNumber = random(0, rows);
        }
        setClearIndex(clearNumber);
      }, 100);
    }, erasureTime);

    return () => {
      clearInterval(interval);
      clearInterval(erase);
      clearTimeout(timeout);
    };
  }, []);

  const renderCharacters = () => {
    const characters = [];
    for (let i = 0; i < rows; i++) {
      if (useCss) {
        characters.push(
          <CssCharacter
            key={i}
            index={i}
            highlightIndex={highlightIndex}
            clearIndex={clearIndex}
          />,
        );
      } else {
        characters.push(
          <Character
            key={i}
            baseCharacter={randomCharacter()}
            index={i}
            highlightIndex={highlightIndex}
            clearIndex={clearIndex}
          />,
        );
      }
    }
    return characters;
  };

  return <div className={styles.column}>{renderCharacters()}</div>;
};
