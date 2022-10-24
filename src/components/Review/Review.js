import React, { useState } from 'react'
import * as styles from './review.emotion'
import User from '.././../assets/user.png'
import { StarFilled, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Button, Modal, Popconfirm } from 'antd'
import { useSelector } from 'react-redux'
import ReviewForm from '../../common/forms/ReviewForm'
import { useDeleteReview } from '../../services/api/reviews/useDeleteReview'

function Review({ review }) {
   const [showMore, setShowMore] = useState(false)
   const [isEditModalOpen, setEditModalOpen] = useState(false)
   const { user } = useSelector((state) => state.user)
   const { mutate: deleteReview } = useDeleteReview()

   const showEditModal = () => {
      setEditModalOpen(true)
   }
   const handleEditCancel = () => {
      setEditModalOpen(false)
   }

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
               {review.author.id === user?.id && (
                  <div className={styles.reviewActions}>
                     <Button onClick={showEditModal} icon={<EditOutlined />} />

                     <Popconfirm
                        placement="topLeft"
                        title={'Are you sure you want to delete review?'}
                        onConfirm={() => deleteReview(review.id)}
                        okText="Yes"
                        cancelText="No"
                     >
                        <Button icon={<DeleteOutlined />} />
                     </Popconfirm>
                  </div>
               )}
            </div>
            <p>
               {showMore ? review.review : `${review.review.substring(0, 400)}`}
               {review.review.length > 400 && (
                  <span className="btn" onClick={() => setShowMore(!showMore)}>
                     {showMore ? 'Show less' : 'Show more'}
                  </span>
               )}
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
         <Modal
            footer={null}
            title="Update Review"
            open={isEditModalOpen}
            onCancel={handleEditCancel}
         >
            <ReviewForm review={review} />
         </Modal>
      </div>
   )
}

export default Review
