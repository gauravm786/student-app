import '../App.css'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className='cen'>
          <span>
            <Link to="/">Home</Link>
          </span> &nbsp; &nbsp; &nbsp;
          <span>
            <Link to="/SignUp">SignUp</Link>
          </span> &nbsp; &nbsp; &nbsp;
          <span>  
            <Link to="/SignIn">SignIn</Link>
          </span> &nbsp; &nbsp; &nbsp;
          <span>  
            <Link to="/Dashboard">TeachersDashboard</Link>
          </span>

      </div>

      <Outlet />
    </>
  )
};

export default Layout;