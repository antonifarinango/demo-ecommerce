import { Badge } from "@mui/material";
import { useState } from "react";
import { FaShoppingCart, FaSignInAlt, FaStore } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "../UserMenu";

const Navbar = () => {
    const path = useLocation().pathname;
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { cart } = useSelector((state) => state.carts);
    const { user } = useSelector((state) => state.auth);

    return (
        <header
  className={`bg-white sticky top-0 z-50 px-6 lg:px-20 py-4 transition-all duration-300`}
  
>
            <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-8 sm: w-full">
                <div className="flex items-center gap-12 w-full sm: justify-between">
                    <Link to="/" className="flex items-center gap-2 text-black">
                        <FaStore className="mr-2 text-3xl" />
                        <span className="font-[Poppins] text-slate-900 text-2xl font-black leading-tight tracking-tighter">E-Shop</span>
                    </Link>

                    <ul className={`flex flex-1 justify-between sm:gap-10 gap-4 sm:items-center  text-slate-800 sm:static absolute left-0 top-[70px] ${navbarOpen ? "w-full border-b border-primary/10 sm:border-none bg-white h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"}  transition-all duration-100 sm:h-fit sm:bg-none text-black sm:w-fit sm:flex-row flex-col px-4 sm:px-0`}>
                        <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center w-full py-2 gap-8">
                            <li className="font-medium transition-all duration-150">
                                <Link className={`${path === "/" ? "text-primary font-semibold" : "text-black"
                                    }`}
                                    to="/">
                                    Inicio
                                </Link>
                            </li>

                            <li className="font-medium transition-all duration-150">
                                <Link className={`${path === "/products" ? "text-primary font-semibold" : "text-black"
                                    }`}
                                    to="/products">
                                    Productos
                                </Link>
                            </li>


                            <li className="font-medium transition-all duration-150">
                                <Link className={`${path === "/about" ? "text-primary font-semibold" : "text-black"
                                    }`}
                                    to="/about">
                                    Sobre Nosotros
                                </Link>
                            </li>

                                    {/** <li className="font-medium transition-all duration-150">
                                <Link className={`${path === "/contact" ? "text-primary font-semibold" : "text-black"
                                    }`}
                                    to="/contact">
                                    Contáctanos
                                </Link>
                            </li>*/

                                    }
                            
                        </div>


                        <div className="flex items-center justify-between gap-15 sm:justify-end">
                            {/*<label className="hidden lg:flex flex-col min-w-40 h-10 max-w-64 w-full">
                                <div className="flex w-full flex-1 items-center gap-2 rounded-full h-full border-2 px-4">
                                    <FiSearch className="bg-blackleft-3 text-slate-800 size={20}" />
                                    <input
                                        className="flex w-full min-w-0 flex-1 border-none bg-transparent focus:outline-none text-sm font-medium placeholder:text-slate-500 outline-none"
                                        placeholder="Search the vibe..."
                                    />
                                </div>
                            </label>
                             */}
                            <li className="font-medium transition-all duration-150">
                                <Link className={`text-black`}
                                    to="/cart">
                                    <Badge
                                        showZero
                                        badgeContent={cart?.length || 0}
                                        color="primary"
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'top', horizontal: 'right', }}>
                                        <FaShoppingCart size={25} />
                                    </Badge>
                                </Link>
                            </li>

                            {(user && user.id) ? (
                                <li className="font-medium transition-all duration-150">
                                    <UserMenu />
                                </li>
                            ) : (
                                <li className="font-medium transition-all duration-150">
                                    <Link className="flex items-center space-x-2 px-4 py-[6px] 
                            border-2 bg-white
                            text-black font-semibold rounded-md
                            hover:border-primary hover:text-primary transition 
                            duration-300 ease-in-out transform "
                                        to="/login">
                                        <FaSignInAlt />
                                        <span>Login</span>
                                    </Link>
                                </li>
                            )}
                        </div>

                    </ul>

                    <button
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        className="sm:hidden flex items-center sm:mt-0 mt-2">
                        {navbarOpen ? (
                            <RxCross2 className="text-black text-3xl" />
                        ) : (
                            <IoIosMenu className="text-black text-3xl" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar;