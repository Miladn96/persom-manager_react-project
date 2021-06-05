import React, { useContext } from "react";
import Person from "./Person";
import SimpleContext from "../../Contex/SimpleContext";

const AllPersons = () => {
  const context = useContext(SimpleContext);
  return (
    <div className="m-3">
      {context.Persons.map((p) => (
        <Person
          fullName={p.fullName}
          key={p.id}
          deletePerson={() => context.handleDeletePerson(p.id)}
          changed={(Event) => context.handleNameChange(Event, p.id)}
        />
      ))}
    </div>
  );
};

export default AllPersons;
