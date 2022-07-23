import * as React from 'react';
import { Checkbox } from '../checkbox';
import { TodosContext } from '../../todo-context';
import './todo-list.scss';

export const TodoList = () => {
  const { todos, setTodos } = React.useContext(TodosContext);

  const handleDelete = (id) => {
    todos.forEach((todo, index) => {
      if (todo.id === id) {
        todos.splice(index, 1);
        setTodos([...todos]);
      }
    });
  };

  const toggleCheck = (index, e) => {
    todos[index].checked = e.target.checked ? e.target.checked
    : !todos[index].checked;
    setTodos([...todos]);
  };

  const handleKeyUp = (e, index) => {
    if (e.keyCode === 13) {
      toggleCheck(index, e);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem, index) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={(e) => toggleCheck(index, e)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">Looks like you&apos;re absolutely free today!</div>
      )}
    </div>
  );
};
