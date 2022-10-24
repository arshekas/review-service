import React from 'react'
import { useSelector } from 'react-redux'
import { useGetReviews } from '../../services/api/reviews/useGetReviews'
import Review from '../Review/Review'
import * as styles from './reviews.emotion'

function Reviews() {
   const { user } = useSelector((state) => state.user)
   const { data: reviews } = useGetReviews([], {}, user?.token)
   return (
      <div className={styles.reviewsWrapper}>
         {reviews.map((review) => (
            <Review key={review.id} review={review} />
         ))}
      </div>
   )
}

export default Reviews
