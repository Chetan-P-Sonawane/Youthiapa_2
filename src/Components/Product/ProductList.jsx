import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setProducts, filterByCategory, resetFilter } from "../../store/productSlice";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.filteredProducts);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => dispatch(setProducts(data)));
    }, [dispatch]);

    return (
        <div className="p-6">
            <div className="flex gap-10 mb-6 pl-6 lg:pl-8">
                <button
                    className="text-[2.8vw] xs:text-[2vw] sm:text-[1.6vw] md:text-[1.4vw] lg:text-[1.2vw] italic"
                    onClick={() => dispatch(resetFilter())}
                >
                    All
                </button>
                <button
                    className="text-[2.8vw] xs:text-[2vw] sm:text-[1.6vw] md:text-[1.4vw] lg:text-[1.2vw] italic"
                    onClick={() => dispatch(filterByCategory("tshirt"))}
                >
                    T-Shirts
                </button>
                <button
                    className="text-[2.8vw] xs:text-[2vw] sm:text-[1.6vw] md:text-[1.4vw] lg:text-[1.2vw] italic"
                    onClick={() => dispatch(filterByCategory("hoodie"))}
                >
                    Hoodies
                </button>
                <button
                    className="text-[2.8vw] xs:text-[2vw] sm:text-[1.6vw] md:text-[1.4vw] lg:text-[1.2vw] italic"
                    onClick={() => dispatch(filterByCategory("pants"))}
                >
                    Pants
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((item) => (
                    <ProductCard product={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
