import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
    PiArrowsSplit,
} from "react-icons/pi";

const Header = () => {
    const location = useLocation()
    return (
        <header className="bg-black">
            <div className="container flex items-center justify-between gap-4 py-4">
                <Link to="/" className="flex items-center gap-1">
                    <PiArrowsSplit className="fill-white text-[22px]" />
                    <p className="text-offwhite font-semibold text-[20px]">WorkZen.ai</p>
                </Link>
                {location.pathname === "/login" ? (<Link to="/signup" className="font-medium text-white/70 hover:text-white/90 transition-all duration-300">
                    Create a account
                </Link>) : location.pathname === "/signup" ? (<Link to="/login" className="font-medium text-white/70 hover:text-white/90 transition-all duration-300">
                    Login
                </Link>) : (<Link to="/signup" className="font-medium text-white/70 hover:text-white/90 transition-all duration-300">
                    Login
                </Link>)}

            </div>
            <div className="border-b border-offwhite/10"></div>

        </header>
    );
};

export default Header;
