import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact Us"
      className="2xl:px-[10vw] xl:px-[5vw] md:py-32 px-8 py-16 grid items-center md:grid-cols-2 md:grid-rows-none grid-cols-none grid-rows-2 md:gap-16 lg:text-xl"
    >
      <div>
        <h2 className="font-semibold 2xl:text-6xl text- mb-8">Kontakt</h2>
        <p>
          Für alle Ihre Fragen, Anfragen und Terminvereinbarungen stehen wir
          Ihnen gerne zur Verfügung. Kontaktieren Sie uns:
        </p>
        <div className="flex xl:flex-row flex-col md:gap-16 gap-8 my-16 whitespace-nowrap">
          <div className="flex items-center gap-4">
            <div className="h-full p-2 flex justify-center items-center aspect-square bg-teal rounded-lg">
              <BsTelephone className="text-2xl text-white" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl text-header font-semibold">Telefon</h3>
              <p className="text-base">+41 76 683 09 77</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-full p-2 flex justify-center items-center aspect-square bg-teal rounded-lg">
              <TfiEmail className="text-2xl text-white" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl text-header font-semibold">Email</h3>
              <p className="text-base">mirlinda_zenuni@hotmail.com</p>
            </div>
          </div>
        </div>
        <p className="pb-4 border-b border-indigo-300">
          Linda Zenuni und das gesamte Team von MZ-Clean freuen sich darauf, von
          Ihnen zu hören und Ihre Anliegen zu besprechen. Zögern Sie nicht, uns
          zu kontaktieren, um Ihre Reinigungsbedürfnisse zu besprechen und
          maßgeschneiderte Lösungen zu finden.
        </p>
      </div>
      <form
        action=""
        id="contact-us"
        aria-label="Send us a message now!"
        className="p-8 bg-slate-50 rounded-lg space-y-6"
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
          <label htmlFor="fullname">Nachricht*</label>
          <textarea
            type="text"
            placeholder="Schreiben Sie hier Ihre Nachricht"
            rows={5}
            className="block w-full py-3 px-6 rounded-lg placeholder:text-sm mt-2"
          />
        </div>
        <button className="block w-fit px-8 py-4 rounded-full bg-teal text-white font-semibold font-header">
          Senden
        </button>
      </form>
    </section>
  );
}

export default Contact;
