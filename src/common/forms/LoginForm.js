import * as styles from '../../pages/Login/login.emotion'
import { Formik, Form } from 'formik'
import { Button, Space } from 'antd'
import { loginValidation } from '../../validations/loginValidation'
import LoginObject from '../../models/LoginObject'
import LabelField from '../../uikit/LabelField'
import Music from '.././../assets/music.png'
import { checkUserValid } from '../../utils/checkUserValid'
import { setUser } from '../../redux/actions/user_actions'
import { showErrorMsg, showSuccessMsg } from '../../functions/notifications'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   return (
      <div className={styles.loginFormWrapper}>
         <div className={styles.loginForm}>
            <img src={Music} alt="Music" />
            <h1 className={styles.loginFormTitle}>Login</h1>
            <Formik
               validateOnChange
               enableReinitialize
               initialValues={LoginObject()}
               validationSchema={loginValidation}
               onSubmit={(data, { setSubmitting }) => {
                  const user = checkUserValid(data)
                  console.log('LoginForm.js ~ 29 user', user)
                  if (user) {
                     dispatch(setUser(user))
                     navigate('/')
                     showSuccessMsg('You have logged in successfully!')
                  } else {
                     dispatch(setUser(null))
                     showErrorMsg('Please check you username or password!')
                  }
                  setTimeout(() => {
                     setSubmitting(false)
                  }, 200)
               }}
            >
               {({ isSubmitting }) => (
                  <Form>
                     <Space align="center" direction="vertical">
                        <LabelField
                           type="text"
                           name="name"
                           label="User name"
                           placeholder="Enter username"
                        />
                        <LabelField
                           label="Password"
                           type="password"
                           name="token"
                           placeholder="Enter password"
                        />
                        <Button
                           type="lightdark"
                           htmlType="submit"
                           disabled={isSubmitting}
                        >
                           Login
                        </Button>
                     </Space>
                  </Form>
               )}
            </Formik>
         </div>
      </div>
   )
}

export default LoginForm
