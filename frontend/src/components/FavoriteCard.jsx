function FavoriteCard({ title, description, emoji }) {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-pink-400 hover:scale-105 transition duration-300 shadow-lg cursor-pointer">

            <div className="text-5xl mb-4">
                {emoji}
            </div>

            <h2 className="text-3xl font-bold mb-3">
                {title}
            </h2>

            <p className="text-gray-400">
                {description}
            </p>

        </div>
    )
}

export default FavoriteCard