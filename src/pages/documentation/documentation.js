import React from 'react'
import * as styles from './documentation.emotion'

function Documentation() {
   return (
      <div className={styles.docWrapper}>
         <h2>Documentation</h2>
         <ul>
            <li>
               Music Instrument Review Service let users view, create, update
               and delete reviews on musical products
            </li>
            <li>
               In order to view the reviews/homepage user needs to log in using
               name and token as password
               <b> for e.g. Billy Bob and his token</b>, otherwise users cannot
               access reviews page. If the user enters the wrong name/username
               or password will not let you navigate to the home page
            </li>
            <li>
               Once logged in, user can see a list of reviews along with the
               author. <b>Users can only update and delete their own reviews</b>
            </li>
            <li>
               Users can use the logout button to logout which will redirect the
               user back to the login page
            </li>
            <li>
               <b>
                  All the tech libraries such as redux, react-query, formik,
                  antd, styles, etc. are used so that app can easy to scale,
                  manage and organize in future
               </b>
            </li>
         </ul>
      </div>
   )
}

export default Documentation
