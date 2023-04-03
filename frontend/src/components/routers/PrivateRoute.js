import { React } from "react";
import { Outlet } from "react-router-dom";

const PrivateRoute = () => {

  return <Outlet />;

//   const { redirect } = props;

//   let navigate = useNavigate();

//   useEffect(() => {
//     if (props.auth.isAuthenticated !== null && !props.auth.isAuthenticated) {
//       navigate(`${redirect}`);
//     }
//   });

//   if (props.auth.isLoading) {
//     return <Spinner />;
//   } else if (!props.auth.isAuthenticated) {
//     return null;
//   } else {
//     return <Outlet />;
//   }
}

export default PrivateRoute;