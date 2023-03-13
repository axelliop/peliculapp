import {FaSpinner} from 'react-icons/fa'
import React from 'react'
import styles from './Spinner.module.css'

const Spinner = () => {
  return (
    <div className={styles.spinner}>
    <FaSpinner className={styles.spinning} size={70} />
    </div>
  )
}

export default Spinner