import { Header } from './components/Header'
import { List } from './components/List'
import './global.scss';

import styles from '../src/App.module.scss';

function App() {

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <List />
      </main>
    </> 
  )
}

export default App
