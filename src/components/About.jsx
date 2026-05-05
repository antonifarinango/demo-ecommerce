/*
import ProductCard from "./shared/ProductCard";

const products = [
    {
        image: "https://embarkx.com/sample/placeholder.png",
        productName: "iPhone 13 Pro Max",
        description:
          "The iPhone 13 Pro Max offers exceptional performance with its A15 Bionic chip, stunning Super Retina XDR display, and advanced camera features for breathtaking photos.",
        specialPrice: 720,
        price: 780,
      },
      {
        image: "https://embarkx.com/sample/placeholder.png",
        productName: "Samsung Galaxy S21",
        description:
          "Experience the brilliance of the Samsung Galaxy S21 with its vibrant AMOLED display, powerful camera, and sleek design that fits perfectly in your hand.",
        specialPrice: 699,
        price: 799,
      },
      {
        image: "https://embarkx.com/sample/placeholder.png",
        productName: "Google Pixel 6",
        description:
          "The Google Pixel 6 boasts cutting-edge AI features, exceptional photo quality, and a stunning display, making it a perfect choice for Android enthusiasts.",
        price: 599,
        specialPrice: 400,
      }
];

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
                About Us
            </h1>
           <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="text-lg mb-4">
                        Welcome to our e-commerce store! We are dedicated to providing the
                        best products and services to our customers. Our mission is to offer
                        a seamless shopping experience while ensuring the highest quality of
                        our offerings.
                    </p>
                </div>

                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <img
                        src="https://embarkx.com/sample/placeholder.png"
                        alt="About Us"
                        className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"></img>
                </div>
           </div>


           <div className="py-7 space-y-8">
            <h1 className="text-slate-800 text-4xl font-bold text-center">
                Our Products
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {products.map((product, index) => (
                <ProductCard 
                    key={index}
                    image={product.image}
                    productName={product.productName}
                    description={product.description}
                    specialPrice={product.specialPrice}
                    price={product.price}
                    about
                />
               ))
               }
                

            </div>
           </div>
        </div>
    );
}

export default About;
*/
import { motion } from 'framer-motion';
import { MdVerifiedUser, MdOutlineChat, MdOutlinePayments, MdLocalShipping } from "react-icons/md";
import { FiSend } from "react-icons/fi";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AboutContact() {
    return (
        <div className="flex-1 flex flex-col items-center w-full">
            {/* Hero Section: Our Story */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="w-full max-w-[1200px] px-4 sm:px-6 py-10 md:py-20"
            >
                <div className="relative overflow-hidden rounded-[30px] sm:rounded-[50px] bg-slate-900 flex items-center min-h-[350px] sm:min-h-[450px] md:min-h-[550px]">

                    {/* Background */}
                    <div
                        className="absolute inset-0 opacity-60 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                `url(/s_4.webp)`,
                        }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent" />

                    {/* Content */}
                    <div className="relative z-10 px-6 sm:px-10 md:px-16 py-10 max-w-xl">

                        <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                            The Rebellion
                        </span>

                        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 sm:mb-6">
                            WE ARE THE <br />
                            <span className="text-primary italic">VIBE</span> CULTURE
                        </h1>

                        <p className="text-slate-200 text-sm sm:text-base md:text-lg font-medium max-w-md">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere minus sunt consectetur. Ullam placeat explicabo nobis ea at, cum voluptatum dolorum dolore consequatur molestias. Voluptatibus facilis beatae delectus natus dolor!
                        </p>

                    </div>
                </div>
            </motion.section>

            {/* Story & Process Section */}
            {/*Para usar caja de contacto *className="bg-primary w-full max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 pb-20" */}
            <motion.section
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                className="w-full max-w-[1200px] px-6 gap-16 pb-20"
            >
                <div className="space-y-8">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900  mb-4 uppercase tracking-tight">The Origin</h2>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            Started in a crowded dorm room in 2022, VIBE YOUTH was born out of frustration with generic fast fashion. We wanted pieces that felt like they had a soul—garments that screamed identity. Today, we are a collective of designers, artists, and rebels pushing the boundaries of streetwear.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, totam. Commodi a iure, provident vero nam dolorem cumque ducimus corrupti consectetur quisquam. Reiciendis nesciunt dignissimos tenetur dolorum quisquam, tempore aliquid!
                        </p>
                    </div>
                    {/* Manual Confirmation / Trust Section */}
                    <div className="border-black/15 border-2 p-8 rounded-xl border">
                        <h3 className="text-xl font-bold text-slate-900  mb-6 flex items-center gap-2">
                            <MdVerifiedUser size={26} className='text-primary' />
                            Direct Trust Commerce
                        </h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 size-12 bg-primary rounded-xl flex items-center justify-center text-white">
                                    <MdOutlineChat size={25} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">WhatsApp Confirmation</h4>
                                    <p className="text-sm text-slate-600">After checkout, we reach out personally on WhatsApp to confirm your style and size. Real humans, no bots.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 size-12 bg-primary rounded-xl flex items-center justify-center text-white">
                                    <MdOutlinePayments size={25} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Direct Transfer</h4>
                                    <p className="text-sm text-slate-600">Secure payment via Bank Transfer or Digital Wallets. We skip the middleman gateway fees to keep our prices fair for you.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 size-12 bg-primary rounded-xl flex items-center justify-center text-white">
                                    <MdLocalShipping size={25} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Manual Verification</h4>
                                    <p className="text-sm text-slate-600">Once payment screenshot is received, your order is instantly moved to the priority shipping queue.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section 
                <div className="border-black/15 border-2 p-8 md:p-10 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none border">
                    <h2 className="text-3xl font-black mb-2 uppercase tracking-tight">Drop a Message</h2>
                    <p className="mb-8">Got questions about an order or just want to collab?</p>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Your Full Name</label>
                            <input className="w-full border-none rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-slate-900 transition-all" placeholder="Alex Vibe" type="text" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Email Address</label>
                            <input className="w-full border-none rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-slate-900 transition-all" placeholder="alex@vibe.com" type="email" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700">Message</label>
                            <textarea className="w-full border-none rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-slate-900 transition-all" placeholder="Tell us what's on your mind..." rows="4"></textarea>
                        </div>
                        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 group">
                            SEND MESSAGE
                            <FiSend size={19} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                    <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-4">
                        <div>
                            <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Location</h5>
                            <p className="text-sm font-bold">Harajuku District, Tokyo</p>
                        </div>
                        <div>
                            <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Instagram</h5>
                            <p className="text-sm font-bold">@vibeyouth_official</p>
                        </div>
                    </div>
                </div>*/}
            </motion.section>
        </div>
    );
}
