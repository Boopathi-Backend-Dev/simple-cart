import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Simple\nLines",
    author: "Marina Diamond",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop",
    button: "Learn more",
  },
  {
    title: "New Book",
    author: "from Angela Rickman",
    image:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop",
    button: "Learn more",
  },
  {
    title: "25% OFF Summer Reads",
    author: 'Use code "SUMMER25" at checkout',
    image:
      "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?q=80&w=800&auto=format&fit=crop",
    button: "",
  },
  {
    title: "Best Seller",
    author: "New Collection",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
    button: "Learn more",
  },
  {
    title: "Reading Time",
    author: "Top Author Books",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop",
    button: "Learn more",
  },
  {
    title: "Book Store",
    author: "Special Edition",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800&auto=format&fit=crop",
    button: "Learn more",
  },
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  // NEXT
  const nextSlide = () => {
    if (current >= cards.length - 3) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  // PREV
  const prevSlide = () => {
    if (current === 0) {
      setCurrent(cards.length - 3);
    } else {
      setCurrent(current - 1);
    }
  };

  return (
    <section className="w-full bg-[#222222] py-8 px-3 sm:px-5 lg:px-8 overflow-hidden">
      
      <div className="relative">

        {/* SLIDER */}
        <div
          className="flex transition-transform duration-700 ease-in-out gap-4"
          style={{
            transform: `translateX(-${current * 33.5}%)`,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-[48.8%] xl:min-w-[32.3%]"
            >
              <div className="bg-[#f4f4f4] p-5 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-5 min-h-[320px]">
                
                {/* LEFT */}
                <div className="flex-1 text-center lg:text-left">
                  
                  <h1 className="text-3xl lg:text-5xl font-serif font-bold text-[#111827] leading-tight whitespace-pre-line">
                    {card.title}
                  </h1>

                  <p className="text-gray-500 mt-4 text-base lg:text-lg">
                    {card.author}
                  </p>

                  {card.button && (
                    <button className="mt-6 border border-orange-400 px-6 py-3 text-orange-500 hover:bg-orange-500 hover:text-white duration-300">
                      {card.button}
                    </button>
                  )}
                </div>

                {/* IMAGE */}
                <div className="flex-1 flex justify-center w-full">
                  <img
                    src={card.image}
                    alt="book"
                    className="w-full max-w-[240px] h-[250px] object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-110 duration-300"
        >
          <ChevronLeft size={22} />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-110 duration-300"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* DOTS */}
      <div className="flex items-center justify-center gap-3 mt-8">
        {[0, 1, 2, 3].map((dot) => (
          <button
            key={dot}
            onClick={() => setCurrent(dot)}
            className={`w-3 h-3 rounded-full duration-300 ${
              current === dot ? "bg-white scale-125" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;