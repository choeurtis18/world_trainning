import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li className="flex justify-center gap-4 my-6">
            <Link to="/">Home</Link>
            <Link to="/quizen">QuizEN</Link>
            <Link to="/quizfr">QuizFR</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;