export const saveTodos = (todos: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const loadTodos = (): Todo[] => {
  if (typeof window === 'undefined') return [];
  const saved = localStorage.getItem('todos');
  return saved ? JSON.parse(saved) : [];
};

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};