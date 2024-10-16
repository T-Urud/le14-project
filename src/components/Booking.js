import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useForm } from "react-hook-form";

const Booking = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [arrivingDate, setArrivingDate] = useState(new Date());
  const [leavingDate, setLeavingDate] = useState(new Date());
  const [selectedAdults, setSelectedAdults] = useState("");
  const [selectedKids, setSelectedKids] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
  };

  // calculate available room for booking
  const remainingCapacity = 4 - selectedAdults;

  return (
    <div className="h-auto w-full min-h-[472px] shadow-md rounded-lg md:mt-4">
      <div className="w-full h-full min-h-[472px] relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center p-5">
          <div className=" bg-white w-full p-6 rounded-lg max-h-full max-w-96 border shadow-lg">
            <form
              className="flex flex-wrap justify-center h-full w-full font-thiner flex-1"
              onSubmit={handleSubmit(onSubmit)}
            >
              <legend className="text-xl font-semibold">
                Réserver son séjour
              </legend>
              <div className="flex gap-2 my-3 w-full">
                <div className="w-1/2 flex justify-center items-center p-2 bg-persoGrey rounded-full">
                  <select
                    {...register("Adults", { required: true })}
                    className="w-full overflow-hidden outline-none bg-persoGrey text-center xs:text-sm"
                    value={selectedAdults}
                    onChange={(e) => {
                      const adults = parseInt(e.target.value);
                      setSelectedAdults(adults);
                      if (adults + selectedKids > 4) {
                        setSelectedKids(4 - adults);
                      }
                    }}
                  >
                    <option value="" disabled>
                      Adulte(s)
                    </option>
                    {/* Array() crée tableau avec nb de spots demandés, .keyx() renvoie clés d'index, ... converti en tableau réel*/}
                    {[...Array(4).keys()]
                      // commencer array à index 1
                      .map((n) => n + 1)
                      .map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="w-1/2 flex justify-center items-center p-2 bg-persoGrey rounded-full">
                  <select
                    {...register("Kids", { required: true })}
                    className="w-full overflow-hidden outline-none bg-persoGrey text-center xs:text-sm"
                    value={selectedKids}
                    onChange={(e) => setSelectedKids(parseInt(e.target.value))}
                  >
                    <option value="" disabled>
                      Enfant(s)
                    </option>
                    {/* Array() crée tableau avec nb de spots demandés, .keyx() renvoie clés d'index, ... converti en tableau réel*/}
                    {[...Array(remainingCapacity + 1).keys()].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full flex justify-center items-center p-2 bg-transparent border rounded-full gap-4 xs:text-sm">
                <span>Arrivée</span>
                <DatePicker
                  value={arrivingDate}
                  onChange={setArrivingDate}
                  minDate={arrivingDate}
                />
              </div>
              <div className="w-full flex justify-center items-center p-2 bg-transparent border rounded-full my-1 gap-4 xs:text-sm">
                <span>Départ</span>
                <DatePicker
                  value={leavingDate}
                  onChange={setLeavingDate}
                  minDate={arrivingDate}
                  aria-label="Sélectionner la date de départ"
                />
              </div>
              <div className="w-full flex justify-center items-center p-2 bg-transparent border rounded-full my-1">
                <input
                  type="text"
                  placeholder="Email"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="bg-transparent rounded-md w-full outline-none ml-4"
                />
              </div>
              <div className="w-full flex justify-center items-center p-2 bg-transparent border rounded-full">
                <input
                  type="text"
                  placeholder="Nom"
                  {...register("Last name", {
                    required: true,
                    maxLength: 100,
                  })}
                  className="bg-transparent rounded-md w-full outline-none ml-4"
                />
              </div>
              <button
                type="submit"
                className={`text-socialColor bg-[#9a3136] hover:bg-gradient-to-br  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-2 ${
                  isSubmitted ? "cursor-default" : "cursor-pointer"
                }`}
                aria-label="Bouton pour réserver votre séjour"
              >
                {isSubmitted ? "Demande envoyée !" : "Réserver"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
