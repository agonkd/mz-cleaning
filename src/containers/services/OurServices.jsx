import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { useEffect, useState } from "react";

import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function OurServices() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add an event listener to update the window width when it changes
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const contentArray = [
    {
      title: "Büroreinigung",
      paragraph:
        "Ein sauberes Arbeitsumfeld ist entscheidend für die Produktivität und das Wohlbefinden Ihrer Mitarbeiter. Unsere Büroreinigungsdienstleistungen sorgen für eine makellose Arbeitsumgebung, in der Ihre Mitarbeiter effizient arbeiten können.",
      img: "Card5.png",
    },
    {
      title: "Wohnungsreinigung",
      paragraph:
        "Übergabe-Reinigung: Wenn Sie Ihre Wohnung verlassen, sorgen wir dafür, dass Sie sie in einwandfreiem Zustand zurücklassen. Unsere Übergabe-Reinigung gewährleistet, dass Sie keine bösen Überraschungen erleben.",
      img: "Card2.png",
    },
    {
      title: "Räumungs-Reinigung",
      paragraph:
        "Übergabe-Reinigung: Wenn Sie Ihre Wohnung verlassen, sorgen wir dafür, dass Sie sie in einwandfreiem Zustand zurücklassen. Unsere Übergabe-Reinigung gewährleistet, dass Sie keine bösen Überraschungen erleben.",
      img: "Card3.png",
    },
    {
      title: "Unterhaltsreinigung",
      paragraph:
        "Ein sauberes Zuhause ist ein glückliches Zuhause. Unsere Unterhaltsreinigung hält Ihre Wohnräume stets frisch und einladend.",
      img: "Card4.png",
    },
    {
      title: "Umzugsreinigung",
      paragraph:
        "Beim Umziehen gibt es genug zu tun, und die Reinigung sollte kein zusätzlicher Stressfaktor sein. Wir kümmern uns um die gründliche Reinigung Ihrer alten oder neuen Räumlichkeiten, damit Sie sich auf Ihr neues Zuhause oder Büro freuen können.",
      img: "Card1.png",
    },
  ];

  return (
    <section
      id="our-services"
      aria-label="Our Services"
      className="2xl:px-[10vw] xl:px-[5vw] md:py-32 px-8 pt-8 pb-16 md:space-y-32 space-y-16"
    >
      <div className="max-w-3xl space-y-8 relative sapce-y-4">
        <span className="text-sm text-teal font-semibold font-header uppercase tracking-[5px]">
          Dienstleistungen
        </span>
        <h2 className="2xl:text-6xl md:text-4xl text-3xl font-semibold">
          Unsere Dienstleistungen
        </h2>
        <p className="lg:text-xl">
          Bei MZ-Clean bieten wir eine breite Palette von professionellen
          Reinigungsdienstleistungen an, um Ihre Anforderungen zu erfüllen.
        </p>
      </div>
      {windowWidth > 1000 ? (
        <section className="flex flex-wrap justify-center gap-8 [&>div]:w-[calc(33.333333%-22px)]">
          {contentArray.map((item, index) => (
            <div
              className="bg-cover bg-center rounded-xl aspect-[2/3] relative p-8 flex items-end"
              style={{
                backgroundImage: `url('/assets/${item.img}')`,
              }}
              key={index}
            >
              <a
                href=""
                className="block w-fit py-2 px-5 rounded-full bg-primary text-teal absolute top-8 right-8"
              >
                <IoIosArrowForward className="text-2xl" />
              </a>
              <div className="bg-white p-8 space-y-4 rounded-xl">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p>{item.paragraph}</p>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <Swiper
          pagination={true}
          modules={[Pagination]}
          spaceBetween={32}
          centeredSlides={true}
          className="mySwiper relative z-10"
        >
          {contentArray.map((item, index) => (
            <SwiperSlide
              className="bg-cover bg-center rounded-xl aspect-[2/3] relative p-8 flex items-end"
              style={{
                backgroundImage: `url('/assets/${item.img}')`,
              }}
              key={index}
            >
              <a
                href=""
                className="block w-fit py-2 px-5 rounded-full bg-primary text-teal absolute top-8 right-8"
              >
                <IoIosArrowForward className="text-2xl" />
              </a>
              <div className="bg-white p-8 space-y-4 rounded-xl absolute bottom-8 left-8 right-8">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p>{item.paragraph}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <p className="bg-teal text-zinc-800 p-8 rounded-xl">
        Wir bei MZ-Clean verstehen die Bedeutung von Sauberkeit und Hygiene, sei
        es zu Hause oder am Arbeitsplatz. Unsere erfahrenen Reinigungskräfte
        verwenden die besten Reinigungsmethoden und -produkte, um
        sicherzustellen, dass Ihre Räumlichkeiten immer in bestem Zustand sind.
        Verlassen Sie sich auf uns, um Ihnen bei Ihren Reinigungsbedürfnissen zu
        helfen, damit Sie sich auf die wichtigen Dinge im Leben konzentrieren
        können.
      </p>
      <div className="w-full flex md:flex-row flex-col justify-between items-start md:gap-32">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
          Frischer Start mit MZ-Clean: Buchen Sie jetzt für makellose Sauberkeit
        </h2>
        <Link
          to={"/about"}
          className="block translate-y-8 w-fit px-8 py-4 rounded-full bg-teal text-white font-semibold font-header whitespace-nowrap"
        >
          Kontaktieren
        </Link>
      </div>
    </section>
  );
}

export default OurServices;
