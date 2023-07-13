import { TodoType } from '../../interfaces';
import styles from './styles.module.scss';
import { useState } from 'react';

export function Todo({ id, content, removeTodo, toggleTodoChecked }: TodoType) {
  
  const [ check, setCheck ] = useState(false);

  const handleCheckTodo = () => {
    toggleTodoChecked(id, !check);
  }

  return (
    <li key={id}>
      <div className={styles.inputContainer}> 
        <input 
          onClick={handleCheckTodo}
          onChange={() => setCheck(!check)}
          type="checkbox"
          id="checkbox"
        />
        <span>{content}</span>
      </div>
      <button 
        onClick={() => removeTodo(id)} className={styles.buttonRemove}>
        <img src="/assets/icon-cross.svg" alt="Remove" />
      </button>
    </li>
  )
}
