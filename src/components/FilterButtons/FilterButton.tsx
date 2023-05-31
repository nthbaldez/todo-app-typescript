import { FilterButtonsProps } from '../../interfaces';
import styles from './styles.module.scss';

export function FilterButtons({ setFilter }: FilterButtonsProps) {

  return (
    <div className={styles.filterTodos}>
      <button 
        className={styles.filterButtons}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button 
        className={styles.filterButtons}
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button 
        className={styles.filterButtons}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button> 
    </div>
  )


}
