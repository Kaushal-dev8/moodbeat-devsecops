import { Link } from "react-router-dom"

function Navbar() {

    return (

        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-zinc-800">

            <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">

                {/* LOGO */}

                <Link to="/">

                    <h1 className="text-3xl font-extrabold tracking-tight">

                        <span className="text-green-500">
                            Mood
                        </span>

                        <span className="text-white">
                            Beat
                        </span>

                        <span className="ml-2">
                            🎵
                        </span>

                    </h1>

                </Link>

                {/* NAV LINKS */}

                <div className="flex items-center gap-4">

                    <Link to="/dashboard">

                        <button className="px-5 py-2 rounded-xl border border-zinc-700 hover:bg-zinc-800 transition duration-300 text-sm md:text-base">

                            Dashboard

                        </button>

                    </Link>

                    <Link to="/favorites">

                        <button className="px-5 py-2 rounded-xl border border-pink-500/40 hover:bg-pink-500/10 text-pink-400 transition duration-300 text-sm md:text-base">

                            Favorites

                        </button>

                    </Link>

                    <Link to="/login">

                        <button className="hidden md:block px-5 py-2 rounded-xl border border-zinc-700 hover:bg-zinc-800 transition duration-300">

                            Login

                        </button>

                    </Link>

                    <Link to="/signup">

                        <button className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 transition duration-300 font-semibold shadow-lg shadow-green-500/20">

                            Signup

                        </button>

                    </Link>

                </div>

            </div>

        </nav>

    )
}

export default Navbar