import Navbar from "@/Components/Navbar";
import useGetAllTrip from "@/CustomHooks/useGetAllTrip";
import { useSelector } from "react-redux";

const History = () => {
  useGetAllTrip()
  const {tripFromDB} = useSelector((store) => store.trip)
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 mt-4 rounded-xl shadow-lg text-white">
        <h1 className="text-3xl font-bold text-center">Your Past Trips</h1>
        <p className="text-center text-sm mt-1 opacity-90">
          Here’s a list of places you’ve explored so far
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 px-4">
        {tripFromDB?.map((trip, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
          >
            <img
              src="./History.webp"
              alt="img"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Trip to {trip.destination}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{trip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default History;
