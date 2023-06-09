import { h } from 'preact';
import style from './style.css';
import { useColumns } from '../../hooks/resize';
import { Column } from '../../components/Column/Column';

const Renderer = () => {
  const columns = useColumns();

  const getColumns = () => {
    const columnDom = [];
    for (let i = 0; i < columns; i++) {
      columnDom.push(<Column key={`column${i}`} />);
    }
    return columnDom;
  };

  return <div class={style.home}>{getColumns()}</div>;
};

export default Renderer;
