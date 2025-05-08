import { Button } from "@/Components/ui/button";
import { Calendar } from "@/Components/ui/calendar";
import { Input } from "@/Components/ui/input";
import { Label } from "@radix-ui/react-label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react"

const TripPlan = () => {
  const [date, setDate] = useState();
  const travelOptions = [
    { id: "family", label: "Family", icon: "👨‍👩‍👧‍👦" },
    { id: "couple", label: "Couple", icon: "💑" },
    { id: "solo", label: "Solo", icon: "🧍" },
  ];

  const TripPreference = [
    { id: "beaches", label: "Beaches" },
    { id: "nature", label: "Nature" },
    { id: "cities", label: "Cities" },
    { id: "culture", label: "Culture" },
    { id: "food", label: "Food" },
    { id: "adventure", label: "Adventure" },
  ];
  const [selected, setSelected] = useState("solo");
  const [preferenceId, setPreferenceId] = useState([]);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    destination: "",
    origin: "",
    travelDate: null,
    days: "",
    budget: "",
    travelWith: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/trip-details', {state : formData})

  };
  return (
    <div className="flex justify-center py-10 ">
      <motion.div 
      initial={{opacity:0, y:100}}
      animate={{opacity:1, y:0}}
      transition={{duration:.5}}
      className="w-full max-w-5xl shadow-lg">
        <div className="bg-blue-500 text-center py-10 rounded-t-lg w-full  ">
          <h1 className="text-2xl font-bold text-white">
            Plan Your Dream Trip
          </h1>
          <p className="text-lg text-white">
            Fill in the details below to get personalized travel recommendations
          </p>
        </div>
        <div className="p-8 space-y-4">
          <form onSubmit={handleSubmit}>
            <div className="grid w-full  items-center gap-1.5">
              <Label className="text-base font-medium" htmlFor="text">
                Where do you want to go?
              </Label>
              <Input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                id="text"
                placeholder="Enter city, country or region"
                className="h-12"
              />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label className="text-base font-medium" htmlFor="text">
                From Where
              </Label>
              <Input
                type="text"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
                id="text"
                placeholder="Enter city, country or region"
                className="h-12"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="grid gap-2">
                <Label className="text-base font-medium">
                  When are you traveling?
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={`h-12 text-gray-500 `}>
                      <CalendarIcon className="h-6 w-6" />
                      {formData.travelDate
                        ? formData.travelDate.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "Set Date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar
                      mode="single"
                      selected={formData.travelDate}
                      onSelect={(d) => {
                        setFormData((prev) => ({ ...prev, travelDate: d }));
                      }}
                      className="rounded-md border bg-white"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="grid gap-2">
                {" "}
                {/* giving grid property to just give gap between label and input */}
                <Label className="text-base font-medium ">How many days?</Label>
                <Input
                  type="text"
                  name="days"
                  value={formData.days}
                  onChange={handleChange}
                  placeholder="Enter no of days"
                  className="h-12"
                />
              </div>
            </div>

            <div className="grid gap-3">
              <Label className="text-base font-medium">
                What's your budget?
              </Label>
              <Input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Enter your approximate budget"
                className="h-12"
              />
            </div>
            <div className="grid gap-3">
              <Label className="text-base font-medium">
                Who are you traveling with?
              </Label>
              <div className="grid grid-cols-3 gap-3">
                {travelOptions.map((options) => (
                  <div
                    key={options.id}
                    className={`flex flex-col border justify-center items-center rounded-lg p-4 transition-all
                ${
                  selected == options.id
                    ? "border-blue-500 bg-blue-100"
                    : "border-gray-300 bg-white hover:bg-gray-100"
                }
                `}
                    onClick={() => {
                      setSelected(options.id);
                      setFormData({ ...formData, travelWith: options.label });
                    }}
                  >
                    <span className="text-2xl">{options.icon}</span>
                    <span className="text-sm font-medium">{options.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-3 pb-10 border-b-1">
              <Label className="text-base font-medium">
                What do you enjoy?
              </Label>
              <div className="grid grid-cols-3 gap-2">
                {TripPreference.map((preference) => (
                  <div
                    className={`p-3 border  text-sm font-medium text-gray-800 rounded-lg text-center ${
                      preferenceId.includes(preference.id)
                        ? "bg-blue-100 border-blue-500"
                        : "border-gray-300 bg-white hover:bg-gray-100"
                    } `}
                    onClick={() => {
                      if (preferenceId.includes(preference.id)) {
                        let newpreferenceId = preferenceId.filter(
                          (ele) => ele != preference.id
                        );
                        setPreferenceId(newpreferenceId);
                      } else {
                        setPreferenceId([...preferenceId, preference.id]);
                      }
                    }}
                    key={preference.id}
                  >
                    {preference.id}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <Button type="submit">Find My Perfect Trip</Button>
            </div>
          </form>
        </div>
      </ motion.div>
    </div>
  );
};

export default TripPlan;
