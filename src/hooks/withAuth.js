import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const withAuth = (SpecificComponent) => {
   function AuthenticationCheck(props) {
      const { user } = useSelector((state) => state.user)
      const navigate = useNavigate()

      useEffect(() => {
         if (!user) {
            navigate('login')
         }
      }, [user, navigate])

      return <SpecificComponent {...props} />
   }
   return AuthenticationCheck
}

export default withAuth
