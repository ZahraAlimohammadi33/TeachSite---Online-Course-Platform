import React from 'react'
import styles from './account.module.css'
import Sidebar from '../modules/Sidebar';


function AccountPage() {
   return (
    <div className={styles.container}>
      <div className={styles.right}>
        <Sidebar />
      </div>
      <div className={styles.left}>{children}</div>
    </div>
  );
}

export default AccountPage