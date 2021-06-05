import React , { useContext } from "react";
import Person from "./Person";
import SimpleContext from "../../Contex/SimpleContext";

const Persons = () => {
  const context = useContext(SimpleContext);
  return (
        <div className="m-3">
          {context.state.persons.map((p) => (
            <Person
              fullName={p.fullName}
              key={p.id}
              deletePerson={() => context.handleDeletePerson(p.id)}
              changed={(Event) => context.handlNameChange(Event, p.id)}
            />
          ))}
        </div>
  );
};

export default Persons;
