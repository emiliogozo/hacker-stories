import React from 'react';
import { ReactComponent as Check } from './check.svg';
import styles from './style.module.css';
import { ItemProps, ListProps } from './types';

const List = React.memo(
  ({ list, onRemoveItem }: ListProps) => (
  <>
    {list.map(item => (
      <Item
        key={item.objectID}
        item={item}
        onRemoveItem={onRemoveItem}
      />
    ))}
  </>
));

const Item = ({ item, onRemoveItem }: ItemProps) => (
  <div className={styles.item}>
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

