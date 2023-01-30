import styles from './styles.module.scss';

export function FilterButton() {

  return (
    <div className={styles.filterTodos}>
      <p className={styles.filterButtons}>All</p>
      <p>Active</p>
      <p>Completed</p> 
    </div>
  )


}