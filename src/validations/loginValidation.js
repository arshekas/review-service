import * as Yup from 'yup'

export const loginValidation = () => {
   return Yup.object().shape({
      name: Yup.string()
         .trim()
         .max(50, "User name can't be more than 50 characters!")
         .required('User name is required!'),
      token: Yup.string().required('Password is required'),
   })
}
