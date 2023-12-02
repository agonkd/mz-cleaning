import { Link } from "react-router-dom";
import tools from "../../assets/images/pics/tools.png";

function Contact() {
  return (
    <section
      id="contact-us"
      aria-label="Contact Us"
      className="2xl:px-[10vw] xl:px-[5vw] md:py-32 px-8 pt-8 pb-16 flex lg:flex-row flex-col justify-between md:gap-32 gap-16"
    >
      <div className="max-w-3xl space-y-8 relative">
        <div className="space-y-4">
          <span className="text-sm text-teal font-semibold font-header uppercase tracking-[5px]">
            Kontakt
          </span>
          <h2 className="2xl:text-6xl md:text-4xl text-3xl font-semibold">
            Buchen Sie jetzt Ihren Reinigungsservice und genießen Sie einen
            frischen Start!
          </h2>
        </div>
        <p className="lg:text-xl">
          Sichern Sie sich unseren Reinigungsservice für einen frischen Start zu
          Hause oder im Büro. Wir bieten spezialisierte Reinigungsdienste für
          eine frische und saubere Umgebung. Buchen Sie jetzt und genießen Sie
          ein neues, sauberes Ambiente!
        </p>
        <Link
          to={"/contact"}
          className="block w-fit px-8 py-4 rounded-full bg-teal text-white font-semibold font-header"
        >
          Kontaktieren
        </Link>
      </div>
      <div className="min-w-[300px]">
        <img src={tools} alt="" className="w-full" />
      </div>
    </section>
  );
}

export default Contact;
