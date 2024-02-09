import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="font-workSans">
      <hr className=" border-blue-gray-50" />
      <footer className=" flex flex-row w-full bg-white p-4 shadow-xl items-center justify-between">
        <div>
          <p className="block text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
            © {currentYear} Course Management
          </p>
        </div>
        <div className="flex flex-row gap-6 text-xl">
          <button>
            <Link to='https://www.facebook.com/mits005' target="blank">
              <FaFacebook className="hover:text-blue-500"></FaFacebook>
            </Link>
          </button>
          <button>
            <Link to='https://twitter.com/moniru005' target="blank">
              <FaTwitter className="hover:text-blue-500"></FaTwitter>
            </Link>
            
          </button>
          <button>
            <Link to='https://www.linkedin.com/in/moniru005/' target="blank">
              <FaLinkedin className="hover:text-blue-500"></FaLinkedin>
            </Link>
          </button>
          <button>
            <Link to='https://github.com/moniru005' target="blank">
              <FaGithub className="hover:text-blue-500"></FaGithub>
            </Link>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
