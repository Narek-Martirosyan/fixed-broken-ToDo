import * as React from 'react';
import './todo-results.scss';
import { TodosContext } from '../../todo-context';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);
  let count = 0;
  const calculateChecked = () => {
    todos.forEach((todo) => {
      if (todo.checked) {
        count += 1;
      }
    });
    return count;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
      /
      {todos.length}
    </div>
  );
};
