import { TodoType } from '../../interfaces';
import styles from './styles.module.scss';
import { useState } from 'react';

export function Todo({ id, content, removeTodo, handleCheck }: TodoType) {

  const [ check, setCheck ] = useState(true);

  const handleCheckTodo = () => {
    setCheck(!check);
    
    handleCheck(content, id, check);
    console.log(check)
  }

  return (
    <li key={id}>
      <div className={styles.inputContainer}> 
        <input 
          onChange={handleCheckTodo}
          type="checkbox"
          checked={!check}
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
