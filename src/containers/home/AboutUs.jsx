import light from "../../assets/images/icons/white-diamond.png";
import dark from "../../assets/images/icons/dark-diamond.png";

function AboutUs() {
  return (
    <section
      id="about-us"
      aria-label="About Us"
      className="2xl:px-[10vw] xl:px-[5vw] md:py-32 px-8 py-16 md:space-y-32 space-y-16 flex lg:flex-row flex-col lg:gap-32"
    >
      <div className="space-y-16">
        <div className="space-y-4">
          <h2 className="font-semibold lg:text-3xl text-2xl">
            Alles aus einer Hand:
          </h2>
          <p className="lg:text-xl">
            Unser Unternehmen bietet eine breite Palette von
            Reinigungsdienstleistungen, darunter Umzugsreinigung,
            Fassadenreinigung und Büroreinigung. Wir kümmern uns um jede
            Reinigungsaufgabe, die Sie haben.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="font-semibold lg:text-3xl text-2xl">
            Ihr zuverlässiger Partner:
          </h2>
          <p className="lg:text-xl">
            Wir legen Wert auf Qualität und Kundenzufriedenheit. Mit MZ-Clean an
            Ihrer Seite können Sie sich auf eine zuverlässige und professionelle
            Zusammenarbeit freuen.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="font-semibold lg:text-3xl text-2xl">
            Bereit für Ihre Anforderungen:
          </h2>
          <p className="lg:text-xl">
            Egal, ob es sich um private Wohnungen oder gewerbliche Büros handelt
            - wir passen unsere Dienstleistungen an Ihre spezifischen
            Bedürfnisse an. Vertrauen Sie auf MZ-Clean für Sauberkeit und
            Frische.
          </p>
          <p className="lg:text-xl">
            Wir freuen uns darauf, mit Ihnen zusammenzuarbeiten und Ihre
            Reinigungsanforderungen zu erfüllen.
            <span className="text-teal ml-2">Willkommen bei MZ-Clean!</span>
          </p>
        </div>
      </div>
      <div className="w-full max-w-[350px] aspect-square p-8 rounded-xl bg-teal flex flex-col justify-center items-center relative">
        <img
          src={light}
          alt="Light Diamond Icon"
          className="absolute left-8 top-8"
        />
        <p className="font-header text-white text-8xl">100%</p>
        <p className="text-primary text-xl">Zufriedene Kunden</p>
        <img
          src={dark}
          alt="Dark Diamond Icon"
          className="absolute bottom-8 right-8"
        />
      </div>
    </section>
  );
}

export default AboutUs;
