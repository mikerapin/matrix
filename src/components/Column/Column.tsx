import { h } from 'preact';
import styles from './column.css';
import { random, randomCharacter } from '../../helpers/random';
import { Character } from '../Character/Character';
import { useRows } from '../../hooks/resize';
import { CssCharacter } from '../CssCharacter/CssCharacter';
import { useEffect, useState } from 'preact/hooks';

export const Column = ({ useCss }: { useCss?: boolean }) => {
  const rows = useRows();
  const [highlight, setHighlight] = useState(0);

  useEffect(() => {
    let timeout;
    const interval = setInterval(() => {
      const hNUm = random(0, rows);
      setHighlight(hNUm);
    }, random(500, random(4000, 10000)));

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const renderCharacters = () => {
    const characters = [];
    for (let i = 0; i < rows; i++) {
      if (useCss) {
        characters.push(
          <CssCharacter key={i} index={i} highlight={highlight} />,
        );
      } else {
        characters.push(
          <Character
            key={i}
            baseCharacter={randomCharacter()}
            index={i}
            highlight={highlight}
          />,
        );
      }
    }
    return characters;
  };

  return <div className={styles.column}>{renderCharacters()}</div>;
};
