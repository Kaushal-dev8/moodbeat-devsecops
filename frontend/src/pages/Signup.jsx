import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import api from "../services/api"

function Signup() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSignup = async (e) => {

        e.preventDefault()

        try {

            await api.post("/signup", formData)

            alert("Signup successful 🚀")

            navigate("/login")

        } catch (error) {

            console.log(error)

            alert("Signup failed")
        }
    }

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

            <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-10 shadow-2xl">

                <h1 className="text-4xl font-bold text-center mb-2 text-green-400">
                    Create Account
                </h1>

                <p className="text-center text-gray-400 mb-8">
                    Join MoodBeat today
                </p>

                <form
                    onSubmit={handleSignup}
                    className="space-y-5"
                >

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-black border border-zinc-700 focus:outline-none focus:border-green-400"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-black border border-zinc-700 focus:outline-none focus:border-green-400"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl bg-black border border-zinc-700 focus:outline-none focus:border-green-400"
                    />

                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 transition py-4 rounded-xl font-bold"
                    >
                        Signup
                    </button>

                </form>

                <p className="text-center text-gray-400 mt-6">
                    Already have an account?{" "}

                    <Link
                        to="/login"
                        className="text-green-400 hover:underline"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>
    )
}

export default Signup