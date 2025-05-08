import { Calendar, Compass, CompassIcon, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const HeroSection = ({scroll}) => {
  useEffect(() => {
    if(scroll){
      const element = document.getElementById("popular-destinations")
      if(element){
        element.scrollIntoView({behaviour: "smooth", block:"start"})
      }
    }
  },[scroll])
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 pt-16 md:pt-24">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Plan Your Perfect Trip with{" "}
          <span className="text-white bg-blue-600">TripGenius</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
          Discover amazing destinations, create personalized itineraries, and
          make unforgettable memories with our AI-powered travel planner.
        </p>
        <div className="mt-6">
          <Link to="/trip-planning"><button className="px-6 py-3 text-lg font-semibold cursor-pointer bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all animate-bounce">
            Get Started
          </button>
          </Link>
        </div>
      </div>
      <div className="text-center space-y-2">
        <h1 id="popular-destinations" className="text-4xl tracking-tighter font-bold mt-24">
          Popular Destinations
        </h1>
        <p className="text-muted-foreground md:text-xl/relaxed">
          Explore trending destinations loved by travelers around the world
        </p>
      </div>

      <div className="grid py-4 max-w-5xl gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Leh Ladakh",
            image: (
              <img
                src="homepage1.jpeg"
                className="object-cover transition-transform group-hover:scale-105"
                alt=""
              />
            ),
          },
          {
            name: "Jaipur, Rajasthan ",
            image: (
              <img
                src="homepage2.jpg"
                className="object-cover transition-transform group-hover:scale-105"
                alt=""
              />
            ),
          },
          {
            name: "Kerla",
            image: (
              <img
                src="homepage3.jpeg"
                className="w-full object-cover transition-transform  group-hover:scale-105"
                alt=""
              />
            ),
          },
          {
            name: "Goa (Beaches & Nightlife)",
            image: (
              <img
                src="./homepage4.jpeg"
                className="object-cover h-full transition-transform group-hover:scale-105"
                alt=""
              />
            ),
          },
          {
            name: "Varanasi (Spiritual)",
            image: (
              <img
                src="./homepage5.jpeg"
                className="object-cover w-full  transition-transform group-hover:scale-105"
                alt=""
              />
            ),
          },
          {
            name: "Manali, Himachal Pradesh",
            image: (
              <img
                src="homepage6.jpeg"
                className="w-full object-cover  transition-transform group-hover:scale-105"
                alt=""
              />
            ),
          },
        ].map((destination, index) => (
          <div
          key={index}
          className="relative  h-64 border overflow-hidden border-amber-700 rounded-lg ">
            <div className="flex w-full justify-center">
            {destination.image}
            </div>
            <div className="bg-amber-100 w-full  p-4 absolute bottom-0">
              <h3 className="text-xl font-bold ">
                {destination.name}
              </h3>
              <Button variant="outline" className="mt-2">
                Explore
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Why Choose <span className="text-blue-600">TripGenius</span>?
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            AI-powered travel planning made easy and personalized for you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              title: "Personalized Itineraries",
              description:
                "Get custom travel plans tailored to your preferences, budget, and travel style.",
              icon: <Compass />,
            },
            {
              title: "Real-Time Updates",
              description:
                "Stay informed with the latest info on destinations, weather, and travel advisories.",
              icon: <Calendar />,
            },
            {
              title: "Local Insights",
              description:
                "Discover hidden gems and authentic experiences recommended by locals and travelers.",
              icon: <MapPin />,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-gray-300 shadow-xl bg-white/80 backdrop-blur-md rounded-xl p-8 text-center transition-all hover:scale-105  hover:shadow-2xl"
            >
              {/* Icon Container */}
              <div className="rounded-full border border-gray-300 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md">
                <span className="h-8 w-8">{feature.icon}</span>
              </div>

              {/* Feature Title */}
              <h3 className="text-2xl font-bold mt-4 text-gray-900">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* footer */}
      <div className="w-full bg-white/80 border-t-2 flex flex-col items-center pt-12 space-y-6  text-center">
        <div className="flex justify-center items-center gap-2">
          <CompassIcon className="h-8 w-8" />
          <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">
            TripGenius
          </h3>
        </div>
        <p className="text-xl md:text-2xl text-gray-500">
          Making travel planning simple, smart, and personalized.
        </p>
        <div className="py-2">
          <p className="text-xs md:text-xl text-gray-600">
            &copy; {new Date().getFullYear()} TripGenius. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
