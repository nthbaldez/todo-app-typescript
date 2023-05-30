import { ReactNode } from "react";

export interface TodoType {
  key: string;
  content: string;
  removeTodo: (id: string) => void;
  handleCheck: ( content: string, id: string, completed: boolean ) => void;
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

export interface ButtonsProps {
  showCompleted: () => void;
  showAllTodos: () => void;
  showAllActiveTodos: () => void;
}
