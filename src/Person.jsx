import React from "react";

export default function Person({ name, age, image }) {
  return (
    <article className="flex items-center gap-3">
      <img
        src={image}
        alt={name}
        className="h-20 w-20 rounded-full object-cover shadow-lg"
      />
      <div className="text-sm sm:text-base">
        <h2 className="font-bold tracking-wider">{name}</h2>
        <p className="text-slate-500">{age} years</p>
      </div>
    </article>
  );
}
