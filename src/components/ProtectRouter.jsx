import { Navigate } from "react-router-dom";

function ProtectRouter({children,user}) {
  if(user){
    return children
  }else{
    return <Navigate to='/login'/>
  }
}

export default ProtectRouter