import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-gray-900">
      <footer className="footer md:w-2/3 md:mx-auto p-10 text-white flex justify-between items-start">
        <div>
          <h2 className="footer-title">PhoneBazar</h2>
          <p>Your trusted mobile phone marketplace.</p>
        </div>

        <div className="flex gap-6">
          <div>
            <h2 className="footer-title">Navigation</h2>
            <Link to="/" className="link link-hover">
              Home
            </Link>
            <Link to="/products" className="link link-hover">
              Products
            </Link>
            <Link to="/contact" className="link link-hover">
              Contact
            </Link>
          </div>

          <div>
            <h2 className="footer-title">Follow Us</h2>
            <a href="#" className="link link-hover">
              Facebook
            </a>
            <a href="#" className="link link-hover">
              Twitter
            </a>
            <a href="#" className="link link-hover">
              Instagram
            </a>
          </div>

          <div>
            <h2 className="footer-title">Contact</h2>
            <p>Email: support@phonebazar.com</p>
            <p>Phone: +880 1234 567890</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
