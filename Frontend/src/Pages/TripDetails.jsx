import {
  Building,
  Bus,
  CompassIcon,
  Loader,
  MapPin,
  Plane,
  Train,
} from "lucide-react";
import { Card, CardContent } from "@/Components/ui/card";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTrip } from "@/redux/TripSlice";
import useStoreData from "@/CustomHooks/useStoreData";
// import useStoreData from "@/CustomHooks/useStoreData";

const TripDetails = () => {
  const location = useLocation();
  const formData = location.state;
  const [please, setPlease] = useState(false);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useStoreData()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer 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",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "deepseek/deepseek-chat",
            messages: [
              {
                role: "user",
                content: `
  Generate a ${formData.days}-day travel plan for the location: ${formData.destination}, for a ${formData.travelWith} with a budget ${formData.budget} and the starting location is the ${formData.origin} along with travel date is ${formData.travelDate}. Respond strictly in the following JSON format:
  
  {
    "destination": "",
    "description": "", //give description about the place in just 6 to 10 words
    "transportation": [ //if any of these transportation is not available just write NA in place of price and duration
      { "mode": "Bus", "price": "", "duration": "" }
      { "mode": "Train", "price": "", "duration": "" } 
      { "mode": "Flight", "price": "", "duration": "" }
    ],
    "accommodations": [
      { "name": "", "price": "" } //Try to give atleast 3 to 4 accommodations if possible 
    ],
    "attractions": [ //Try to give atleast 3 to 4 attractions if possible
      {
        "name": "",
        "description": "",
      }
    ]
  }
  
  Only respond with the JSON object and Try to fill all those entries with accurate information does not put any wrong information. Do not include any extra text, explanations, or markdown formatting.
  `,
              },
            ],
          }),
        }
      );

      const fetchingData = await response.json();
      const parsedData = JSON.parse(fetchingData?.choices[0]?.message?.content)
      setData(parsedData);
      dispatch(setTrip(parsedData));
    };

    fetchData();
    
  }, []);

  setTimeout(() => {
    setPlease(true);
  }, 15000);

  if (!data) {
    return (
      <div className="h-screen flex flex-col items-center justify-center ">
        <Loader className="animate-spin h-10 w-10  " />{" "}
        <p className="text-gray-900">Preparing Your Trip Please wait...</p>
        {please && (
          <p className="text-xs text-muted-foreground">
            It may take upto some minutes
          </p>
        )}
      </div>
    );
  }
  // useStoreData();
  
  return (
    <div className="">
      <div className="relative flex flex-col px-10 py-10 bg-gradient-to-r from-purple-500 to-blue-500 ">
        <div>
          <h3 className="text-3xl font-bold text-zinc-50">
            Welcome your trip to {data.destination}
          </h3>
          <div className="flex gap-2 p-2">
            <MapPin className="text-white" />
            <p className="text-zinc-100 ">{data.description}</p>
          </div>
        </div>

        <div>
          <MapPin className="h-64 w-64 text-white absolute bottom-0 right-0 opacity-10 transform translate-x-1 translate-y-1/4 " />
        </div>
      </div>
      <div className="space-y-5 p-2">
        <h3 className="text-xl bg-gray-200 rounded-lg p-2 font-medium">
          Transportation
        </h3>
        <div className="grid md:grid-cols-3 gap-2 sm:mx-10">
          <div className="flex border border-gray-300 shadow-lg">
            <div className="px-8 flex items-center bg-amber-100">
              <Bus className="h-6 w-6 text-amber-500" />
            </div>
            <div className="p-4 space-y-2 w-full">
              <p className="text-lg font-medium">Bus</p>
              <div className="flex justify-between ">
                <p className="text-muted-foreground">Price</p>
                <p className="font-medium">{data.transportation[0].price}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-muted-foreground">Duration</p>
                <p className="font-medium">{data.transportation[0].duration}</p>
              </div>
            </div>
          </div>

          <div className="flex border border-gray-300 shadow-lg">
            <div className="px-8 flex items-center bg-blue-100">
              <Train className="h-6 w-6 text-blue-500" />
            </div>
            <div className="p-4 space-y-2 w-full">
              <p className="text-lg font-medium">Train</p>
              <div className="flex justify-between ">
                <p className="text-muted-foreground">Price</p>
                <p className="font-medium">{data.transportation[1].price}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-muted-foreground">Duration</p>
                <p className="font-medium">{data.transportation[1].duration}</p>
              </div>
            </div>
          </div>

          <div className="flex border border-gray-300 shadow-lg">
            <div className="px-8 flex items-center bg-green-200">
              <Plane className="h-6 w-6 text-green-500" />
            </div>
            <div className="p-4 space-y-2 w-full">
              <p className="text-lg font-medium">Flight</p>
              <div className="flex justify-between">
                <p className="text-muted-foreground">Price</p>
                <p className="font-medium">{data.transportation[2].price}</p>
              </div>
              <div className="flex justify-between ">
                <p className="text-muted-foreground">Duration</p>
                <p className="font-medium">{data.transportation[2].duration}</p>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-xl bg-gray-200 rounded-lg p-2 font-medium">
          Accomodation
        </h3>
        <div className="sm:mx-10 grid sm:grid-cols-3 grid-cols-1 gap-2">
          {data.accommodations.map((item, idx) => (
            <div
              className="border  items-center border-gray-300 flex "
              key={idx}
            >
              <div className="p-6 bg-indigo-100">
                <Building className="h-8 w-8 text-indigo-600" />
              </div>
              <div className="p-2">
                <h3 className="font-bold text-xg">{item.name}</h3>
                <p className="font-medium text-md">{item.price} INR</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-xl bg-gray-200 rounded-lg p-2 font-medium">
          Nearby Attraction
        </h3>
        <div className="md:mx-10">
          <div className="grid md:grid-cols-3 gap-2">
            {data.attractions.map((item, idx) => (
              <Card
                className="w-full hover:shadow-xl transition-shadow duration-300 rounded-2xl  border border-gray-300"
                key={idx}
              >
                <CardContent className="flex flex-col items-center text-center p-6">
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <MapPin className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-2xl text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
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
        <div className="py-6">
          <p className="text-lg md:text-xl text-gray-600">
            &copy; {new Date().getFullYear()} TripGenius. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
