import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const loacation = useLocation();
    console.log(loacation)

    if (loading) {
        return <div className=" h-3/5 flex justify-center items-center">
            <span className=" loading mt-14 lg:mt-[400px] loading-spinner loading-lg"></span>
        </div>
    }
    if (user) {
        return children;
    }


    return (<Navigate to="/login"></Navigate>);


};

export default PrivateRoute;