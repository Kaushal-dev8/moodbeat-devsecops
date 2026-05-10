function SearchBar() {
    return (
        <div className="w-full max-w-2xl mx-auto mb-12">
            <input
                type="text"
                placeholder="Search moods..."
                className="w-full p-5 rounded-2xl bg-zinc-900 border border-zinc-800 focus:outline-none focus:border-green-400 text-white"
            />
        </div>
    )
}

export default SearchBar