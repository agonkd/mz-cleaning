import lady from "../../assets/images/pics/cleaning-lady.png";
import white from "../../assets/images/icons/white-diamond.png";
import teal from "../../assets/images/icons/teal-diamond.png";

function Value() {
  return (
    <section
      id="value"
      aria-label="Our Values"
      className="xl:px-[10vw] md:px-[5vw] md:py-32 px-8 py-16 flex lg:flex-row flex-col justify-between gap-32"
    >
      <div className="2xl:max-w-3xl xl:max-w-xl max-w-lg space-y-8 relative">
        <img
          src={teal}
          alt="Teal Diamond Icon"
          className="md:w-auto w-16 absolute top-0 md:-right-32 right-0"
        />
        <div className="space-y-4">
          <span className="text-sm text-teal font-semibold font-header uppercase tracking-[5px]">
            Über Uns
          </span>
          <h2 className="lg:text-3xl text-2xl font-semibold">
            Liebe Besucherinnen und Besucher
          </h2>
        </div>
        <p className="lg:text-xl">
          Mein Name ist <span className="text-teal">Linda Zenuni</span>, und ich
          bin stolz darauf, Sie auf unserer Website,{" "}
          <span className="text-teal">&quot;mz-clean.ch&quot;</span>, willkommen
          zu heißen. Als langjährige Expertin im Facility Management und der
          Reinigungsbranche habe ich das Vergnügen, Ihnen unsere
          Dienstleistungen vorzustellen.
        </p>
        <p className="lg:text-xl">
          Mit Leidenschaft und Hingabe widme ich mich meiner Berufung, die
          sowohl Büro- als auch Privatkunden gleichermaßen zufriedenstellt. Hier
          bei MZ-Clean verstehen wir, dass saubere und gepflegte Räumlichkeiten
          einen erheblichen Einfluss auf das Wohlbefinden und die Produktivität
          haben können. Aus diesem Grund sind wir bestrebt, Ihre
          Reinigungsanforderungen in jedem Detail zu erfüllen.
        </p>
        <a
          href=""
          className="block translate-y-8 w-fit px-8 py-4 rounded-full bg-teal text-white font-semibold font-header"
        >
          Erfahren Sie mehr
        </a>
      </div>
      <div className="relative rounded-xl">
        <img
          src={lady}
          alt="Cleaning Lady"
          className="w-full max-w-xl h-full object-cover lg:aspect-[2/3] aspect-square rounded-xl"
        />
        <div className="absolute -bottom-8 lg:-left-16 -left-8 -rotate-12">
          <img
            src={white}
            alt="Teal Diamond Icon"
            className="w-full translate-x-8"
          />
          <img src={teal} alt="Teal Diamond Icon" />
        </div>
      </div>
    </section>
  );
}

export default Value;
