import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import logo from "../../assets/images/brand/logo.png";

function ContactUs() {
  return (
    <section
      id="contact"
      aria-label="Contact Us"
      className="xl:px-[10vw] md:px-[5vw] md:py-32 py-16 px-8 pt-8 pb-16 lg:grid grid-cols-2 md:gap-16 md:space-y-0 space-y-24 lg:text-xl"
    >
      <div>
        <h2 className="font-semibold 2xl:text-6xl md:text-4xl text-3xl mb-8">
          Kontakt aufnehmen
        </h2>
        <p>
          Für alle Ihre Fragen, Anfragen und Terminvereinbarungen stehen wir
          Ihnen gerne zur Verfügung. Kontaktieren Sie uns:
        </p>
        <br />
        <p>
          Linda Zenuni und das gesamte Team von MZ-Clean freuen sich darauf, von
          Ihnen zu hören und Ihre Anliegen zu besprechen. Zögern Sie nicht, uns
          zu kontaktieren, um Ihre Reinigungsbedürfnisse zu besprechen und
          maßgeschneiderte Lösungen zu finden.
        </p>
        <div className="flex md:flex-row flex-col md:gap-16 gap-8 my-16 whitespace-nowrap">
          <div className="flex gap-4">
            <div className="h-full p-2 flex justify-center items-center aspect-square bg-teal rounded-lg">
              <BsTelephone className="text-2xl text-white" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl text-header font-semibold">Phone</h3>
              <p className="text-base">+41 76 683 09 77</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="h-full p-2 flex justify-center items-center aspect-square bg-teal rounded-lg">
              <TfiEmail className="text-2xl text-white" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl text-header font-semibold">Email</h3>
              <p className="text-base">mirlinda_zenuni@hotmail.com</p>
            </div>
          </div>
        </div>
        <img src={logo} alt="MZ-Clean Logo" className="w-64" />
      </div>
      <div className="bg-slate-50 rounded-lg">
        <h2 className="text-2xl font-bold p-8">
          Kontaktieren Sie uns unkompliziert
        </h2>
        <p className="px-8">
          Wir sind gerne für Sie da und freuen uns auf Ihre Nachricht. Nutzen
          Sie unser bequemes Kontaktformular, um uns Ihr Anliegen mitzuteilen.
          Geben Sie einfach Ihre Kontaktdaten ein, wählen Sie den passenden
          Anlass aus und klicken Sie auf &quot;SENDEN&quot;, um uns Ihre
          Nachricht zu übermitteln.
        </p>
        <br />
        <form
          action=""
          id="contact-us"
          aria-label="Send us a message now!"
          className="p-8 md:m-8 mt-0 bg-teal rounded-lg space-y-6"
        >
          <div>
            <label htmlFor="fullname">Name Vorname*</label>
            <input
              type="text"
              placeholder="Geben Sie Ihren vollständigen Namen und Ihren Vornamen"
              className="block w-full py-3 px-6 rounded-lg placeholder:text-sm mt-2"
            />
          </div>
          <div>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              placeholder="Geben sie ihre E-Mail Adresse"
              className="block w-full py-3 px-6 rounded-lg placeholder:text-sm mt-2"
            />
          </div>
          <div>
            <label htmlFor="fullname">Betreff*</label>
            <select
              type="text"
              placeholder="Geben Sie Ihren Betreff"
              className="block w-full py-3 px-6 rounded-lg placeholder:text-sm mt-2"
            >
              <option className="hidden">Geben Sie Ihren Betreff</option>
              <option value="Anfrage">Anfrage</option>
              <option value="Angebot">Angebot</option>
              <option value="Reklamation">Reklamation</option>
              <option value="Sonstiges">Sonstiges</option>
            </select>
          </div>
          <div>
            <label htmlFor="fullname">Name Vorname*</label>
            <textarea
              type="text"
              placeholder="Schreiben Sie hier Ihre Nachricht"
              rows={5}
              className="block w-full py-3 px-6 rounded-lg placeholder:text-sm mt-2"
            />
          </div>
          <button className="block w-fit px-8 py-4 rounded-full bg-white text-teal font-semibold font-header">
            Senden
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
