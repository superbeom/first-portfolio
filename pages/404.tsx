import React from "react";

const NotFound = () => {
  return (
    <div
      className="h-screen flex-center flex-col bg-background
           text-white text-2xl sm:text-5xl space-y-2"
    >
      <h1>Not found</h1>
      <h2 className="text-xl sm:text-3xl opacity-60">Please check the url</h2>
    </div>
  );
};

export default NotFound;
