import styles from './styles.module.scss';

export function FilterButtons() {

  const showOnlyActiveTodos = () => {
    
  }

  return (
    <div className={styles.filterTodos}>
      <button className={styles.filterButtons}>All</button>
      <button 
        className={styles.filterButtons}
        onClick={showOnlyActiveTodos}
      >
        Active
      </button>
      <button className={styles.filterButtons}>Completed</button> 
    </div>
  )


}
