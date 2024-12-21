import { Link, Outlet } from "react-router-dom";
import CenteredText  from "./CenteredText";

const Dashbord = () => {
  return (
    <CenteredText>
      <p>Welcome to the Dashboard!</p>
      <Link to="admin">Admin</Link>
      <Link to="user">User</Link>
      <Outlet />
    </CenteredText>
  );
}

export default Dashbord