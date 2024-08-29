import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useForm } from "react-hook-form";
import backgroundImg from "../assets/landscape_art_road_127350_800x600.jpg";

const Booking = () => {
  const [date, setDate] = useState(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <img src={backgroundImg} alt="" className="w-full h-full rounded-r-2xl" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className=" bg-white max-w-96 w-full p-8 rounded-lg max-h-96 h-full">
          <form
            className="flex flex-wrap justify-center h-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <legend className="text-xl font-semibold">
              Réserver votre séjour
            </legend>
            <div className="flex gap-2 my-3 w-full">
              <div className="w-1/2 flex justify-center items-center p-2 bg-persoGrey rounded-full">
                <input
                  type="number"
                  placeholder="Adulte(s)"
                  {...register("Adults", { required: true })}
                  max={4}
                  min={1}
                  className="w-full overflow-hidden outline-none bg-persoGrey text-center"
                />
              </div>
              <div className="w-1/2 flex justify-center items-center p-2 bg-persoGrey rounded-full">
                <input
                  type="number"
                  placeholder="Enfant(s)"
                  {...register("Kids", { required: true })}
                  max={4}
                  min={0}
                  className="w-full overflow-hidden outline-none bg-persoGrey text-center"
                />
              </div>
            </div>
            <div className="w-full flex justify-center items-center p-2 bg-transparent border rounded-full gap-4">
              <span>Arrivée</span>
              <DatePicker
                value={date}
                onChange={setDate}
                minDate={date}
                // className="border-transparent"
              />
            </div>
            <div className="w-full flex justify-center items-center p-2 bg-transparent border rounded-full my-1 gap-4">
              <span>Départ</span>
              <DatePicker value={date} onChange={setDate} minDate={date} />
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
                {...register("Last name", { required: true, maxLength: 100 })}
                className="bg-transparent rounded-md w-full outline-none ml-4"
              />{" "}
            </div>
            <input
              type="submit"
              className="w-full mt-2 bg-black text-white rounded-full p-2 uppercase font-semibold cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
