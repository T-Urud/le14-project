import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useForm } from "react-hook-form";
import image from "../images";

const Booking = () => {
  const [arrivingDate, setArrivingDate] = useState(new Date());
  const [leavingDate, setLeavingDate] = useState(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <img src={image[0]} alt="" className="w-full h-full rounded-r-2xl" />
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
                <select
                  {...register("Adults", { required: true })}
                  className="w-full overflow-hidden outline-none bg-persoGrey text-center"
                >
                  <option value>Adulte(s) </option>
                  <option value="1 ">1 </option>
                  <option value=" 2 "> 2 </option>
                  <option value=" 3"> 3</option>
                  <option value=" 4"> 4</option>
                </select>
              </div>
              <div className="w-1/2 flex justify-center items-center p-2 bg-persoGrey rounded-full">
                <select
                  {...register("Kids", { required: true })}
                  className="w-full overflow-hidden outline-none bg-persoGrey text-center"
                >
                  <option value>Enfant(s) </option>
                  <option value="0 ">0 </option>
                  <option value="1 ">1 </option>
                  <option value=" 2 "> 2 </option>
                  <option value=" 3"> 3</option>
                </select>
              </div>
            </div>
            <div className="w-full flex justify-center items-center p-2 bg-transparent border rounded-full gap-4">
              <span>Arrivée</span>
              <DatePicker
                value={arrivingDate}
                onChange={setArrivingDate}
                minDate={arrivingDate}
              />
            </div>
            <div className="w-full flex justify-center items-center p-2 bg-transparent border rounded-full my-1 gap-4">
              <span>Départ</span>
              <DatePicker
                value={leavingDate}
                onChange={setLeavingDate}
                minDate={arrivingDate}
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
