import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-bold">GreenNest</h3>
            <p>Bringing greenery to your home!</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com"><FaFacebook className="text-2xl" /></a>
              <a href="https://instagram.com"><FaInstagram className="text-2xl" /></a>
              <a href="https://pinterest.com"><FaPinterest className="text-2xl" /></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <p>&copy; 2025 GreenNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;