import Navbar from "../components/Navbar"
import SongCard from "../components/SongCard"

function Playlist() {

    const songs = [
        {
            title: "Blinding Lights",
            artist: "The Weeknd",
            embedUrl: "https://www.youtube.com/embed/4NRXx6U8ABQ"
        },
        {
            title: "Heat Waves",
            artist: "Glass Animals",
            embedUrl: "https://www.youtube.com/embed/mRD0-GxqHVo"
        },
        {
            title: "Midnight City",
            artist: "M83",
            embedUrl: "https://www.youtube.com/embed/dX3k_QDnzHE"
        },
    ]

    return (
        <div className="min-h-screen bg-black text-white">

            <Navbar />

            <section className="px-8 pt-16 pb-10 text-center">

                <h1 className="text-6xl font-extrabold mb-5">
                    Night Drive Playlist 🌃
                </h1>

                <p className="text-gray-400 text-xl">
                    Curated tracks for late night vibes.
                </p>

                <button className="mt-8 px-8 py-4 bg-pink-500 hover:bg-pink-600 rounded-2xl font-bold transition duration-300">
                    ❤️ Save Playlist
                </button>

            </section>

            <section className="max-w-6xl mx-auto px-8 pb-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {songs.map((song) => (
                        <SongCard
                            key={song.title}
                            title={song.title}
                            artist={song.artist}
                            embedUrl={song.embedUrl}
                        />
                    ))}

                </div>

            </section>

        </div>
    )
}

export default Playlist