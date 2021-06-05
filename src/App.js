//========================================================================================
/*                                                                                      *
 *                           AppJS form person manager project 🔥                       *
 *                                                                                      */
//========================================================================================

import React, { Component } from "react";
import Persons from "./Component/Persons/Persons";
import { ToastContainer, toast } from "react-toastify";
import Header from "./Component/Common/Header";
import AddPerson from "./Component/Common/AddPerson"
import SimpleContext from "./Contex/SimpleContext";

class App extends Component {
  //========================================================================================
  /*                                                                                      *
   * define state objects                                                                 *
   *                                                                                      */
  //========================================================================================
  state = {
    className: {
      personLength: "",
    },
    persons: [],
    person: "",
    showPersons: true,
    appTitle: "مدیریت کننده ی اشخاص",
  };
  //========================================================================================
  /*                                                                                      *
   * Handel Show Person for create                                                        *
   * ShowPerson button in project ➕                                                      *
   *                                                                                      */
  //========================================================================================

  handleShowPerson = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  //========================================================================================
  /*                                                                                      *
   * Handle Name Change for text input bottom                                             *
   * of the persons name for changing their name.                                         *
   *                                                                                      */
  //========================================================================================

  handlNameChange = (Event, id) => {
    const { persons } = this.state;

    const personsIndex = persons.findIndex((p) => p.id === id);
    const person = persons[personsIndex];
    person.fullName = Event.target.value;
    const dupPersons = [...persons];
    dupPersons[personsIndex] = person;
    this.setState({ persons: dupPersons });
  };

  //========================================================================================
  /*                                                                                      *
   * Handle Add Person for text input                                                     *
   * that adding persons information.                                                     *
   *                                                                                      */
  //========================================================================================

  handleAddPerson = () => {
    const persons = [...this.state.persons];
    const person = {
      id: Math.floor(Math.random() * 1000),
      fullName: this.state.person,
    };
    if (person.fullName !== "" && person.fullName !== " ") {
      persons.push(person);
      this.setState({ persons, person: "" });
    }
    toast.success(`${person.fullName} به لیست اضافه شد.`, {
      closeOnClick: true,
      closeButton: true,
      position: "bottom-right",
      draggableDirection: "y",
    });
  };

  handleOnChanged = (Event) => {
    this.setState({ person: Event.target.value });
  };
  //========================================================================================
  /*                                                                                      *
   * Handle Delete Person for create                                                      *
   * trash button next to the Persons added 🪣                                            *
   *                                                                                      */
  //========================================================================================

  handleDeletePerson = (id) => {
    //filter
    const duplicatPersons = [...this.state.persons];
    const fillteredPersons = duplicatPersons.filter((p) => p.id !== id);
    this.setState({ persons: fillteredPersons });
    toast.error("شخص حذف شد !", {
      closeOnClick: true,
      closeButton: true,
      position: "top-right",
      draggableDirection: "y",
    });
  };

  render() {
    const { persons, showPersons, className } = this.state;
    var prsns = null;
    if (showPersons) {
      prsns = (
        <Persons/>
      );
    }
    
    return (
      <SimpleContext.Provider
        value={{
          handlNameChange: this.handlNameChange,
          handleDeletePerson: this.handleDeletePerson,
          handleAddPerson: this.handleAddPerson,
          handleOnChanged: this.handleOnChanged,
          handleShowPerson: this.handleShowPerson,
          state: this.state,
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
  }
}

export default App;
