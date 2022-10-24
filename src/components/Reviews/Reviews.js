import React from 'react'
import { useGetReviews } from '../../services/api/reviews/useGetReviews'
import Review from '../Review/Review'
import * as styles from './reviews.emotion'
import { Spin } from 'antd'

function Reviews() {
   const { data: reviews, isFetching: isReviewFetching } = useGetReviews()
   return isReviewFetching ? (
      <div className={styles.spinContainer}>
         <Spin tip="loading..." size="large" />
      </div>
   ) : (
      <div className={styles.reviewsWrapper}>
         {reviews.map((review) => (
            <Review key={review.id} review={review} />
         ))}
      </div>
   )
}

export default Reviews
