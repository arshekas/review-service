import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useStorage from './useStorage'

const withAuth = (SpecificComponent) => {
   function AuthenticationCheck(props) {
      const { user } = useSelector((state) => state.user)
      const navigate = useNavigate()
      const { removeItem } = useStorage()
      useEffect(() => {
         if (!user) {
            navigate('login')
            removeItem('token', 'localStorage')
         }
      }, [user, navigate])

      return <SpecificComponent {...props} />
   }
   return AuthenticationCheck
}

export default withAuth
