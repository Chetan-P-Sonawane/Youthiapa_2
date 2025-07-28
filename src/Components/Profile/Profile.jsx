import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingBag, FaSignOutAlt, FaUserEdit, FaCog } from "react-icons/fa";
import Zoop from "../WrapperAndComponents/Zoop";
import PageTransition from "../PageTransition/PageTransition";
import { toast } from "react-toastify";

const Profile = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate("/login");
    };

    const textClass = "text-[2.8vw] xs:text-[2.3vw] sm:text-[1.6vw] md:text-[1.4vw] amd:text-[1.2vw] lg:text-[0.9vw]";

    const ActionButton = ({ icon: Icon, label, onClick }) => (
        <button
            onClick={onClick}
            className={`cursor-pointer flex items-center justify-between w-full px-5 py-4 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-all duration-200 ${textClass} text-gray-800`}
        >
            <span className={`${textClass} flex items-center gap-3`}>
                <Icon />
                {label}
            </span>
            <span className="text-sm text-gray-400">&rarr;</span>
        </button>
    );

    return (
        <PageTransition>
            <div className=" min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-32 flex items-center justify-center">
                <div className=" w-full max-w-md bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-200 text-gray-800 space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-2">
                        <h2 className="font-bold tracking-tight text-[7vw] sm:text-[5vw] md:text-[3.5vw] lg:text-[2.8vw] xl:text-3xl leading-none text-black">
                            Welcome, {user.username}
                        </h2>
                        <p className={`${textClass} leading-none text-gray-500`}>Manage your preferences & orders</p>
                    </div>

                    {/* User Info */}
                    <div className={`text-left space-y-2 bg-gray-100 border border-gray-300 rounded-xl p-4 ${textClass}`}>
                        <p>
                            <span className="text-gray-500">Username:</span> {user.username}
                        </p>
                        <p>
                            <span className="text-gray-500">Password:</span> {user.password}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-4">
                        <ActionButton icon={FaHeart} label="Favorites" onClick={() => toast("Coming Soon")} />
                        <ActionButton icon={FaShoppingBag} label="My Orders" onClick={() => toast("Coming Soon")} />
                        <ActionButton icon={FaUserEdit} label="Edit Profile" onClick={() => toast("Coming Soon")} />
                        <ActionButton icon={FaCog} label="Settings" onClick={() => toast("Coming Soon")} />
                    </div>

                    {/* Logout */}
                    <button
                        onClick={handleLogout}
                        className={`mt-6 w-full py-3 bg-red-500 hover:bg-red-600 rounded-full font-semibold text-white flex items-center justify-center gap-3 transition-all ${textClass}`}
                    >
                        <FaSignOutAlt className={textClass} />
                        <Zoop>Logout</Zoop>
                    </button>
                </div>
            </div>
        </PageTransition>
    );
};

export default Profile;
