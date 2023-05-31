import { ReactNode } from "react";

export interface TodoType {
  key: string;
  content: string;
  removeTodo: (id: string) => void;
  toggleTodoChecked: (id: string, completed: boolean) => void;
  id: string;
}

export interface ITodoType {
  content: string;
  id: string;
  completed: boolean;
}

export interface ProviderProps {
  children: ReactNode;
}

export interface FilterButtonsProps {
  showActiveTodos: () => void;
  filter: string;
  setFilter: (filter: string) => void;
}
