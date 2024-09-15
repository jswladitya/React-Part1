//To access data
import React , {useContext} from 'react'
import UserContext from '../Context/userContext'

function Profile() {
  //hamne setuser method ke through user me data jo store karwaya he use ham ab yaha use karenge 
  const {user} = useContext(UserContext)
  
  if(!user) return <div>Please Login</div> //ager user ho hi nhi

  return <div>Welcome {user.username}</div>
}

export default Profile
