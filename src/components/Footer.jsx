import logo from "../assets/images/brand/logo-dark.png";

function Footer() {
  return (
    <footer
      id="footer"
      aria-label="Footer"
      className="bg-neutral-900 2xl:px-[10vw] xl:px-[5vw] p-8 text-stone-300"
    >
      <a href="/" className="md:w-48 w-32 border-b">
        <img src={logo} alt="MZ-Clean Logo" />
      </a>
      <hr className="my-8" />
      <div className="flex flex-wrap gap-4 justify-between">
        <p>Copyright &copy; 2023 | Design by GranIT</p>
        <p>Terms of Use | Privacy Policy</p>
      </div>
    </footer>
  );
}

export default Footer;
