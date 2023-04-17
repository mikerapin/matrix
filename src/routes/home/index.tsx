import { h } from 'preact';
import style from './style.css';
import { useColumns } from '../../hooks/resize';
import { Column } from '../../components/Column/Column';
const Home = () => {
  const columns = useColumns();
  console.log(columns);

  const getColumns = () => {
    const columnDom = [];
    for (let i = 0; i < columns; i++) {
      columnDom.push(<Column key={`column${i}`} />);
    }
    return columnDom;
  };

  return <div class={style.home}>{getColumns()}</div>;
};

export default Home;
