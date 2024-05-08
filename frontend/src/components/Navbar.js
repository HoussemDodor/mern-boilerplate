import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#f1f1f1] max-w-[1400px] max-h-[100px] my-0 mx-auto px-5 py-5 flex items-center justify-between">
      <Link to="/" className="text-[#333] no-underline">
        <h1 className="text-2xl font-bold">MERN Boilerplate</h1>
      </Link>
      <nav>
        <div className="flex align-middle">
          <Link to="/login" className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
