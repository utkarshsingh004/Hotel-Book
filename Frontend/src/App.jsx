import React from "react";
import { ArrowRight } from "lucide-react";
import HotelCard from "./components/HotelCard";
import RestaurantCard from "./components/RestaurantCard";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-bold mb-6 text-center">
              Find Your Perfect Stay & Dining Experience
            </h1>
            <p className="text-xl mb-8 text-center max-w-2xl">
              Discover and book the best hotels and restaurants around the world
            </p>
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured Places</h2>
          <button className="flex items-center text-blue-600 hover:text-blue-700">
            View all <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <HotelCard
            image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
            name="Luxury Resort & Spa"
            location="Maldives"
            rating={4.8}
            price={299}
          />
          <RestaurantCard
            image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
            name="Le Petit Bistro"
            location="Paris, France"
            rating={4.6}
            cuisine="French"
          />
          <HotelCard
            image="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80"
            name="Mountain View Lodge"
            location="Swiss Alps"
            rating={4.7}
            price={199}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
