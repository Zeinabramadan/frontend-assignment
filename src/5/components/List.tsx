import { FunctionComponent } from "react";
// Types
import { ListItem } from '../types/ListItem'
// Components
import Item from "./Item";

/*
 * The ListProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ListProps interface
 */

interface ListProps {
  items: ListItem[],
}

const List: FunctionComponent<ListProps> = ({ items }) => {
  return (
    <ul>
      {items && items.length > 0 ? (
        items.map(item => <Item key={item.id} item={item} />)
      ) : (
        // This could be another component shared over the app
        // as placeholder for *NO RESULTS FOUND*
        <li>No items found</li>
      )}
    </ul>
  );
};

export default List;
