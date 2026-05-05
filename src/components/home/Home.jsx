/*import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "./HeroBanner";
import { useEffect } from "react";
import { fetchProducts } from "../../store/actions";
import ProductCard from "../shared/ProductCard";
import Loader from "../shared/Loader";
import { FaExclamationTriangle } from "react-icons/fa";
import Footer from "../shared/Footer";

const Home = () => {
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.products);
    const { isLoading, errorMessage } = useSelector(
        (state) => state.errors
    );
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <div className="px-4 md:px-0">
            <div className="py-6">
                <HeroBanner />
            </div>
            
            <div className="py-5">
                <div className="flex flex-col justify-center items-center space-y-2">
                    <h1 className="text-slate-800 text-4xl font-bold"> Products</h1>
                        <span className="text-slate-700">
                            Discover our handpicked selection of top-rated items just for you!
                        </span>
                    
                </div>

                {isLoading ? (
                    <Loader />
                ) : errorMessage ? (
                    <div className="flex justify-center items-center h-[200px]">
                        <FaExclamationTriangle className="text-slate-800 text-3xl mr-2"/>
                        <span className="text-slate-800 text-lg font-medium">
                            {errorMessage}
                        </span>
                    </div>
                ) : (
            <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
                       {products && 
                       products?.slice(0,4)
                                .map((item, i) => <ProductCard key={i} {...item} />
                        )}
                    </div>
                    )}
            </div>
            <Footer/>
        </div>
    )
}

export default Home;



/*Nuevo estilo ecommerceRopa*/

import { motion } from 'framer-motion';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import HeroBanner from "./HeroBanner";
import { useEffect } from "react";
import { fetchProducts } from "../../store/actions";
import ProductCard from "../shared/ProductCard";
import Loader from "../shared/Loader";
import { FaExclamationTriangle } from "react-icons/fa";
import { FiArrowRight} from "react-icons/fi";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Home = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    const { isLoading, errorMessage } = useSelector(
        (state) => state.errors
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="w-full">
            {/* Hero Section Wrapper */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="px-6 lg:px-20 py-6"
            >
                <HeroBanner />
            </motion.div>

            {/* Featured Categories Grid (From react-vibe-store) */}
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="px-6 lg:px-20 py-12"
            >
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-black tracking-tighter uppercase">Shop by Core</h2>
                        <p className="text-slate-500 font-medium">Find your aesthetic</p>
                    </div>
                    <Link to="/catalog" className="text-primary font-bold flex items-center gap-1 hover:underline">
                        View All <FiArrowRight className="font-bold" size={18}/>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="group relative aspect-[3/4] overflow-hidden rounded-[50px] bg-slate-200">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.7), transparent), url('/hoddie2.png')" }}></div>
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-white text-2xl font-black tracking-tighter uppercase">Oversized</h3>
                        </div>
                        <Link to="/products" className="absolute inset-0"></Link>
                    </div>
                    <div className="group relative aspect-[3/4] overflow-hidden rounded-[50px] bg-slate-200">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.7), transparent), url('/pantalon1.png')" }}></div>
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-white text-2xl font-black tracking-tighter uppercase">Denim</h3>
                        </div>
                        <Link to="/products" className="absolute inset-0"></Link>
                    </div>
                    <div className="group relative aspect-[3/4] overflow-hidden rounded-[50px] bg-slate-200">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.7), transparent), url('/gorras1.png ')" }}></div>
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-white text-2xl font-black tracking-tighter uppercase">Accessories</h3>
                        </div>
                        <Link to="/products" className="absolute inset-0"></Link>
                    </div>
                </div>
            </motion.section>

            {/* Products Integrated into Vibe's Initial Styling */}
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="bg-primary/5 py-16"
            >
                <div className="px-6 lg:px-20 max-w-[1440px] mx-auto">
                    <div className="flex flex-col sm:flex-row items-center justify-between mb-10">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-4">
                                <h1 className="text-3xl font-black tracking-tighter uppercase">Products</h1>
                                <span className="bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded uppercase">Just In</span>
                            </div>
                            <span className="text-slate-500 font-medium">
                                Discover our handpicked selection of top-rated items just for you!
                            </span>
                        </div>
                        
                    </div>

                    {isLoading ? (
                        <Loader />
                    ) : errorMessage ? (
                        <div className="flex justify-center items-center h-[200px]">
                            <FaExclamationTriangle className="text-slate-800 text-3xl mr-2"/>
                            <span className="text-slate-800 text-lg font-medium">
                                {errorMessage}
                            </span>
                        </div>
                    ) : (
                        <div className="pb-6 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
                            {products && 
                                products?.slice(0,4).map((item, i) => <ProductCard key={i} {...item} />
                            )}
                        </div>
                    )}
                </div>
            </motion.section>

            {/* Newsletter Wrapper */}
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                className="px-6 lg:px-20 py-20"
            >
                <div className="bg-slate-900 dark rounded-[50px] overflow-hidden p-8 lg:p-16 relative flex flex-col items-center text-center gap-6">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
                    <h2 className="text-white text-4xl lg:text-5xl font-black tracking-tighter max-w-2xl relative z-10">Tu estilo empieza aquí</h2>
                    <p className="text-slate-300 dark:text-white/80 text-lg relative z-10 max-w-xl">Encuentra prendas que van contigo.</p>
                    <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md relative z-10" onSubmit={e => e.preventDefault()}>
                        {/**<input className="flex-1 px-6 py-4 bg-white rounded-full border-none focus:outline-none focus:ring-2 focus:ring-primary text-slate-900" placeholder="Your email address" type="email"/> */}
                        <button className="flex-1 bg-primary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">Ver Colección</button>
                    </form>
                </div>
            </motion.section>
        </div>
    )
}

export default Home;
