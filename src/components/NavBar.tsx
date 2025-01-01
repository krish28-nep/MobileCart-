import { Link } from "react-router";
import { IoBagHandle } from "react-icons/io5";
const NavBar = () => {
  return (
    <nav className="h-70 bg-customGreen flex justify-between items-center text-white shadow-bottom p-4">
      <Link to="/">
        <h2 className="font-pacifico italic text-2xl font-bold">
          ShoppingMart
        </h2>
      </Link>
      <Link to="/cart">
        <div className="flex item">
          <IoBagHandle className="w-10 h-10" />
          <span className="flex items-center justify-center h-[25px] w-[25px] bg-yellow-200 rounded-full absolute ml-7">
            <span className="text-black">3</span>
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;
