import _ from 'lodash';
import { TodoItem } from './TodoItem';

export const getTodoItems = (n: number): TodoItem[] => {
  return _.range(n).map(i => ({
    title: `title ${i}`,
    content: `content ${i} `.repeat(10),
    priority: i % 3,
    resolved: !(i % 7),
  }));
}
