/*import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductViewModal from "./ProductViewModal";
import truncateText from "../../utils/truncateText";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";
import toast from "react-hot-toast";

const ProductCard = ({
        productId,
        productName,
        image,
        description,
        quantity,
        price,
        discount,
        specialPrice,
        about = false,
}) => {
    const [openProductViewModal, setOpenProductViewModal] = useState(false);
    const btnLoader = false;
    const [selectedViewProduct, setSelectedViewProduct] = useState("");
    const isAvailable = quantity && Number(quantity) > 0;
    const dispatch = useDispatch();

    const handleProductView = (product) => {
        if (!about) {
            setSelectedViewProduct(product);
            setOpenProductViewModal(true);
        }
    };

    const addToCartHandler = (cartItems) => {
        dispatch(addToCart(cartItems, 1, toast));
    };

    return (
        <div className="border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300">
            <div onClick={() => {
                handleProductView({
                    id: productId,
                    productName,
                    image,
                    description,
                    quantity,
                    price,
                    discount,
                    specialPrice,
                })
            }} 
                    className="w-full overflow-hidden aspect-3/2">
                <img 
                className="w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105"
                src={image}
                alt={productName}>
                </img>
            </div>
            <div className="p-4">
                <h2 onClick={() => {
                handleProductView({
                    id: productId,
                    productName,
                    image,
                    description,
                    quantity,
                    price,
                    discount,
                    specialPrice,
                })
            }}
                    className="text-lg font-semibold mb-2 cursor-pointer">
                    {truncateText(productName, 50)}
                </h2>
                
                <div className="min-h-20 max-h-20">
                    <p className="text-gray-600 text-sm">
                        {truncateText(description, 80)}
                    </p>
                </div>

            { !about && (
                <div className="flex items-center justify-between">
                {specialPrice ? (
                    <div className="flex flex-col">
                        <span className="text-gray-400 line-through">
                            ${Number(price).toFixed(2)}
                        </span>
                        <span className="text-xl font-bold text-slate-700">
                            ${Number(specialPrice).toFixed(2)}
                        </span>
                    </div>
                ) : (
                    <span className="text-xl font-bold text-slate-700">
                        {"  "}
                        ${Number(price).toFixed(2)}
                    </span>
                )}

                <button
                    disabled={!isAvailable || btnLoader}
                    onClick={() => addToCartHandler({
                        image,
                        productName,
                        description,
                        specialPrice,
                        price,
                        productId,
                        quantity,
                    })}
                    className={`bg-blue-500 ${isAvailable ? "opacity-100 hover:bg-blue-600" : "opacity-70"}
                        text-white py-2 px-3 rounded-lg items-center transition-colors duration-300 w-36 flex justify-center`}>
                    <FaShoppingCart className="mr-2"/>
                    {isAvailable ? "Add to Cart" : "Stock Out"}
                </button>
                </div>
            )}
                
            </div>
            <ProductViewModal 
                open={openProductViewModal}
                setOpen={setOpenProductViewModal}
                product={selectedViewProduct}
                isAvailable={isAvailable}
            />
        </div>
    )
}

export default ProductCard;
 */

import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductViewModal from "./ProductViewModal";
import truncateText from "../../utils/truncateText";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";
import toast from "react-hot-toast";

const ProductCard = ({
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
    about = false,
}) => {
    const [openProductViewModal, setOpenProductViewModal] = useState(false);
    const btnLoader = false;
    const [selectedViewProduct, setSelectedViewProduct] = useState("");
    const isAvailable = quantity && Number(quantity) > 0;
    const dispatch = useDispatch();

    const handleProductView = (product) => {
        if (!about) {
            setSelectedViewProduct(product);
            setOpenProductViewModal(true);
        }
    };

    const addToCartHandler = (cartItems) => {
        dispatch(addToCart(cartItems, 1, toast));
    };

    const productObj = {
        id: productId,
        productName,
        image,
        description,
        quantity,
        price,
        discount,
        specialPrice,
    };

    return (
        /* Outer Wrap matched to Catalog layout items */
        <div className="group relative cursor-pointer w-full flex flex-col">

            {/* Image Container with 3/4 aspect ratio */}
            <div
                onClick={() => handleProductView(productObj)}
                className="relative aspect-[4/4] overflow-hidden rounded-2xl bg-slate-100"
            >

                {/* Product Image */}
                <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={image}
                    alt={productName}
                />
                {/* Floating Cart Button */}
                {!about && (
                    <button
                        disabled={!isAvailable || btnLoader}
                        onClick={(e) => {
                            e.stopPropagation();
                            addToCartHandler({
                                image,
                                productName,
                                description,
                                specialPrice,
                                price,
                                productId,
                                quantity,
                            });
                        }}
                        className={`absolute bottom-4 left-4 right-4 h-12 rounded-xl font-bold text-sm shadow-lg backdrop-blur-sm flex items-center justify-center gap-2 transition-all duration-300 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0
                        ${isAvailable ? "bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white hover:bg-primary hover:text-white" : "bg-slate-200/90 text-slate-500 cursor-not-allowed"}`}
                    >
                        <FaShoppingCart />
                        {isAvailable ? "Add to Cart" : "Stock Out"}
                    </button>
                )}
            </div>

            {/* Text & Price Bottom Details Container */}
            <div
                className="mt-4 flex flex-col flex-1"
                onClick={() => handleProductView(productObj)}
            >
                <div className="space-y-1 flex-grow">
                    <h3 className="text-sm font-semibold text-slate-800">
                        {truncateText(productName, 50)}
                    </h3>

                    {/* Retained description from original logic */}
                    <p className="text-xs text-slate-700 leading-relaxed min-h-[2.5rem] line-clamp-2">
                        {truncateText(description, 80)}
                    </p>
                </div>

                {/* Pricing Block */}
                {!about && (
                    <div className="flex flex-col justify-end">
                        {specialPrice ? (
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-bold">
                                    ${Number(specialPrice).toFixed(2)}
                                </span>
                                <span className="text-sm font-medium  line-through">
                                    ${Number(price).toFixed(2)}
                                </span>
                            </div>
                        ) : (
                            <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                                ${Number(price).toFixed(2)}
                            </span>
                        )}
                    </div>
                )}
            </div>

            <ProductViewModal
                open={openProductViewModal}
                setOpen={setOpenProductViewModal}
                product={selectedViewProduct}
                isAvailable={isAvailable}
            />
        </div>
    )
}

export default ProductCard;
