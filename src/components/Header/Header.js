import React from 'react'
import { Link } from 'react-router-dom'
import * as styles from './header.emotion'
import Nav from './sections/Nav/Nav'

function Header() {
   return (
      <div className={styles.header}>
         <div className={styles.headerWrapper}>
            <div className={styles.headerLeft}>
               <Link to={'/'}>
                  <h1 className={styles.title}>
                     Music Instrument Review Service
                  </h1>
               </Link>
            </div>
            <div className={styles.headerRight}>
               <Nav />
            </div>
         </div>
      </div>
   )
}

export default Header
