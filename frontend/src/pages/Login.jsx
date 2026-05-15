import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import api from "../services/api"

function Login() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleLogin = async (e) => {

        e.preventDefault()

        try {

            const response = await api.post(
                "/login",
                formData
            )

            localStorage.setItem(
                "token",
                response.data.access_token
            )

            alert("Login successful 🚀")

            navigate("/dashboard")

        } catch (error) {

            console.log(error)

            alert("Login failed")
        }
    }

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

            <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-10 shadow-2xl">

                <h1 className="text-4xl font-bold text-center mb-2 text-green-400">
                    MoodBeat 🎵
                </h1>

                <p className="text-center text-gray-400 mb-8">
                    Welcome back
                </p>

                <form
                    onSubmit={handleLogin}
                    className="space-y-5"
                >

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
                        Login
                    </button>

                </form>

                <p className="text-center text-gray-400 mt-6">

                    Don’t have an account?{" "}

                    <Link
                        to="/signup"
                        className="text-green-400 hover:underline"
                    >
                        Signup
                    </Link>

                </p>

            </div>

        </div>
    )
}

export default Login