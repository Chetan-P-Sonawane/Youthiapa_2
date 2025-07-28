import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Zoop from "../WrapperAndComponents/Zoop";
import "./login.css";
import PageTransition from "../PageTransition/PageTransition";

const Login = () => {
    const products = useSelector((state) => state.products.filteredProducts);
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
                navigate("/profile");
            } else {
                setError("Invalid credentials. Please try again.");
            }
        } catch (err) {
            setError("Something went wrong. Try again later.");
        }
    };

    const marqueeImg = products.map((item) => (
            (item.id <= 7 && (
                <div key={item.id} className="ml-12 h-[5rem] w-[4rem] sm:h-[13vw] sm:w-[13vw] rounded shrink-0">
                    <img className="h-full w-full object-cover object-top" src={item.image} alt="" />
                </div>
            ))
    ))


    return (
    <>
        {/* <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
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
        </div> */}

    <PageTransition>
        <div  className="relative loginpg h-[100vh] overflow-hidden">
            <div className="loginform absolute z-2 h-full w-full flex flex-col sm:flex-row items-center justify-center">
                <div className="select-none h-[45%] sm:h-[100%] w-full sm:w-1/2 p-6 sm:p-12 flex flex-col items-end justify-end sm:justify-center ">
                    <p className=" text-[3.6vw] xs:text-[3vw] sm:text-[2.8vw] md:text-[2.6vw] amd:text-[2.4vw] lg:text-[2vw] leading-tight text-right">Start a New Chapter in your Life with </p>
                    <h2 className="text-[8vw] xs:text-[7vw] sm:text-[6vw] md:text-[5.5vw] amd:text-[5vw] lg:text-[5vw] leading-none text-right">Youthiapa</h2>
                    <h2 className="text-[8vw] xs:text-[7vw] sm:text-[6vw] md:text-[5.5vw] amd:text-[5vw] lg:text-[5vw] leading-none text-right"> Raised Right</h2>
                </div>
                <div className="logincard p-12 h-[55%] sm:h-[100%] w-full sm:w-1/2 flex flex-col items-start sm:justify-center">
                            <div className="w-full lg:w-3/4">
                             <div className="pb-4 sm:pb-6">
                                <h2 className="text-[10vw] xs:text-[8vw] sm:text-[5vw] md:text-[4.5vw] amd:text-[4.3vw] lg:text-[3.6vw] select-none leading-none tracking-wide font-semibold ">
                                    <Zoop> Welcome</Zoop>
                                </h2>
                                <p className="text-[2.8vw] xs:text-[2.3vw] sm:text-[1.6vw] md:text-[1.4vw] amd:text-[1.2vw] lg:text-[0.9vw] leading-none">Please enter yout details</p>
                             </div>

                             <input
                                 type="text"
                                 placeholder="Username (e.g, test)"
                                 className="w-full p-1 text-[3.8vw] xs:text-[2.8vw] sm:text-[2.2vw] md:text-[2vw] lg:text-[2vw] xl:text-xl border-b-1 lg:border-b-2 py-1 sm:py-2 md:py-2  text-start focus:outline-none tracking-normal"
                                 onChange={(e) => setForm({ ...form, username: e.target.value })}
                             />

                             <input
                                 type="password"
                                 placeholder="Password (e.g, testpass)"
                                 className="w-full p-1 text-[3.8vw] xs:text-[2.8vw] sm:text-[2.2vw] md:text-[2vw] lg:text-[2vw] xl:text-xl border-b-1 lg:border-b-2 py-1 sm:py-2 md:py-2  text-start focus:outline-none tracking-normal"
                                 onChange={(e) => setForm({ ...form, password: e.target.value })}
                             />

                             {error && (
                                    <p className="pt-1 text-[2.8vw] xs:text-[2.2vw] sm:text-[1.6vw] md:text-[1.4vw] amd:text-[1.2vw] lg:text-[0.9vw] leading-none text-red-400">{error}</p>
                             )}
                            <button
                                onClick={handleLogin}
                                disabled={!form.username || !form.password}
                                    className={` text-[3.8vw] xs:text-[3vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.4vw] xl:text-xl mt-6 sm:mt-8 md:mt-10 lg:mt-12 w-full px-4 py-2 lg:py-3 rounded-full font-semibold transition-all duration-200 ${!form.username || !form.password
                                        ? "bg-gray-300 cursor-not-allowed"
                                        : "bg-red-500 hover:bg-red-600 text-white"
                                    }`}
                            >
                                <Zoop>Login</Zoop>
                            </button>
                        </div>
                </div>
            </div>
            <div className="marquee h-[40%] sm:h-1/2 flex items-center sm:items-start w-full">
                <div className=" login-marquee1 flex items-center justify-center">
                    {marqueeImg}
                </div>

                <div className="login-marquee1 flex items-center justify-center">
                    {marqueeImg}
                </div>
            </div>

            <div className="marquee h-[60%] sm:h-1/2 flex items-end w-full">
                <div className=" login-marquee2 flex items-center justify-center">
                    {marqueeImg}
                </div>

                <div className="login-marquee2 flex items-center justify-center">
                    {marqueeImg}
                </div>
            </div>

        </div>
    </PageTransition>
    </>
    );
};

export default Login;
