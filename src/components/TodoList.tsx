import React from 'react';
import TodoItem from './TodoItem';

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  return (
    <ul className="mt-4 divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;