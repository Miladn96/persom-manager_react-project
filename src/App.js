//========================================================================================
/*                                                                                      *
 *                           AppJS form person manager project 🔥                       *
 *                                                                                      */
//========================================================================================

import React , { useState } from "react";
import AllPersons from "./Component/Persons/Persons";
import { ToastContainer, toast } from "react-toastify";
import Header from "./Component/Common/Header";
import AddPerson from "./Component/Common/AddPerson";
import SimpleContext from "./Contex/SimpleContext";

const App = () => {

    const [getPersons , setPersons] = useState([]);
    const [getSinglePerson , setSinglePerson] = useState("");
    const [getShowPersons , setShowPersons] = useState(true);
    const [getAppTitle ] = useState("مدیریت کننده اشخاص");

  const handleShowPerson = () => {
    setShowPersons(!getShowPersons);
  };

  //========================================================================================
  /*                                                                                      *
   * Handle Name Change for text input bottom                                             *
   * of the persons name for changing their name.                                         *
   *                                                                                      */
  //========================================================================================

  const handleNameChange = (Event, id) => {

    const personsIndex = getPersons.findIndex((p) => p.id === id);
    const person = getPersons[personsIndex];
    person.fullName = Event.target.value;
    const dupPersons = [...getPersons];
    dupPersons[personsIndex] = person;
    setPersons(dupPersons);
  };

  //========================================================================================
  /*                                                                                      *
   * Handle Add Person for text input                                                     *
   * that adding persons information.                                                     *
   *                                                                                      */
  //========================================================================================

  const handleAddPerson = () => {
    const persons = [...getPersons];
    const person = {
      id: Math.floor(Math.random() * 1000),
      fullName: getSinglePerson,
    };
    if (getSinglePerson.fullName !== "" && getSinglePerson.fullName !== " ") {
      persons.push(person);
      setPersons(persons);
      setSinglePerson("");
    }
    toast.success(`${person.fullName} به لیست اضافه شد.`, {
      closeOnClick: true,
      closeButton: true,
      position: "bottom-right",
      draggableDirection: "y",
    });
  };

  const handleOnChanged = (Event) => {
    setSinglePerson(Event.target.value );
  };
  //========================================================================================
  /*                                                                                      *
   * Handle Delete Person for create                                                      *
   * trash button next to the Persons added 🪣                                            *
   *                                                                                      */
  //========================================================================================

  const handleDeletePerson = (id) => {
    //filter
    const duplicatPersons = [...getPersons];
    const fillteredPersons = duplicatPersons.filter((p) => p.id !== id);
    setPersons(fillteredPersons);
    toast.error("شخص حذف شد !", {
      closeOnClick: true,
      closeButton: true,
      position: "top-right",
      draggableDirection: "y",
    });
  };

  var prsns = null;
  if (getShowPersons) {
    prsns = <AllPersons />;
  }

  return (
    <SimpleContext.Provider
      value={{
        handleNameChange: handleNameChange,
        handleDeletePerson: handleDeletePerson,
        handleAddPerson: handleAddPerson,
        handleOnChanged: handleOnChanged,
        handleShowPerson: handleShowPerson,
        setPersons: setPersons,
        Persons: getPersons,
        AppTitle: getAppTitle,
        SinglePerson: getSinglePerson,
      }}
    >
      <div className="rtl text-center">
        <Header />
        <AddPerson />
      </div>
      {prsns}
      <ToastContainer rtl />
    </SimpleContext.Provider>
  );
};

export default App;