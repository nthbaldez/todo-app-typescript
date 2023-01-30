import styles from './styles.module.scss';

import { ChangeEvent, useState } from 'react';
import { Todo } from '../Todo';
import { FilterButton } from '../FilterButtons/FilterButton';
import { v4 as uuidV4 } from 'uuid';


interface ITodoType {
  content: string;
  id: string;
  completed: boolean;
}


export function List() {

  const [ todos, setTodos ] = useState<ITodoType[]>([]);
  const [ todo, setTodo ] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.currentTarget.value !== "" && event.currentTarget.value !== null) {
      setTodo(event.currentTarget.value);
    }
  }

  const addTodo = (): void => {

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


  return (
    <div className={styles.listContainer}>
      <h1>TODO</h1>

      <div className={styles.userInput}>
        <button onClick={addTodo} type="button">Add Todo</button>
        <input onChange={handleChange} type="text" id="todo" name="todo" placeholder="What's going on today?" value={todo}/>
      </div>

      <ul>
        {
          todos.map(({ id, content }) => 
            <Todo 
              key={id}
              content={content} 
              removeTodos={() => removeTodo(id)} 
              id={id}
            />
          )
        }
      </ul>
      
      <footer>
        <p>{todos.length} items</p>

          <FilterButton />

        <p>Clear Completed</p>
      </footer>
    </div>
  )
}
