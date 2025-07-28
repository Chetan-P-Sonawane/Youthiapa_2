import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PageTransition from "../PageTransition/PageTransition";

const ProductDetail = () => {
    const { id } = useParams();
    const products = useSelector((state) => state.products.allProducts);
    const product = products.find((item) => item.id === parseInt(id));

    if (!product) {
        return <div className="p-6 text-center text-red-600">Product not found.</div>;
    }

    return (
    <PageTransition>
        <div className="h-[100vh] flex items-center justify-center p-4 md:p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 bg-white shadow-xl rounded-2xl overflow-hidden">
                <div className="md:w-1/2 bg-gray-100 p-4">
                    <img
                        src={product.image}
                        alt={product.name || "Product Image"}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

                <div className="md:w-1/2 p-4 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        {product.name || "Unnamed Product"}
                    </h1>

                    <p className="text-gray-700 text-lg mb-4">
                        Experience top-notch quality with our exclusive product designed for modern style and comfort.
                    </p>

                    <p className="text-xl font-semibold text-black mb-6">
                        ₹{product.price}
                    </p>

                    <button className="cursor-pointer w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </PageTransition>
    );
};

export default ProductDetail;
