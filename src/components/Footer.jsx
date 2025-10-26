import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-green-800 to-green-600 text-base-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Grid layout for sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold flex items-center gap-2 mb-2">
              <img
                src="https://img.icons8.com/color/48/000000/leaf.png"
                alt="Logo"
                className="w-7 h-7"
              />
              GreenNest
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-green-50">
              Bringing greenery to your home! Explore plants that nurture both your space and soul.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="/about" className="hover:text-green-200 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-200 transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-green-200 transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-200 transition-transform duration-200 hover:scale-110"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-200 transition-transform duration-200 hover:scale-110"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-200 transition-transform duration-200 hover:scale-110"
              >
                <FaPinterest className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-green-500 mt-8 pt-4 text-center">
          <p className="text-sm sm:text-base text-green-100">
            &copy; {new Date().getFullYear()} <span className="font-semibold">GreenNest</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
