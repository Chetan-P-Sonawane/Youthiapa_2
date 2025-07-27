import { useDispatch } from "react-redux";
import { loginUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Zoop from "../WrapperAndComponents/Zoop";

const Login = () => {
    const [form, setForm] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        setError("");
        try {
            const res = await fetch("/users.json");
            const users = await res.json();

            const matched = users.find(
                (u) =>
                    u.username === form.username &&
                    u.password === form.password
            );

            if (matched) {
                dispatch(loginUser({ username: matched.username, password: matched.password }));
                navigate("/products");
            } else {
                setError("Invalid credentials. Please try again.");
            }
        } catch (err) {
            setError("Something went wrong. Try again later.");
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
            <div className="bg-black text-white shadow-2xl rounded-3xl p-8 w-full max-w-sm sm:max-w-md md:max-w-lg space-y-6">
                <h2 className="text-3xl font-bold text-center text-white">
                    <Zoop>Login</Zoop>
                </h2>

                <input
                    type="text"
                    placeholder="Username (e.g., test)"
                    className="w-full p-3 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Password (e.g., testpass)"
                    className="w-full p-3 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                {error && (
                    <p className="text-sm text-red-400 text-center">{error}</p>
                )}

                <button
                    onClick={handleLogin}
                    disabled={!form.username || !form.password}
                    className={`w-full px-4 py-3 rounded-full font-semibold transition-all duration-200 ${!form.username || !form.password
                            ? "bg-gray-500 cursor-not-allowed"
                            : "bg-red-500 hover:bg-red-600 text-white"
                        }`}
                >
                    <Zoop>Login</Zoop>
                </button>
            </div>
        </div>
    );
};

export default Login;
