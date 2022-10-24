import React from 'react'
import { useGetReviews } from '../../services/api/reviews/useGetReviews'
import Review from '../Review/Review'
import * as styles from './reviews.emotion'

function Reviews() {
   const { data: reviews } = useGetReviews()
   return (
      <div className={styles.reviewsWrapper}>
         {reviews.map((review) => (
            <Review key={review.id} review={review} />
         ))}
      </div>
   )
}

export default Reviews
