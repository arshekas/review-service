import * as styles from '../../components/CreateReview/create.emotion'
import { Formik, Form } from 'formik'
import { Button, Space } from 'antd'
import LabelField from '../../uikit/LabelField'
import ReviewObject from '../../models/ReviewObject'
import { reviewValidation } from '../../validations/reviewValidation'
import { Select } from 'antd'
import { getTags } from '../../utils/getTags'
import { PlusCircleOutlined } from '@ant-design/icons'
import { useCreateReview } from '../../services/api/reviews/useCreateReview'
import { useUpdateReview } from '../../services/api/reviews/useUpdateReview'
const { Option } = Select
function ReviewForm({ review }) {
   const { mutate: createReview } = useCreateReview()
   const { mutate: updateReview } = useUpdateReview(review?.id)

   const handleTagChange = (value, setFieldValue) => {
      setFieldValue('tags', value)
   }
   return (
      <div className={styles.reviewFormWrapper}>
         <div>
            <Formik
               validateOnChange
               enableReinitialize
               initialValues={ReviewObject(review)}
               validationSchema={reviewValidation}
               onSubmit={(data, { resetForm, setSubmitting }) => {
                  const formData = {
                     review: {
                        product: data.product,
                        summary: data.summary,
                        review: data.review,
                        rating: data.rating,
                        tags: data.tags,
                     },
                  }
                  if (review) {
                     updateReview(formData)
                  } else {
                     createReview(formData)
                  }
                  setTimeout(() => {
                     setSubmitting(false)
                     resetForm()
                  }, 200)
               }}
            >
               {(props) => {
                  const { isSubmitting, setFieldValue } = props
                  return (
                     <Form>
                        <Space align="center" direction="vertical">
                           <LabelField
                              type="text"
                              name="product"
                              label="Product"
                              placeholder="Enter product"
                           />
                           <LabelField
                              type="text"
                              name="summary"
                              label="Summary"
                              placeholder="Add summary"
                           />
                           <LabelField
                              type="textarea"
                              name="review"
                              label="Review"
                              placeholder="Add review"
                           />
                           <LabelField
                              type="number"
                              name="rating"
                              label="Rating"
                              placeholder="Add rating"
                           />
                           <div
                              style={{ display: 'grid', marginBottom: '1rem' }}
                           >
                              <label>Tags</label>
                              <Select
                                 mode="multiple"
                                 allowClear
                                 style={{
                                    width: '25rem',
                                 }}
                                 defaultValue={review?.tags}
                                 placeholder="Please select"
                                 onChange={(value) =>
                                    handleTagChange(value, setFieldValue)
                                 }
                              >
                                 {getTags.map((tag, index) => (
                                    <Option value={tag} key={index}>
                                       {tag}
                                    </Option>
                                 ))}
                              </Select>
                           </div>
                           <Button
                              loading={isSubmitting}
                              type="primary"
                              htmlType="submit"
                              disabled={isSubmitting}
                              icon={<PlusCircleOutlined />}
                           >
                              {review ? 'Update' : 'Create'}
                           </Button>
                        </Space>
                     </Form>
                  )
               }}
            </Formik>
         </div>
      </div>
   )
}

export default ReviewForm
