import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const handleRemove = (item) => {
        dispatch(removeFromCart({ id: item.id, size: item.size }));
    };

    return (
        <div className="max-w-4xl mx-auto p-4 pt-28 md:pt-42 ">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Your Cart</h2>

            {cart.length === 0 ? (
                <p className="text-base text-gray-600">Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cart.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-wrap md:flex-nowrap items-center justify-between border p-4 rounded gap-4"
                        >
                            <div className="flex items-center gap-4 flex-1 min-w-[250px]">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded"
                                />
                                <div className="space-y-1 max-w-xs">
                                    <h3 className="text-base sm:text-lg font-semibold break-words">
                                        {item.name}
                                    </h3>
                                    <div className="text-gray-500 text-sm sm:text-base space-y-0.5">
                                        <p>Price: ₹{item.price}</p>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Size: {item.size}</p>
                                    </div>
                                </div>
                            </div>
                            <span className="text-sm sm:text-lg font-bold text-right min-w-[80px]">
                                ₹{item.price * item.quantity}
                            </span>
                            <button
                                onClick={() => handleRemove(item)}
                                className="text-red-500 text-sm hover:underline">
                                Remove
                            </button>
                        </div>
                    ))}

                    <div className="text-right pt-4 border-t mt-6">
                        <p className="text-lg sm:text-xl font-semibold">
                            Total: ₹{calculateTotal()}
                        </p>
                    </div>
                    <div className="mt-5">
                        <button
                            className="cursor-pointer w-full bg-black hover:bg-rose-600 text-white py-2 sm:py-2.5 rounded-full font-semibold text-sm sm:text-base transition"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
