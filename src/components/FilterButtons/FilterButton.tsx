import { ButtonsProps } from '../../interfaces';
import styles from './styles.module.scss';

export function FilterButtons( { showCompleted, showAllTodos, showAllActiveTodos }: ButtonsProps  ) {

  const handleShowCompletedTodos = () => {
    showCompleted();
  }

  const handleShowAllTodos = () => {
    showAllTodos();
  }

  const handleShowAllActiveTodos = () => {
    showAllActiveTodos();
  }

  return (
    <div className={styles.filterTodos}>
      <button 
        className={styles.filterButtons}
        onClick={handleShowAllTodos}
      >
        All
      </button>
      <button 
        className={styles.filterButtons}
        onClick={handleShowAllActiveTodos}
      >
        Active
      </button>
      <button 
        onClick={handleShowCompletedTodos}
        className={styles.filterButtons}
      >
        Completed
      </button> 
    </div>
  )


}
