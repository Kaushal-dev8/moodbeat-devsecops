import Navbar from "../components/Navbar"
import MoodCard from "../components/MoodCard"
import SearchBar from "../components/SearchBar"

function Dashboard() {

    const moods = [
        {
            title: "Chill",
            emoji: "🌙",
            description: "Relaxing late night vibes"
        },
        {
            title: "Focus",
            emoji: "💻",
            description: "Deep work and productivity"
        },
        {
            title: "Gym",
            emoji: "🏋️",
            description: "High energy workout tracks"
        },
        {
            title: "Rain",
            emoji: "🌧️",
            description: "Peaceful rainy atmosphere"
        },
        {
            title: "Coding",
            emoji: "👨‍💻",
            description: "Perfect music for coding sessions"
        },
        {
            title: "Party",
            emoji: "🎉",
            description: "Weekend party bangers"
        },
    ]

    return (
        <div className="min-h-screen bg-black text-white">

            <Navbar />

            <section className="px-8 pt-16 text-center">

                <h1 className="text-6xl font-extrabold mb-5">
                    Discover Your Mood 🎵
                </h1>

                <p className="text-gray-400 text-xl mb-14">
                    Explore playlists crafted for every vibe.
                </p>

                <SearchBar />

            </section>

            <section className="max-w-7xl mx-auto px-8 pb-20">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {moods.map((mood) => (
                        <MoodCard
                            key={mood.title}
                            title={mood.title}
                            emoji={mood.emoji}
                            description={mood.description}
                        />
                    ))}

                </div>

            </section>

        </div>
    )
}

export default Dashboard