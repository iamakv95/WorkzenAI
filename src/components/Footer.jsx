import React from "react";
import { Link } from "react-router-dom";
import { socialMedia } from "../constant";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-offwhite/20">
      <div className="container">
        <div className="flex justify-between items-center gap-6 py-4">
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-offwhite/60 hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link to="/" className="text-offwhite/60 hover:text-white">
              Privacy policy
            </Link>
          </div>
          <div>
            <p className="text-offwhite/70">Copyright @2023 jobi inc.</p>
          </div>
          <div className="flex items-center gap-6">
            {socialMedia.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-offwhite/60 hover:text-white transition-all duration-300"
              >
                <link.iconURL />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
