function MoodCard({ title, emoji }) {
    return (
        <div className="bg-zinc-900 hover:bg-zinc-800 transition rounded-2xl p-8 cursor-pointer border border-zinc-800 hover:border-green-400">
            <div className="text-5xl mb-4">
                {emoji}
            </div>

            <h2 className="text-2xl font-bold">
                {title}
            </h2>
        </div>
    )
}

export default MoodCard