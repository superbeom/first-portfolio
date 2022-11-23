import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { User } from "@/types";

interface Props {
  user: User;
}

const ContactMe = ({ user }: Props) => {
  const lowMobile = window.innerHeight < 800;

  return (
    <div className="relative layout flex-center w-screen px-5 md:px-10">
      <h2 className="title">Contact</h2>

      <div
        className={`flex flex-col space-y-10 w-full ${
          lowMobile && "mt-32 mb-14"
        }`}
      >
        <h3 className="text-2xl md:text-4xl font-medium md:font-semibold text-center">
          <span className="underline decoration-primary underline-offset-8">
            Feel free to
          </span>{" "}
          talk to me!
        </h3>

        <div className="space-y-10">
          <div className="contact-detail">
            <FaPhoneAlt className="contact-icon" />
            <p>{user.phone}</p>
          </div>
          <div className="contact-detail">
            <FaEnvelope className="contact-icon" />
            <p>{user.email}</p>
          </div>
          <div className="contact-detail">
            <FaMapMarkerAlt className="contact-icon" />
            <p>{user.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
