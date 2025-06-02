import React from 'react';

type TodoItemProps = {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

const TodoItem = ({ id, text, completed, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li className="flex items-center justify-between p-3 border-b border-gray-200">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          className="mr-3 h-5 w-5"
        />
        <span className={`${completed ? 'line-through text-gray-400' : ''}`}>
          {text}
        </span>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;