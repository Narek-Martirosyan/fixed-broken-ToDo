import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState('');

  const handleSubmit = (e, value) => {
    e.preventDefault();
    if (value.trim()) {
      setTodos([
        ...todos,
        {
          id: todos.length ? todos[todos.length - 1].id + 1 : 0,
          label: value,
          checked: false,
        },
      ]);
      setTask('');
    }
  };

  return (
    <form className="todo-form" onSubmit={(e) => handleSubmit(e, e.target[0].value)}>
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">
        Add task
      </button>
    </form>
  );
};
