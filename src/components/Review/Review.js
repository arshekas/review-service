import React, { useState } from 'react'
import * as styles from './review.emotion'
import User from '.././../assets/user.png'
import { StarFilled, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useSelector } from 'react-redux'

function Review({ review }) {
   const [showMore, setShowMore] = useState(false)
   const { user } = useSelector((state) => state.user)

   return (
      <div className={styles.reviewWrapper}>
         <div className={styles.reviewLeft}>
            <img src={User} alt="user" />
            <h3>{review.author.name}</h3>
         </div>
         <div className={styles.reviewRight}>
            <div className={styles.headerRight}>
               <div>
                  <h3>{review.product}</h3>
                  <p>
                     <b>Summary: </b>
                     {review.summary}
                  </p>
               </div>
               {review.author.id === user.id && (
                  <div className={styles.reviewActions}>
                     <Button icon={<EditOutlined />} />
                     <Button icon={<DeleteOutlined />} />
                  </div>
               )}
            </div>
            <p>
               {showMore ? review.review : `${review.review.substring(0, 400)}`}
               <span className="btn" onClick={() => setShowMore(!showMore)}>
                  {showMore ? 'Show less' : 'Show more'}
               </span>
            </p>
            <div className={styles.rating}>
               <StarFilled />
               <p>{review.rating}</p>
            </div>
            {review.tags.length > 0 &&
               review.tags.map((tag, index) => (
                  <div className={styles.tags} key={index}>
                     {tag}
                  </div>
               ))}
         </div>
      </div>
   )
}

export default Review
