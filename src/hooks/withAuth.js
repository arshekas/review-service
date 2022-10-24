import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useStorage from './useStorage'

const withAuth = (SpecificComponent) => {
   function AuthenticationCheck(props) {
      const { user } = useSelector((state) => state.user)
      const navigate = useNavigate()
      const { removeItem } = useStorage()

      // redirect user if not logged in for reviews
      useEffect(() => {
         if (!user) {
            navigate('login')
            removeItem('token', 'localStorage')
         }
      }, [user, navigate, removeItem])

      return <SpecificComponent {...props} />
   }
   return AuthenticationCheck
}

export default withAuth
