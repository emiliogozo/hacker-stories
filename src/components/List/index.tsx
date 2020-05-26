import { sortBy } from 'lodash';
import React from 'react';
import { Stories } from '../../App.types';
import { ReactComponent as Check } from './check.svg';
import styles from './style.module.css';
import { ItemProps, ListProps } from './types';

const SORTS: Record<string, ((list: Stories) => Stories)> = {
  NONE: (list: Stories) => list,
  TITLE: (list: Stories) => sortBy(list, 'title'),
  AUTHOR: (list: Stories) => sortBy(list, 'author'),
  COMMENT: (list: Stories) => sortBy(list, 'num_comments').reverse(),
  POINT: (list: Stories) => sortBy(list, 'points').reverse(),
};

const List = React.memo(
  ({ list, onRemoveItem }: ListProps) => {
    const [sort, setSort] = React.useState({
      sortKey: 'NONE',
      isReverse: false,
    });

    const handleSort = (sortKey: string) => {
      const isReverse = sort.sortKey === sortKey && !sort.isReverse;
      setSort({ sortKey: sortKey, isReverse: isReverse });
    };

    const sortFunction = SORTS[sort.sortKey];
    const sortedList = sort.isReverse
      ? sortFunction(list).reverse()
      : sortFunction(list);

    return (
      <div>
        <div style={{ display: 'flex' }}>
          <span style={{ width: '40%' }}>
            <button type="button" onClick={() => handleSort('TITLE')}>Title</button>
          </span>
          <span style={{ width: '30%' }}>
            <button type="button" onClick={() => handleSort('AUTHOR')}>Author</button>
          </span>
          <span style={{ width: '10%' }}>
            <button type="button" onClick={() => handleSort('COMMENT')}>Comments</button>
          </span>
          <span style={{ width: '10%' }}>
            <button type="button" onClick={() => handleSort('POINT')}>Points</button>
          </span>
          <span style={{ width: '10%' }}>Actions</span>
        </div>

        {sortedList.map(item => (
          <Item
            key={item.objectID}
            item={item}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </div>
    );
});

const Item = ({ item, onRemoveItem }: ItemProps) => (
  <div style={{ display: 'flex' }}>
    <span style={{ width: '40%' }}>
      <a href={item.url}>{item.title}</a>
    </span>
    <span style={{ width: '30%' }}>{item.author}</span>
    <span style={{ width: '10%' }}>{item.num_comments}</span>
    <span style={{ width: '10%' }}>{item.points}</span>
    <span style={{ width: '10%' }}>
      <button
        type="button"
        className={`${styles.button} ${styles.buttonSmall}`}
        onClick={() => onRemoveItem(item)}
      >
        <Check height="18px" width="18px" />
      </button>
    </span>
  </div>
);

export default List
export { Item, List };

