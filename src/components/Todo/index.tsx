import styles from './styles.module.scss';
import { useState } from 'react';

interface TodoType {
  key: string;
  id: string;
  content: string;
  removeTodos: (id: string) => void;
}

export function Todo({ id, content, removeTodos }: TodoType) {

  const [ check, setCheck ] = useState(false);

  const handleCheckTodo = () => {
    setCheck(!check);
  }

  return (
    <li key={id}>
      <div className={styles.inputContainer}> 
        <input 
          onChange={handleCheckTodo}
          onClick={handleCheckTodo} 
          type="radio" 
          checked={check ? true : false}
        />
        <span>{content}</span>
      </div>
      <button onClick={() => removeTodos(id)} className={styles.buttonRemove}>
        <img src="/assets/icon-cross.svg" alt="Remove" />
      </button>
    </li>
  )
}
