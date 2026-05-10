import { Link } from "react-router-dom"

function MoodCard({ title, emoji, description }) {
    return (
        <Link to="/playlist">

            <div className="bg-zinc-900 hover:bg-zinc-800 transition rounded-3xl p-8 cursor-pointer border border-zinc-800 hover:border-green-400 hover:scale-105 duration-300 shadow-lg">

                <div className="text-6xl mb-5">
                    {emoji}
                </div>

                <h2 className="text-3xl font-bold mb-3">
                    {title}
                </h2>

                <p className="text-gray-400">
                    {description}
                </p>

            </div>

        </Link>
    )
}

export default MoodCard