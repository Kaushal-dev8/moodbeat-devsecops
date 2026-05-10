function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
            <h1 className="text-3xl font-bold text-green-400">
                MoodBeat 🎵
            </h1>

            <div className="flex gap-4">
                <button className="px-5 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 transition">
                    Login
                </button>

                <button className="px-5 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition font-semibold">
                    Signup
                </button>
            </div>
        </nav>
    )
}

export default Navbar
