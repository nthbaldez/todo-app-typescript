import styles from './styles.module.scss';

import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Todo } from '../Todo';
import { FilterButtons } from '../FilterButtons/FilterButton';

import { ITodoType } from '../../interfaces';
import { v4 as uuidV4 } from 'uuid';

export function List() {

  const [ todos, setTodos ] = useState<ITodoType[]>([]);
  const [ todo, setTodo ] = useState<string>('');
  const [ completedTodos, setCompletedTodos ] = useState(false);
  const [ showActive, setShowActive ] = useState(true);
  const [ showAll, setShowAll ] = useState(true);

  const handleStateTodoChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTodo(event.currentTarget.value);
  }

  const addTodoToTheList = (): void => {

    if (todo == '') {
      alert("Please, fill the form.")
      return;
    } 

    const newTodo = {
      content: todo,
      id: uuidV4(),
      completed: false
    }

    setTodo("");
    setTodos([...todos, newTodo])
  }

  const removeTodo = (id: string): void => {

    const removedTodo = todos.findIndex(todo => todo.id == id);

    const updatedTodos = [...todos];
    updatedTodos.splice(removedTodo, 1);

    setTodos(updatedTodos);

  }

  const handleCheckCompleted = ( content: string, id: string, completed: boolean ): void => {
    const findTodo = todos.find(todo => todo.content == content);

    const todoChecked = {
      id,
      content,
      completed
    };

    const filteredTodosUncheckeds = todos.filter(todo => todo != findTodo);
    setTodos([...filteredTodosUncheckeds, todoChecked]);
  }

  const removeCompletedTodos = (): void => {

    const filteredActiveTodos = todos.filter(todo => todo.completed == false);

    setTodos(filteredActiveTodos);
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      addTodoToTheList();
    }
  }

  const showCompletedTodos = () => {
    setCompletedTodos(true);
    setShowActive(false);
  }

  const showAllTodos = () => {
    setShowAll(true);
  }

  const showAllActiveTodos = () => {
    setShowActive(true);
    setCompletedTodos(false);
  }

  return (
    <main className={styles.listContainer}>
      <h1>TODO</h1>

      <div className={styles.userInput}>
        <button 
          onClick={addTodoToTheList} 
          type="button"
        >
          Add Todo
        </button>

        <input
          onKeyDown={(e) => handleKeyPress(e)}
          onChange={handleStateTodoChange}  
          type="text" 
          id="todo" 
          name="todo" 
          placeholder="What's going on today?"
          value={todo}
        />
      </div>

      <ul>
        {
          todos.map(({ id, content, completed }) => {
            if (completed && completedTodos) {
              return (
                <Todo 
                  key={id}
                  content={content} 
                  removeTodo={() => removeTodo(id)}
                  handleCheck={handleCheckCompleted}
                  id={id}
                />
              )
            } else if (!completed && showActive) {
              return (
                <Todo 
                  key={id}
                  content={content} 
                  removeTodo={() => removeTodo(id)}
                  handleCheck={handleCheckCompleted}
                  id={id}
                />
              )
            } else if (showAll) {
              return (
                <Todo 
                  key={id}
                  content={content} 
                  removeTodo={() => removeTodo(id)}
                  handleCheck={handleCheckCompleted}
                  id={id}
                />
              )
            } else {
              return null;
            }
          })
        }
      </ul>
      
      <footer>
        <p>{todos.length} items</p>
        <FilterButtons showCompleted={showCompletedTodos} showAllTodos={showAllTodos} showAllActiveTodos={showAllActiveTodos}/>
        <button
          onClick={removeCompletedTodos}
        >
          Clear Completed
        </button>
      </footer>
    </main>
  )
}
