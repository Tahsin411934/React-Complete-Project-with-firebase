import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user , loading} = UseAuth()
    const location= useLocation()
    console.log(location)
    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400 dark:border-violet-600"></div>
    } 
    else{
        return user ? children : <Navigate to="/login" state={location?.pathname || "/"} />;
    }
    
};
PrivateRoute.propTypes = {
    children: PropTypes.children
  };
export default PrivateRoute;