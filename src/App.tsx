import { Header } from './components/Header'
import { List } from './components/List'
import './global.scss';

import styles from '../src/App.module.scss';
import { FilterContextProvider } from './contexts/FilterContext';

function App() {

  return (
    <FilterContextProvider>
      <Header />
      <main className={styles.mainContainer}>
        <List />
      </main>
    </FilterContextProvider>
  )
}

export default App
