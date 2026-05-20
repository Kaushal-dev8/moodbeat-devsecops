import Navbar from "../components/Navbar"
import MoodCard from "../components/MoodCard"
import { Link } from "react-router-dom"

function Home() {

    const moods = [
        { title: "Chill", emoji: "🌙" },
        { title: "Focus", emoji: "💻" },
        { title: "Gym", emoji: "🏋️" },
        { title: "Rain", emoji: "🌧️" },
        { title: "Party", emoji: "🎉" },
        { title: "Coding", emoji: "👨‍💻" },
    ]

    return (

        <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white overflow-hidden">

            <Navbar />

            {/* HERO SECTION */}

            <section className="relative px-6 md:px-16 py-24 text-center">

                <div className="absolute inset-0 bg-green-500/10 blur-3xl"></div>

                <div className="relative z-10">

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

                        Find Your Perfect
                        <span className="text-green-500"> Mood Music</span>

                    </h1>

                    <p className="mt-8 text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">

                        MoodBeat curates playlists for every vibe —
                        whether you're coding late at night,
                        crushing workouts,
                        chilling with friends,
                        or driving under city lights.

                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

                        <Link to="/dashboard">

                            <button className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-2xl font-bold text-lg transition duration-300 shadow-lg shadow-green-500/20">

                                Explore Moods

                            </button>

                        </Link>

                        <Link to="/signup">

                            <button className="px-8 py-4 border border-zinc-700 hover:bg-zinc-800 rounded-2xl font-bold text-lg transition duration-300">

                                Get Started

                            </button>

                        </Link>

                    </div>

                </div>

            </section>

            {/* FEATURE STATS */}

            <section className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8 backdrop-blur-lg">

                    <h2 className="text-4xl font-bold text-green-500">
                        50+
                    </h2>

                    <p className="text-zinc-400 mt-2">
                        Curated playlists
                    </p>

                </div>

                <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8 backdrop-blur-lg">

                    <h2 className="text-4xl font-bold text-green-500">
                        24/7
                    </h2>

                    <p className="text-zinc-400 mt-2">
                        Mood-based discovery
                    </p>

                </div>

                <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8 backdrop-blur-lg">

                    <h2 className="text-4xl font-bold text-green-500">
                        AI
                    </h2>

                    <p className="text-zinc-400 mt-2">
                        Smart recommendations
                    </p>

                </div>

            </section>

            {/* MOODS SECTION */}

            <section className="px-6 md:px-16 py-20">

                <div className="flex items-center justify-between mb-10">

                    <div>

                        <h2 className="text-4xl font-bold">
                            Browse Moods
                        </h2>

                        <p className="text-zinc-400 mt-2">
                            Explore playlists based on your current vibe.
                        </p>

                    </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {moods.map((mood) => (

                        <MoodCard
                            key={mood.title}
                            title={mood.title}
                            emoji={mood.emoji}
                        />

                    ))}

                </div>

            </section>

        </div>
    )
}

export default Home