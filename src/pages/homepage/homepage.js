import React from 'react'
import CreateReview from '../../components/CreateReview/CreateReview'
import Reviews from '../../components/Reviews/Reviews'
import withAuth from '../../hooks/withAuth'
import * as styles from './homepage.emotion'

function Homepage() {
   return (
      <div className={styles.homeWrapper}>
         <CreateReview />
         <Reviews />
      </div>
   )
}

export default withAuth(Homepage)
