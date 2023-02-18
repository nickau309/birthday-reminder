import React, { useState } from "react";
import data from "./data";
import List from "./List";

export default function App() {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-pink-300 to-pink-200">
      <section className="my-16 grid w-11/12 max-w-md gap-5 rounded-lg bg-white px-8 py-6 text-slate-800 shadow-lg shadow-black/30 sm:gap-6">
        <h1 className="text-xl tracking-wider sm:text-2xl">
          {people.length} Birthdays Today
        </h1>
        {people.length > 0 && <List people={people} />}
        <button
          onClick={clearAll}
          className="rounded-lg bg-pink-400 py-2 text-lg tracking-wider text-white outline-1 outline-offset-2 outline-pink-400/80 sm:text-xl"
        >
          Clear All
        </button>
      </section>
    </main>
  );
}
