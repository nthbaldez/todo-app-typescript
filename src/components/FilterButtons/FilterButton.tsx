import { ButtonsProps } from '../../interfaces';
import styles from './styles.module.scss';

export function FilterButtons( { executeFilter }: ButtonsProps  ) {

  const handleShowCompletedTodos = () => {
    executeFilter('completed');
  }

  const handleShowAllTodos = () => {
    executeFilter('all');
  }

  const handleShowAllActiveTodos = () => {
    executeFilter('active');
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
