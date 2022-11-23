import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const { name, email, subject, message } = formData;

    window.location.href = `mailto:mia.lab@gmail.com?subject=${subject}&body=Hi, my name is ${name}, ${message} (${email})`;
  };

  return (
    <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h2 className="title">Contact</h2>

      <div className="flex flex-col space-y-10">
        <h3 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-primary/50 underline">Lets Talk.</span>
        </h3>

        <div className="space-y-10">
          <div className="flex-center space-x-5 text-2xl">
            <FaPhoneAlt className="text-primary w-7 h-7 animate-pulse" />
            <p>+82 10-1234-1234</p>
          </div>
          <div className="flex-center space-x-5 text-2xl">
            <FaEnvelope className="text-primary w-7 h-7 animate-pulse" />
            <p>mia.lab@gmail.com</p>
          </div>
          <div className="flex-center space-x-5 text-2xl">
            <FaMapMarkerAlt className="text-primary w-7 h-7 animate-pulse" />
            <p>123 Developer Lane</p>
          </div>
        </div>

        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contact-input"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contact-input"
              type="text"
              placeholder="Email"
            />
          </div>

          <input
            {...register("subject")}
            className="contact-input"
            type="text"
            placeholder="Subject"
          />

          <textarea
            {...register("message")}
            className="contact-input"
            placeholder="Message"
          />

          <button
            className="bg-primary py-5 px-10 rounded-md text-black
                       font-bold text-lg opacity-70"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
