import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-gray-800 px-6 py-4 shadow-md">
            {/* Logo / Title */}
            <h2 className="text-2xl font-bold text-white">Recipe App</h2>

            {/* Search Bar */}
            <form className="flex-grow mx-6">
                <input
                    type="text"
                    name="search"
                    placeholder="Search for a recipe"
                    className="w-full max-w-md px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </form>

            {/* Navigation Links */}
            <ul className="flex space-x-6 text-white font-medium">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-yellow-400" : "hover:text-yellow-300"
                        }
                    >
                        Home (Food Recipe)
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/favorites"
                        className={({ isActive }) =>
                            isActive ? "text-yellow-400" : "hover:text-yellow-300"
                        }
                    >
                        Favorites
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
