import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import navRoutes from './routes'
import * as styles from '../../header.emotion'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../../../redux/actions/user_actions'
import { showSuccessMsg } from '../../../../functions/notifications'
import { LoginOutlined, UserOutlined } from '@ant-design/icons'
import useStorage from '../../../../hooks/useStorage'

function Nav() {
   const { authNavArray, nonAuthNavArray } = navRoutes()
   const dispatch = useDispatch()
   const { user } = useSelector((state) => state.user)
   const navigate = useNavigate()
   const { removeItem } = useStorage()

   const handleLogout = () => {
      dispatch(setUser(null))
      removeItem('token', 'localStorage')
      showSuccessMsg('You have logout successfully!')
      navigate('login')
   }

   return (
      <div className={styles.headerRightList}>
         {user ? (
            <>
               {authNavArray.map((item, index) => (
                  <Link key={index} to={item.route}>
                     <Button icon={item.icon}>{item.name}</Button>
                  </Link>
               ))}
               <Button icon={<LoginOutlined />} onClick={handleLogout}>
                  Logout
               </Button>
            </>
         ) : (
            <>
               {nonAuthNavArray.map((item, index) =>
                  item.linkDisabled ? (
                     <Button
                        icon={item.icon}
                        key={index}
                        onClick={item.onClick}
                     >
                        {item.name}
                     </Button>
                  ) : (
                     <Link key={index} to={item.route}>
                        <Button icon={item.icon}>{item.name}</Button>
                     </Link>
                  ),
               )}
               <Link to={'login'}>
                  <Button icon={<UserOutlined />}>Login</Button>
               </Link>
            </>
         )}
      </div>
   )
}

export default Nav
