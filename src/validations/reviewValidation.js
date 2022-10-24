import * as Yup from 'yup'

export const reviewValidation = () => {
   return Yup.object().shape({
      product: Yup.string()
         .trim()
         .max(50, "Product can't be more than 50 characters!")
         .required('Product is required!'),
      summary: Yup.string()
         .trim()
         .max(200, "Summary can't be more than 50 characters!")
         .required('Summary is required!'),
      review: Yup.string().trim().required('Review is required!'),
      rating: Yup.number().min(0).max(5),
   })
}
