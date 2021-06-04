import React from "react";
import Person from "./Person";

const Persons = ({ persons, deletePerson , personChange}) => {
  return (
    <div className="m-3">
      {persons.map((p) => (
        <Person
          fullName={p.fullName}
          key={p.id}
          deletePerson={() => deletePerson(p.id)}
          changed = {Event => personChange(Event , p.id)}
        />
      ))}
    </div>
  );
};

export default Persons;
