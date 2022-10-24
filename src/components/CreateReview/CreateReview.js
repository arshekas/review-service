import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import { PlusSquareOutlined } from '@ant-design/icons'
import * as styles from './create.emotion'

function CreateReview() {
   const [isCreateModalOpen, setCreateModalOpen] = useState(false)
   const showModal = () => {
      setCreateModalOpen(true)
   }
   const handleCancel = () => {
      setCreateModalOpen(false)
   }

   return (
      <div className={styles.createButton}>
         <Button
            type="primary"
            icon={<PlusSquareOutlined />}
            onClick={showModal}
         >
            Add Review
         </Button>
         <Modal
            footer={null}
            title="Add Review"
            open={isCreateModalOpen}
            onCancel={handleCancel}
         ></Modal>
      </div>
   )
}

export default CreateReview
