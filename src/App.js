import React, { Component } from "react";
import Persons from "./Component/Persons/Persons";
class App extends Component {
  state = {
    persons: [],
    person: "",
    showPersons: true,
  };
  handleShowPerson = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };
  handleDeletePerson = (id) => {
    //filter
    const duplicatPersons = [...this.state.persons];
    const fillteredPersons = duplicatPersons.filter((p) => p.id !== id);
    this.setState({ persons: fillteredPersons });
  };
  handlNameChange = (Event, id) => {
    const { persons } = this.state;

    const personsIndex = persons.findIndex((p) => p.id === id);
    const person = persons[personsIndex];
    person.fullName = Event.target.value;
    const dupPersons = [...persons];
    dupPersons[personsIndex] = person;
    this.setState({ persons: dupPersons });
  };
  handleAddPerson = () => {
    const persons = [...this.state.persons];
    const person = {
      id: Math.floor(Math.random() * 1000),
      fullName: this.state.person,
    };
    persons.push(person);
    this.setState({ persons, person: "" });
  };
  handleOnChanged = (Event) => {
    this.setState({ person: Event.target.value });
  };
  render() {
    const { persons, showPersons } = this.state;
    var prsns = null;
    if (showPersons) {
      prsns = (
        <Persons
          persons={persons}
          id={persons.id}
          deletePerson={this.handleDeletePerson}
          personChange={this.handlNameChange}
        />
      );
    }
    return (
      <div className="rtl text-center">
        <div>
          <h2 className="alert alert-info ">مدیریت کننده ی اشخاص</h2>
        </div>

        <h5 className="alert alert-light">
          تعداد اشخاص {persons.length} نفر هست
        </h5>

        <div>
          <input
            placeholder={"Add Person ..."}
            onChange={this.handleOnChanged}
            value={this.state.person}
            className={"inpt inpt-blue"}
          />
          <button
            onClick={this.handleAddPerson}
            className={"btn btn-sm btn-success fa fa-plus-square"}
          />
        </div>
        <button
          onClick={this.handleShowPerson}
          className={"btn btn-lg btn-info"}
        >
          نمایش اشخاص
        </button>
        {prsns}
      </div>
    );
  }
}

export default App;
