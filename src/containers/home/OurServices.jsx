import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

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
      title: "Title 1",
      paragraph: "This is the content for paragraph 1.",
    },
    {
      title: "Title 2",
      paragraph: "This is the content for paragraph 2.",
    },
    {
      title: "Title 3",
      paragraph: "This is the content for paragraph 3.",
    },
  ];

  return (
    <div
      id="services"
      aria-label="Our Services"
      className="xl:px-[10vw] md:px-[5vw] md:py-32 px-8 py-16 md:space-y-32 space-y-16"
    >
      <div className="w-full flex md:flex-row flex-col justify-between md:items-end">
        <div className="space-y-4">
          <span className="text-sm text-teal font-semibold font-header uppercase tracking-[5px]">
            Dienstleistungen
          </span>
          <h2 className="2xl:text-6xl md:text-4xl text-3xl font-semibold">
            Unsere Dienstleistungen
          </h2>
        </div>
        <a
          href=""
          className="block translate-y-8 w-fit px-8 py-4 rounded-full bg-teal text-white font-semibold font-header"
        >
          Alle ansehen
        </a>
      </div>
      {windowWidth > 1000 ? (
        <section className="grid md:grid-cols-3 grid-cols-none md:grid-rows-none grid-rows-3 gap-8">
          {contentArray.map((item, index) => (
            <div
              className="bg-slate-200 rounded-xl aspect-[2/3] relative p-8 flex items-end"
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
              className="bg-slate-200 rounded-xl aspect-[2/3] relative p-8 flex items-end"
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
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default OurServices;
