import React from "react";

function App() {
  return (
    <div className="px-8 py-12">
      <img className="h-10" src={require("./img/logo.svg")} alt="" />
      <img
        className="mt-6 rounded-lg shadow-xl"
        src={require("./img/beach-work.jpg")}
        alt="vacationing in the beach"
      />
      <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight">
        You can work from anywhere. <span className="text-indigo-500">Take advantage of it.</span>
      </h1>
      <p className="mt-2 text-gray-600">
        Workcation helps you find wok-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.
      </p>
      <div className="mt-4">
        <a className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-sm text-white uppercase tracking-wider font-semibold" href="/">Book your scape</a>
      </div>
    </div>
  );
}

export default App;
