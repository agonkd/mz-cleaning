import diamond from "../../assets/images/icons/teal-diamond.png";
import videobox from "../../assets/images/pics/video-box.png";

function Hero() {
  return (
    <header
      id="header"
      aria-label="Welcome to MZ-Clean.ch"
      className="xl:px-[10vw] md:px-[5vw] md:py-32 px-8 pt-8 pb-16 md:space-y-32 space-y-16 relative"
    >
      <section className="flex lg:flex-row flex-col justify-between lg:items-center lg:gap-32 gap-8">
        <div className="space-y-4">
          <p className="text-teal font-semibold font-header md:text-xl sm:text-lg">
            Willkommen bei MZ-Clean
          </p>
          <h1 className="font-medium 2xl:text-7xl md:text-5xl sm:text-4xl text-3xl">
            Ihre <br /> Reinigungsexperten
          </h1>
        </div>
        <div className="max-w-xl space-y-4 relative">
          <img
            src={diamond}
            alt="Diamond Icon"
            className="md:w-auto w-16 absolute sm:-top-16 -top-24 lg:-left-24 md:-right-24 sm:-right-8 right-0"
          />
          <p>
            Profi in Sachen Sauberkeit: Bei MZ-Clean sind wir auf professionelle
            Reinigungsdienstleistungen spezialisiert. Wir setzen modernste
            Methoden und Technologien ein, um Ihre Räumlichkeiten makellos zu
            hinterlassen.
          </p>
          <a
            href=""
            className="block w-fit px-8 py-4 rounded-full bg-teal text-white font-semibold font-header"
          >
            Erfahren Sie mehr
          </a>
        </div>
      </section>
      <div>
        <img
          src={videobox}
          alt="Cleaning Image"
          className="w-full h-full object-cover"
        />
        <div className="w-full md:h-[37%] sm:h-[25%] h-[20%] absolute bottom-0 left-0 bg-teal -z-10"></div>
      </div>
    </header>
  );
}

export default Hero;
