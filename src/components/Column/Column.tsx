import { h } from 'preact';
import styles from './column.css';
import { randomCharacter } from '../../helpers/random';
import { Character } from '../Character/Character';
import { useRows } from '../../hooks/resize';

export const Column = () => {
  const rows = useRows();

  const renderCharacters = () => {
    const characters = [];
    for (let i = 0; i < rows; i++) {
      characters.push(<Character baseCharacter={randomCharacter()} />);
    }
    return characters;
  };

  return (
    <div className={styles.column}>
      {renderCharacters()}
    </div>
  );
};
