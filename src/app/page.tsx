'use client';

import { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import AddButton from '../components/AddButton';
import TodoList from '../components/TodoList';
import { saveTodos, loadTodos } from '../utils/storage';

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export default function Home() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  // Load todos from localStorage on initial render
  useEffect(() => {
    setTodos(loadTodos());
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = () => {
    if (input.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput('');
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-center mb-6">TODO App</h1>

        <div className="flex gap-2 mb-6">
          <InputField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What needs to be done?"
          />
          <AddButton
            onClick={addTodo}
            disabled={input.trim() === ''}
          >
            Add
          </AddButton>
        </div>

        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
    </main>
  );
}