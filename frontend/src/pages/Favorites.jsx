import Navbar from "../components/Navbar"
import FavoriteCard from "../components/FavoriteCard"

function Favorites() {

    const favorites = [
        {
            title: "Night Drive",
            emoji: "🌃",
            description: "Late night synthwave vibes"
        },
        {
            title: "Coding Focus",
            emoji: "💻",
            description: "Deep focus productivity tracks"
        },
        {
            title: "Rain Chill",
            emoji: "🌧️",
            description: "Relaxing rainy atmosphere"
        },
    ]

    return (
        <div className="min-h-screen bg-black text-white">

            <Navbar />

            <section className="px-8 pt-16 pb-12 text-center">

                <h1 className="text-6xl font-extrabold mb-5">
                    Saved Playlists ❤️
                </h1>

                <p className="text-gray-400 text-xl">
                    Your favorite moods and playlists.
                </p>

            </section>

            <section className="max-w-6xl mx-auto px-8 pb-20">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {favorites.map((playlist) => (
                        <FavoriteCard
                            key={playlist.title}
                            title={playlist.title}
                            emoji={playlist.emoji}
                            description={playlist.description}
                        />
                    ))}

                </div>

            </section>

        </div>
    )
}

export default Favorites