import Navbar from "../components/Navbar"
import MoodCard from "../components/MoodCard";
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
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <section className="px-8 py-20 text-center">
                <h1 className="text-6xl font-extrabold mb-6">
                    Music for Every Mood 🎵
                </h1>

                <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                    Discover playlists curated perfectly for your vibe,
                    whether you're coding, chilling, working out, or
                    driving at midnight.
                </p>

                <div className="mt-10 flex justify-center gap-5">

                    <Link to="/dashboard">
                        <button className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-2xl font-bold transition">
                            Explore Moods
                        </button>
                    </Link>

                    <Link to="/signup">
                        <button className="px-8 py-4 border border-gray-700 hover:bg-gray-800 rounded-2xl font-bold transition">
                            Get Started
                        </button>
                    </Link>

                </div>
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pb-20 max-w-6xl mx-auto">
                {moods.map((mood) => (
                    <MoodCard
                        key={mood.title}
                        title={mood.title}
                        emoji={mood.emoji}
                    />
                ))}
            </section>
        </div>
    )
}

export default Home