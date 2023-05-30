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
