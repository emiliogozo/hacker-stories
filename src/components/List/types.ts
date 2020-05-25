import { Stories, Story } from '../../App.types';

export type ItemProps = {
  item: Story;
  onRemoveItem: (item: Story) => void;
};
  
export type ListProps = {
  list: Stories;
  onRemoveItem: (item: Story) => void;
};