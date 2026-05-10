function SongCard({ title, artist, embedUrl }) {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-lg hover:border-green-400 hover:scale-[1.02] transition duration-300">

            <h2 className="text-2xl font-bold mb-2">
                {title}
            </h2>

            <p className="text-gray-400 mb-5">
                {artist}
            </p>

            <div className="rounded-2xl overflow-hidden">
                <iframe
                    width="100%"
                    height="200"
                    src={embedUrl}
                    title={title}
                    allowFullScreen
                ></iframe>
            </div>

        </div>
    )
}

export default SongCard