import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <header className="bg-[#f1f1f1] max-w-[1400px] max-h-[100px] my-0 mx-auto px-5 py-5 flex items-center justify-between">
      <Link to="/" className="text-[#333] no-underline">
        <h1 className="text-m md:text-2xl font-bold">MERN Boilerplate</h1>
      </Link>
      <nav>
        <div className="">
          {user ? (<>
          <span className="py-3 px-5">{user.email}</span>
          <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300" onClick={logout}>Log out</button>
          </>
          ) : (
            <>
              <Link to="/login" className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Login</Link>
            </>
          )}
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
