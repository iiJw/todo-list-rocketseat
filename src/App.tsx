import { useState } from 'react'
import Header from './components/Header'
import ManageTasks from './components/ManageTasks'
import styles from './styles/App.module.css'
import './styles/global.css'


function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <ManageTasks />
      </div>

    </div>
  )
}

export default App
