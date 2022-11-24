import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

import { User } from "@/types";

interface Props {
  user: User;
}

const ContactMe = ({ user }: Props) => (
  <div className="relative layout flex-center w-screen px-5 md:px-10">
    <h2 className="title">Contact</h2>

    <div className="flex flex-col space-y-20 md:space-y-32 w-full">
      <h3 className="text-2xl md:text-4xl font-medium md:font-semibold text-center">
        Just{" "}
        <span className="underline decoration-primary underline-offset-8">
          feel free to
        </span>{" "}
        talk to me!
      </h3>

      <div className="space-y-10 md:space-y-20">
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

        <div className="contact-detail">
          <AiFillMessage className="contact-icon" />
          <p>Click ME on the bottom right!</p>
        </div>
      </div>
    </div>
  </div>
);

export default ContactMe;
