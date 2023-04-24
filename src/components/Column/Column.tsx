import { h } from 'preact';
import styles from './column.css';
import { randomCharacter } from '../../helpers/random';
import { Character } from '../Character/Character';
import { useRows } from '../../hooks/resize';
import {CssCharacter} from '../CssCharacter/CssCharacter';

export const Column = ({useCss}: {useCss?: boolean}) => {
  const rows = useRows();

  const renderCharacters = () => {
    const characters = [];
    for (let i = 0; i < rows; i++) {
      if (useCss) {
        characters.push(<CssCharacter />);
      } else {
        characters.push(<Character baseCharacter={randomCharacter()}/>);
      }
    }
    return characters;
  };

  return (
    <div className={styles.column}>
      {renderCharacters()}
    </div>
  );
};
