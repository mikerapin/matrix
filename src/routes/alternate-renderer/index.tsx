import { h } from 'preact';
import style from './style.css';
import { useColumns } from '../../hooks/resize';
import { Column } from '../../components/Column/Column';
const AlternateRenderer = () => {
  const columns = useColumns();

  const getColumns = () => {
    const columnDom = [];
    for (let i = 0; i < columns; i++) {
      columnDom.push(<Column key={`column${i}`} useCss={true} />);
    }
    return columnDom;
  };

  return <div class={style.home}>{getColumns()}</div>;
};

export default AlternateRenderer;
