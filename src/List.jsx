import React from "react";
import Person from "./Person";

export default function List({ people }) {
  return people.map((person) => {
    const { id, ...rest } = person;
    return <Person key={id} {...rest} />;
  });
}
