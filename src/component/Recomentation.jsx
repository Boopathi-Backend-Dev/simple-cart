import React from "react";

const books = [
  {
    title: "The Whispering Shadows",
    author: "Sarah Michell",
    price: "$17",
    badge: "New",
    badgeColor: "bg-green-700",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "The Alchemist's Key",
    author: "Michael Andreson",
    price: "$13",
    badge: "New",
    badgeColor: "bg-green-700",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "The Art of Letting Go",
    author: "Emily Collins",
    price: "$12",
    badge: "New",
    badgeColor: "bg-green-700",
    image:
      "https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "The Forgotten Forrest",
    author: "Robert Lawson",
    price: "$21",
    badge: "-5%",
    badgeColor: "bg-red-600",
    image:
      "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "The Memory Collector",
    author: "James Parker",
    price: "$13",
    badge: "-10%",
    badgeColor: "bg-red-600",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Scary Castle on the Hill",
    author: "John Palfy",
    price: "$18",
    badge: "New",
    badgeColor: "bg-green-700",
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=800&auto=format&fit=crop",
  },
];

export const Recomentation = () => {
  return (
    <section className="w-full bg-[#f5f5f3] py-16 px-4 lg:px-10">
      
      {/* HEADING */}
      <div className="text-center mb-14">
        <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#111827]">
          Our recommendations
        </h1>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
        
        {books.map((book, index) => (
          <div key={index} className="group">

            {/* CARD */}
            <div className="bg-white rounded-3xl shadow-md overflow-hidden h-full flex flex-col">

              {/* IMAGE */}
              <div className="relative p-4">
                
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-[340px] object-cover rounded-2xl group-hover:scale-105 duration-500"
                />

                {/* BADGE */}
                <div
                  className={`absolute top-6 right-6 ${book.badgeColor} text-white text-sm px-4 py-1 rounded-full`}
                >
                  {book.badge}
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-5 pb-6 flex flex-col flex-1">

                {/* TITLE + AUTHOR */}
                <div>
                  <h2 className="text-[22px] font-medium text-[#111827] leading-snug min-h-[72px]">
                    {book.title}
                  </h2>

                  <p className="text-gray-500 text-lg mt-2">
                    {book.author}
                  </p>
                </div>

                {/* PRICE + BUTTON */}
                <div className="flex items-center justify-between mt-auto pt-8">
                  
                  <span className="text-3xl text-orange-500 font-medium">
                    {book.price}
                  </span>

                  <button className="border border-gray-400 px-8 py-2 rounded-full text-lg hover:bg-black hover:text-white duration-300">
                    Buy
                  </button>
                </div>

              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Recomentation;