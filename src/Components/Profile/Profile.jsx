import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import Zoop from "../WrapperAndComponents/Zoop";

const Profile = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate("/login");
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br bg-white px-4">
            <div className="bg-black text-white shadow-2xl rounded-3xl p-8 max-w-[400px] w-full text-center space-y-6">
                <h2 className="text-3xl font-bold text-white">User Profile</h2>

                <div className="space-y-2 text-left">
                    <p className="text-lg text-gray-400">
                        <span className="font-medium text-white">Username:</span> {user.username}
                    </p>
                    <p className="text-lg text-gray-400">
                        <span className="font-medium text-white">Password:</span> {user.password}
                    </p>
                </div>

                <button
                    onClick={handleLogout}
                    className="cursor-pointer mt-4 w-full bg-red-500 hover:bg-red-600 transition-all duration-200 text-white py-2 rounded-full font-semibold"
                >
                    <Zoop>
                        Logout
                    </Zoop>
                </button>
            </div>
        </div>
    );
};

export default Profile;
