// components/Footer.jsx

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Jose's Portfolio</p>
        <div className="social_icons">
          <a
            href="https://twitter.com/yngkron"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twiiter"></i>
          </a>
          <a
            href="https://github.com/josec07"
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jose-caudillo-100"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopner norefferer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
