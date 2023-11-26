import lady from "../../assets/images/pics/cleaning-lady.png";
import white from "../../assets/images/icons/white-diamond.png";

function Value() {
  return (
    <section
      id="value"
      aria-label="Company Values"
      className="xl:px-[10vw] md:px-[5vw] flex justify-center lg:flex-row flex-col xl:items-center"
    >
      <div className="bg-teal py-16 px-[5vw] lg:pr-32 space-y-4 text-zinc-800 [&>p]:lg:max-w-xl md:rounded-xl">
        <h1 className="text-3xl">Liebe Besucherinnen und Besucher</h1>
        <br />
        <p>
          Mein name ist Linda Zenuni, und ich bin stolz darauf, Sie auf unserer
          Website, &quot;mz-clean.ch&quot;, willkommen zu heißen. Als
          langjährige Expertin im Facility Management und der Reinigungsbranche
          habe ich das Vergnügen, Ihnen unsere Dienstleistungen vorzustellen.
        </p>
        <p>
          Mit Leidenschaft und Hingabe widme ich mich meiner Berufung, die
          sowohl Büro- als auch Privatkunden gleichermaßen zufriedenstellt. Hier
          bei MZ-Clean verstehen wir, dass saubere und gepflegte Räumlichkeiten
          einen erheblichen Einfluss auf das Wohlbefinden und die Produktivität
          haben können. Aus diesem Grund sind wir bestrebt, Ihre
          Reinigungsanforderungen in jedem Detail zu erfüllen.
        </p>
        <p>
          Unsere Dienstleistungen sind darauf ausgerichtet, Ihnen eine saubere
          und gesunde Umgebung zu bieten, sei es in Ihrem Zuhause oder am
          Arbeitsplatz. Wir setzen modernste Technologien und bewährte
          Reinigungsmethoden ein, um Ihre Räumlichkeiten in einen makellosen
          Zustand zu versetzen.
        </p>
        <p>
          Unsere Kunden schätzen nicht nur unsere Professionalität, sondern auch
          unsere Flexibilität. Wir passen unsere Dienstleistungen an Ihre
          spezifischen Anforderungen an und arbeiten eng mit Ihnen zusammen, um
          maßgeschneiderte Reinigungslösungen zu entwickeln.
        </p>
        <p>
          Wir bei MZ-Clean glauben, dass die Zufriedenheit unserer Kunden der
          Schlüssel zum Erfolg ist. Daher legen wir größten Wert auf Qualität
          und Kundenservice. Ihre Bedürfnisse stehen für uns an erster Stelle,
          und wir sind erst zufrieden, wenn Sie es sind.
        </p>
        <p>
          Wir laden Sie herzlich ein, mehr über unsere Dienstleistungen zu
          erfahren und uns die Gelegenheit zu geben, Ihre
          Reinigungsanforderungen zu erfüllen. Wir freuen uns darauf, Ihnen zu
          helfen, eine saubere und gesunde Umgebung zu schaffen.
        </p>
        <p>
          Vielen Dank für Ihr Interesse an MZ-Clean. Wir sind bereit, die
          Verantwortung für die Sauberkeit zu übernehmen, damit Sie sich in
          Ihren Räumen wohlfühlen können.
        </p>
        <p>Mit freundlichen Grüßen, </p>
        <p>Linda Zenuni</p>
      </div>
      <div className="h-fit lg:w-auto w-full relative lg:-left-16 xl:top-0 lg:top-8">
        <img
          src={lady}
          alt="Cleaning Lady"
          className="lg:max-w-sm w-full object-cover md:p-0 p-8"
        />
        <div className="absolute -bottom-8 lg:-left-16 -rotate-12">
          <img
            src={white}
            alt="Teal Diamond Icon"
            className="md:w-auto w-16 translate-x-8"
          />
          <img src={white} alt="Teal Diamond Icon" className="md:w-auto w-16" />
        </div>
      </div>
    </section>
  );
}

export default Value;
