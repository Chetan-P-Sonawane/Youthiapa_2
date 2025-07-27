import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import { toast, Bounce } from "react-toastify";

const ProductCard = ({ product }) => {
    const { isLoggedIn } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState(32); // Default size

    const increaseQty = () => setQuantity(prev => Math.min(prev + 1, 10));
    const decreaseQty = () => setQuantity(prev => Math.max(prev - 1, 1));

    const increaseSize = () => setSize(prev => Math.min(prev + 1, 45));
    const decreaseSize = () => setSize(prev => Math.max(prev - 1, 22));

    const handleAddToCart = () => {
        if (!isLoggedIn) {
            navigate("/login");
            return;
        }
        dispatch(addToCart({ ...product, quantity, size }));
        toast('Item Added to Cart', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "dark",
            transition: Bounce,
        });
    };

    const handleBuyNow = () => {
        if (!isLoggedIn) {
            navigate("/login");
            return;
        }
        dispatch(addToCart({ ...product, quantity, size }));
        toast('Item Added to Cart', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "dark",
            transition: Bounce,
        });
        navigate("/cart");
    };

    const goToProductDetail = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="border p-4 rounded shadow-sm bg-white w-full max-w-sm mx-auto text-sm sm:text-base">
            <div onClick={goToProductDetail} className="cursor-pointer">
                <img
                    src={product.image}
                    className="w-full h-[60vw] sm:h-[25vw] object-cover rounded"
                    alt={product.name}
                />
            </div>

            <div className="flex justify-between items-start mt-3">
                <div
                    onClick={goToProductDetail}
                    className="max-w-[70%] cursor-pointer"
                >
                    <h3 className="text-sm sm:text-lg font-semibold whitespace-normal break-words line-clamp-2">
                        {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">₹{product.price}</p>
                </div>

                <button
                    onClick={handleAddToCart}
                    className="cursor-pointer w-10 h-10 sm:w-12 sm:h-12 bg-black hover:bg-rose-600 text-white rounded-full flex items-center justify-center hover:scale-105 transition"
                >
                    <FaShoppingCart size={14} className="sm:text-base" />
                </button>
            </div>

            <div className="flex justify-between mt-4 gap-2 sm:gap-4 text-sm sm:text-base">
                <div className="flex items-center gap-2 sm:gap-3">
                    <button onClick={decreaseQty} className="cursor-pointer p-2 sm:p-2.5 bg-gray-200 rounded-full">
                        <FaMinus size={12} />
                    </button>
                    <span>{quantity}</span>
                    <button onClick={increaseQty} className="cursor-pointer p-2 sm:p-2.5 bg-gray-200 rounded-full">
                        <FaPlus size={12} />
                    </button>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                    <button onClick={decreaseSize} className="cursor-pointer p-2 sm:p-2.5 bg-gray-200 rounded-full">
                        <FaMinus size={12} />
                    </button>
                    <span>{size}</span>
                    <button onClick={increaseSize} className="cursor-pointer p-2 sm:p-2.5 bg-gray-200 rounded-full">
                        <FaPlus size={12} />
                    </button>
                </div>
            </div>

            <div className="mt-5">
                <button
                    onClick={handleBuyNow}
                    className="cursor-pointer w-full bg-black hover:bg-rose-600 text-white py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base transition"
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
