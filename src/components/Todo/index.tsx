import { TodoType } from '../../interfaces';
import styles from './styles.module.scss';
import { useState } from 'react';

export function Todo({ id, content, removeTodo, toggleTodoChecked }: TodoType) {

  const [ check, setCheck ] = useState(true);

  const handleCheckTodo = () => {
    setCheck(prev => !prev);
    toggleTodoChecked(id, check);
  }

  return (
    <li key={id}>
      <div className={styles.inputContainer}> 
        <input 
          onChange={handleCheckTodo}
          type="checkbox"
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
