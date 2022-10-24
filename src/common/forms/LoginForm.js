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
import useStorage from '../../hooks/useStorage'

function LoginForm() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { setItem, removeItem } = useStorage()
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
                  if (user) {
                     dispatch(setUser(user))
                     // set token to local storage to use for api
                     setItem('token', user.token, 'localStorage')
                     navigate('/')
                     showSuccessMsg('You have logged in successfully!')
                  } else {
                     dispatch(setUser(null))
                     removeItem('token', 'localStorage')
                     showErrorMsg('Please check you username or password!')
                     showSuccessMsg('You have logged out successfully!')
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
                           type="primary"
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
