import React from "react";

const getBookImage = (id) => {
  const images = [
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524578271613-d550eacf6090?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=800&auto=format&fit=crop",
  ];

  return images[id % images.length];
};

const readersBooks = [
  {
    title: "The Magic Adventures of Luna and Leo",
    author: "Emily Thompson",
    price: "$12",
    badge: "New",
    badgeColor: "bg-green-700",
    image: getBookImage(0),
  },
  {
    title: "The Mystery of Missing Pencil",
    author: "Alex Carter",
    price: "$7",
    image: getBookImage(1),
  },
  {
    title: "Professor Paws",
    author: "David Robinson",
    price: "$9",
    badge: "-10%",
    badgeColor: "bg-pink-600",
    image: getBookImage(2),
  },
  {
    title: "Gary & His Giant Dog",
    author: "Rex Wigtail",
    price: "$13",
    image: getBookImage(3),
  },
];

const selfBooks = [
  {
    title: "12 Rules of Brain",
    author: "James Butter",
    price: "$24",
    image: getBookImage(4),
  },
  {
    title: "The Laws of Critical Thinking",
    author: "Bella Gibson",
    price: "$7",
    badge: "New",
    badgeColor: "bg-green-700",
    image: getBookImage(5),
  },
  {
    title: "How to be loved",
    author: "Simon Collins",
    price: "$9",
    image: getBookImage(0),
  },
  {
    title: "Meditation, Excercise & Nutrition",
    author: "Michael Key",
    price: "$13",
    image: getBookImage(1),
  },
];

const bestSellers = [
  {
    no: "1",
    title: "The Quantum Paradox",
    author: "Daniel Lawson",
    price: "$13",
    image: getBookImage(2),
  },
  {
    no: "2",
    title: "Ravenswood Manor",
    author: "Evelyn Sinclair",
    price: "$9",
    image: getBookImage(3),
  },
  {
    no: "3",
    title: "Watchmen",
    author: "Harper Anderson",
    price: "$22",
    image: getBookImage(4),
  },
  {
    no: "4",
    title: "The Starlight Prophecy",
    author: "Benjamin Richards",
    price: "$6",
    image: getBookImage(5),
  },
  {
    no: "5",
    title: "Little Songbird",
    author: "Lily Benett",
    price: "$14",
    image: getBookImage(0),
  },
];

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden h-full flex flex-col group hover:-translate-y-2 duration-300">
      
      {/* IMAGE */}
      <div className="relative p-4 overflow-hidden">
        <img
          src={book.image}
          alt={book.title}
          loading="lazy"
          className="w-full h-[260px] object-cover rounded-2xl group-hover:scale-105 duration-500"
        />

        {book.badge && (
          <div
            className={`absolute top-6 right-6 ${book.badgeColor} text-white text-sm px-4 py-1 rounded-full`}
          >
            {book.badge}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="px-5 pb-6 flex flex-col flex-1">
        
        <div>
          <h2 className="text-[20px] font-medium leading-snug text-[#111827] min-h-[60px]">
            {book.title}
          </h2>

          <p className="text-gray-500 mt-2">
            {book.author}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-6">
          <span className="text-3xl text-orange-500 font-medium">
            {book.price}
          </span>

          <button className="border border-gray-400 px-6 py-2 rounded-full hover:bg-black hover:text-white duration-300">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export const Reader = () => {
  return (
    <section className="w-full bg-[#f5f5f3] py-10 px-4 lg:px-8">
      
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        
        {/* LEFT SIDE */}
        <div className="xl:col-span-3 space-y-6">
          
          {/* FOR LITTLE READERS */}
          <div className="bg-[#f1f1ef] p-6 rounded-3xl">
            
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl lg:text-4xl font-serif font-bold text-[#111827]">
                For little readers
              </h1>

              <button className="text-gray-500 hover:text-black duration-300">
                View more
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {readersBooks.map((book, index) => (
                <BookCard key={index} book={book} />
              ))}
            </div>
          </div>

          {/* SELF DEVELOPMENT */}
          <div className="bg-[#f1f1ef] p-6 rounded-3xl">
            
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl lg:text-4xl font-serif font-bold text-[#111827]">
                Self-development
              </h1>

              <button className="text-gray-500 hover:text-black duration-300">
                View more
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {selfBooks.map((book, index) => (
                <BookCard key={index} book={book} />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#f1f1ef] p-6 rounded-3xl h-full">
          
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-[#111827]">
              Bestsellers
            </h1>

            <button className="text-gray-500 hover:text-black duration-300">
              View more
            </button>
          </div>

          <div className="space-y-6">
            {bestSellers.map((book, index) => (
              <div
                key={index}
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-gray-300 pb-5 hover:bg-white hover:shadow-md rounded-2xl p-3 duration-300 cursor-pointer"
              >
                
                {/* MOBILE TOP */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  
                  {/* NUMBER */}
                  <h1 className="text-4xl lg:text-5xl font-serif text-[#111827] min-w-[40px]">
                    {book.no}
                  </h1>

                  {/* IMAGE */}
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-[90px] h-[120px] object-cover rounded-xl group-hover:scale-105 duration-500"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <h2 className="text-[18px] font-medium text-[#111827] leading-snug">
                    {book.title}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    {book.author}
                  </p>

                  <span className="text-2xl text-orange-500 mt-3 block">
                    {book.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reader;