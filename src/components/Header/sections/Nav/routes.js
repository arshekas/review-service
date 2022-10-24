import { showInfoMsg } from '../../../../functions/notifications'
import { ProfileOutlined, FileTextOutlined } from '@ant-design/icons'

const navRoutes = () => {
   // creating separate navs for auth and non auth for more customization
   const authNavArray = [
      {
         route: '/',
         name: 'Reviews',
         icon: <ProfileOutlined />,
      },
      {
         route: 'documentation',
         name: 'Documentation',
         icon: <FileTextOutlined />,
      },
   ]

   const nonAuthNavArray = [
      {
         route: '/',
         name: 'Reviews',
         linkDisabled: true,
         icon: <ProfileOutlined />,
         onClick: () => {
            showInfoMsg('Please login first!')
         },
      },
      {
         route: 'documentation',
         name: 'Documentation',
         icon: <FileTextOutlined />,
         linkDisabled: false,
      },
   ]
   return {
      authNavArray,
      nonAuthNavArray,
   }
}

export default navRoutes
