import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Navbar from "../components/Navbar"
import SongCard from "../components/SongCard"

import api from "../services/api"

function Playlist() {

    const { mood } = useParams()

    const [songs, setSongs] = useState([])

    useEffect(() => {

        const fetchPlaylist = async () => {

            try {

                const response = await api.get(`/playlist/${mood}`)

                setSongs(response.data.songs)

            } catch (error) {
                console.log(error)
            }
        }

        fetchPlaylist()

    }, [mood])

    return (
        <div className="min-h-screen bg-black text-white">

            <Navbar />

            <section className="px-8 pt-16 pb-10 text-center">

                <h1 className="text-6xl font-extrabold mb-5 capitalize">
                    {mood} Playlist 🎵
                </h1>

                <p className="text-gray-400 text-xl">
                    Curated tracks for your vibe.
                </p>

            </section>

            <section className="max-w-6xl mx-auto px-8 pb-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {songs.map((song) => (
                        <SongCard
                            key={song.title}
                            title={song.title}
                            artist={song.artist}
                            embedUrl="https://www.youtube.com/embed/4NRXx6U8ABQ"
                        />
                    ))}

                </div>

            </section>

        </div>
    )
}

export default Playlist