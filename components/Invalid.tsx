import React from "react";

const Invalid = () => {
  return (
    <div
      className="h-screen flex-center flex-col bg-background
           text-white text-2xl sm:text-5xl space-y-2"
    >
      <h1>Invalid Access</h1>
      <h2 className="text-xl sm:text-3xl opacity-60">
        Please check your database
      </h2>
    </div>
  );
};

export default Invalid;
