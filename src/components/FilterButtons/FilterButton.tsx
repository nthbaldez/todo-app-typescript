import { FilterButtonsProps } from '../../interfaces';
import styles from './styles.module.scss';

export function FilterButtons({ setFilter }: FilterButtonsProps) {

  const handleActive = () => {
    setFilter('active');
  }

  const handleAll = () => {
    setFilter('all');
  }

  const handleCompleted = () => {
    setFilter('completed');
  }

  return (
    <div className={styles.filterTodos}>
      <button 
        className={styles.filterButtons}
        onClick={handleAll}
      >
        All
      </button>
      <button 
        className={styles.filterButtons}
        onClick={handleActive}
      >
        Active
      </button>
      <button 
        className={styles.filterButtons}
        onClick={handleCompleted}
      >
        Completed
      </button> 
    </div>
  )


}
