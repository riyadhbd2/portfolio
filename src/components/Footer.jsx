import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="mt-36 px-4 pb-8 text-center text-[var(--text-secondary)]">
      <h1 className="theme-section-title text-lg font-bold">Easir Arafat</h1>

      <div className="mt-3 flex flex-wrap justify-center gap-2">
        <Link className="theme-nav-link rounded-full px-3 py-2" to="#about">
          About
        </Link>
        <Link className="theme-nav-link rounded-full px-3 py-2" to="#skills">
          Skills
        </Link>
        <Link
          className="theme-nav-link rounded-full px-3 py-2"
          to="#experience"
        >
          Experience
        </Link>
        <Link className="theme-nav-link rounded-full px-3 py-2" to="#projects">
          Projects
        </Link>
        <Link
          className="theme-nav-link rounded-full px-3 py-2"
          to="#education"
        >
          Education
        </Link>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => window.open("https://www.facebook.com/riyadhbd2", "_blank")}
          className="theme-social-button mt-5 text-xl"
          type="button"
          aria-label="Open Facebook profile"
        >
          <FaFacebookF />
        </button>
        <button
          onClick={() => window.open("https://x.com/riyadhbdt2", "_blank")}
          className="theme-social-button mt-5 text-md"
          type="button"
          aria-label="Open X profile"
        >
          <BsTwitterX />
        </button>
        <button
          onClick={() =>
            window.open("https://www.instagram.com/riyadh_bd2/", "_blank")
          }
          className="theme-social-button mt-5"
          type="button"
          aria-label="Open Instagram profile"
        >
          <FaInstagram className="text-xl" />
        </button>
        <button
          onClick={() =>
            window.open("https://www.linkedin.com/in/earafat/", "_blank")
          }
          className="theme-social-button mt-5"
          type="button"
          aria-label="Open LinkedIn profile"
        >
          <FaLinkedin className="text-xl" />
        </button>
      </div>

      <p className="mt-3 text-xs">© 2025 Easir Arafat. All rights reserved.</p>
    </div>
  );
};

export default Footer;
