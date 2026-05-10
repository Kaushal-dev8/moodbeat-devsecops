import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">

            <Link to="/">
                <h1 className="text-3xl font-bold text-green-400 cursor-pointer">
                    MoodBeat 🎵
                </h1>
            </Link>

            <div className="flex items-center gap-4">

                <Link to="/dashboard">
                    <button className="px-5 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 transition">
                        Dashboard
                    </button>
                </Link>

                <Link to="/favorites">
                    <button className="px-5 py-2 rounded-lg border border-pink-500 hover:bg-pink-500/20 transition">
                        Favorites
                    </button>
                </Link>

                <Link to="/login">
                    <button className="px-5 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 transition">
                        Login
                    </button>
                </Link>

                <Link to="/signup">
                    <button className="px-5 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition font-semibold">
                        Signup
                    </button>
                </Link>

            </div>
        </nav>
    )
}

export default Navbar