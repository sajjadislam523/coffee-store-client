import { Link } from "react-router-dom";

const Navbar = () => {
    const links = (
        <div className="flex flex-col items-center gap-4 md:flex-row">
            <Link to="/" className="text-base hover:underline">
                Home
            </Link>
            <Link to="/addCoffee" className="text-base hover:underline">
                Add Coffee
            </Link>
        </div>
    );
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost md:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <a className="text-xl btn btn-ghost">daisyUI</a>
            </div>
            <div className="navbar-end">
                <div className="hidden md:block">
                    <ul className="px-1 menu menu-horizontal">{links}</ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
